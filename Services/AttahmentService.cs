using Microsoft.Extensions.Options;
using System.Collections.Generic;
using System.Threading.Tasks;
using MongoDB.Driver;
using MongoDB.Bson;
using DocBeam.DataAccess;
using DocBeam.Models;

namespace DocBeam.Services
{
    public class AttachmentService : IAttachmentService
    {
        private readonly DBContext _context = null;

        public AttachmentService(IOptions<Settings> settings)
        {
            _context = new DBContext(settings);
        }
        public async Task<IEnumerable<Attachment>> GetAllAttachments()
        {
            return await _context.Attachments.Find(_ => true).ToListAsync();
        }
        public async Task<Attachment> GetAttachment(string id)
        {

            var filter = Builders<Attachment>.Filter.Eq("Id", id);

            return await _context.Attachments
                .Find(filter).SingleOrDefaultAsync();
        }
        public async Task AddAttachment(Attachment item)
        {
            await _context.Attachments
                .InsertOneAsync(item);
        }
        public async Task<bool> RemoveAttachment(string id)
        {
            DeleteResult actionResult = await _context.Attachments.DeleteOneAsync(
                       Builders<Attachment>.Filter.Eq("Id", id));

            return actionResult.IsAcknowledged
                && actionResult.DeletedCount > 0;
        }
        public async Task<bool> UpdateAttachment(string id, string fileName, byte[] fileContent, int userId)
        {
            var filter = Builders<Attachment>.Filter.Eq(a => a.Id, id);
            var update = Builders<Attachment>.Update
                .Set(a => a.FileContent, fileContent)
                .Set(a => a.FileName, fileName)
                .Set(a => a.UserId, userId)
                .CurrentDate(a => a.UpdatedOn);

            UpdateResult actionResult
               = await _context.Attachments.UpdateOneAsync(filter, update);

            return actionResult.IsAcknowledged
                && actionResult.ModifiedCount > 0;
        }
    }
}