using System;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Linq;

using DocBeam.Auth;
using DocBeam.Services;

namespace DocBeam.Controllers
{
    [Authorize(Policy = "ApiUser")]
    [Route("api/[controller]/[action]")]
    public class DashboardController : Controller
    {
        private readonly ClaimsPrincipal _caller;
        private readonly IUserService _userService;
        public DashboardController(IUserService userService, IHttpContextAccessor httpContextAccessor)
        {
            _caller = httpContextAccessor.HttpContext.User;
            _userService = userService;
        }

        [HttpGet]
        public async Task<IActionResult> Home()
        {
            // retrieve the user info
            // HttpContext.User
            var userId = _caller.Claims.Single(c => c.Type == "id");
            var customer = await _userService.FindByUserIdAsync(userId.Value);

            return new OkObjectResult(new
            {
                customer.FirstName,
                customer.LastName,
                customer.Identity.PictureUrl,
                customer.Identity.FacebookId,
                customer.Location,
                customer.Gender
            });
        }
    }
}