using System;
using Microsoft.Extensions.Options;
using System.Collections.Generic;
using System.Threading.Tasks;
using MongoDB.Driver;
using MongoDB.Bson;

using DocBeam.DataAccess;
using DocBeam.Models;

namespace DocBeam.Services
{
    public class UserService : IUserService
    {
        private readonly DBContext _context = null;

        public UserService(IOptions<Settings> settings)
        {
            _context = new DBContext(settings);
        }
        public async Task<UserCreateResultCode> Create(Customer customer)
        {
            try
            {
                await _context.Customers.InsertOneAsync(customer);
                return UserCreateResultCode.Success;
            }
            catch (Exception exp)
            {
                System.Console.WriteLine(exp.Message);
                // log or manage the exception
                return UserCreateResultCode.Failed;
            }
        }

        public async Task<Customer> FindByNameAsync(string userName)
        {
            return await _context.Customers
                .Find(u => u.Identity.UserName == userName)
                .FirstOrDefaultAsync();
        }
        public async Task<Customer> FindByUserIdAsync(string userId)
        {
            var stringFilter = "{ _id: ObjectId('" + userId + "') }";
            return await _context.Customers
                .Find(stringFilter)
                .FirstOrDefaultAsync();
        }
        public bool CheckPasswordAsync(Customer customer, string password)
        {
            var exists = customer.Identity.UserName == customer.Identity.UserName && customer.Identity.Password == password;
            return exists;
        }
    }
}