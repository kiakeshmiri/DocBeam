using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Identity;


using DocBeam.Models;
using DocBeam.ViewModels;
using DocBeam.Services;

namespace DocBeam.Controllers
{
    [Route("api/[controller]")]
    public class AccountsController : Controller
    {
        private readonly IUserService userService;
        public AccountsController(IUserService service)
        {
            this.userService = service;
        }
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]Customer customer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var result = await userService.Create(customer);

            if (result == UserCreateResultCode.Success)
                return new OkObjectResult(Json("Account created"));
            else
                return new BadRequestObjectResult(Json("Account create Failed"));
        }
        [HttpGet]
        public IActionResult Get()
        {
            return Json("I'm here");
        }
    }
}