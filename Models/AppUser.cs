using Microsoft.AspNetCore.Identity;

namespace DocBeam.Models
{
    public class AppUser : IdentityUser
    {
        public long? FacebookId { get; set; }
        public string PictureUrl { get; set; }
        public string Password { get; set; }
    }
}