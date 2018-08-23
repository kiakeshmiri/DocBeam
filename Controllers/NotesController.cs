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
    [Authorize(Policy = "ApiUser")]
    [Route("api/[controller]")]
    public class NotesController : Controller
    {
        private readonly INoteRepository _noteRepository;

        public NotesController(INoteRepository noteRepository)
        {
            _noteRepository = noteRepository;
        }

        // GET: notes/notes
        [HttpGet]
        public Task<string> Get()
        {
            return GetNoteInternal();
        }

        private async Task<string> GetNoteInternal()
        {
            var notes = await _noteRepository.GetAllNotes();
            return JsonConvert.SerializeObject(notes);
        }

        // GET api/notes/5
        [HttpGet("{id}")]
        public Task<string> Get(string id)
        {
            return GetNoteByIdInternal(id);
        }

        private async Task<string> GetNoteByIdInternal(string id)
        {
            var note = await _noteRepository.GetNote(id) ?? new Note();
            return JsonConvert.SerializeObject(note);
        }

        // POST api/notes
        [HttpPost]
        public void Post([FromBody]string value)
        {
            _noteRepository.AddNote(new Note()
            { Body = value, CreatedOn = DateTime.Now, UpdatedOn = DateTime.Now });
        }

        // PUT api/notes/5
        [HttpPut("{id}")]
        public void Put(string id, [FromBody]string value)
        {
            _noteRepository.UpdateNote(id, value);
        }

        // DELETE api/notes/5
        public void Delete(string id)
        {
            _noteRepository.RemoveNote(id);
        }
    }
}