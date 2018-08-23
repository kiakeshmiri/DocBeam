using System.Threading.Tasks; 
using System.Collections.Generic;  

using DocBeam.Models;

namespace DocBeam.Services
{
    public interface IUserService
    {
        Task<UserCreateResultCode> Create(Customer customer);
        Task<Customer> FindByNameAsync(string userName);
        Task<Customer> FindByUserIdAsync(string userId);
        bool CheckPasswordAsync(Customer customer, string password);
    }
}