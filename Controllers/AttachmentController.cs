using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Newtonsoft.Json;

using DocBeam.Models;
using DocBeam.Services;

namespace DocBeam.Controllers
{
    [Route("api/[controller]")]
    public class AttachmentController : Controller
    {
        private readonly IAttachmentService attachmentService;
        public AttachmentController(IAttachmentService service){
            attachmentService = service;
        }

        [HttpGet]
        public Task<string> Get()
        {
            return GetAttachmentInternal();
        }

        private async Task<string> GetAttachmentInternal()
        {
            var attachments = await attachmentService.GetAllAttachments();
            return JsonConvert.SerializeObject(attachments);
        }
        
        [Authorize(Policy = "ApiUser")]
        [HttpGet("{id}")]
        public Task<Attachment> Get(string id)
        {
            var currentUser = HttpContext.User;
            return attachmentService.GetAttachment(id);
        }
    }
}