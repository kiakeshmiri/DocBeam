using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using DocBeam.Services;
using DocBeam.Models;

namespace DocBeam.Controllers
{
    [Route("api/[controller]")]
    public class SystemController : Controller
    {
        private readonly INoteRepository _noteRepository;
        private readonly IAttachmentService _attachmentService;

        public SystemController(INoteRepository noteRepository, IAttachmentService attachmentService)
        {
            _noteRepository = noteRepository;
            _attachmentService = attachmentService;
        }

        // Call an initialization - api/system/init
        [HttpGet("{setting}")]
        public string Get(string setting)
        {
            switch (setting)
            {
                case "init":
                    _noteRepository.RemoveAllNotes();
                    _noteRepository.AddNote(new Note()
                    {
                        Id = "1",
                        Body = "Test note 1",
                        CreatedOn = DateTime.Now,
                        UpdatedOn = DateTime.Now,
                        UserId = 1
                    });
                    _noteRepository.AddNote(new Note()
                    {
                        Id = "2",
                        Body = "Test note 2",
                        CreatedOn = DateTime.Now,
                        UpdatedOn = DateTime.Now,
                        UserId = 1
                    });
                    _noteRepository.AddNote(new Note()
                    {
                        Id = "3",
                        Body = "Test note 3",
                        CreatedOn = DateTime.Now,
                        UpdatedOn = DateTime.Now,
                        UserId = 2
                    });
                    _noteRepository.AddNote(new Note()
                    {
                        Id = "4",
                        Body = "Test note 4",
                        CreatedOn = DateTime.Now,
                        UpdatedOn = DateTime.Now,
                        UserId = 2
                    });

                    return "Done";

                case "InitAttachments":
                    _attachmentService.AddAttachment(new Attachment()
                    {
                        Id = "1",
                        FileName = "blah.pdf",
                        FileContent = new byte[] { 1, 3, 2, 14, 45 },
                        CreatedOn = DateTime.Now,
                        UpdatedOn = DateTime.Now,
                        UserId = 2
                    });
                    return "Attachments Done";
            }

            return "Unknown";
        }
    }
}