using System.Threading.Tasks; 
using System.Collections.Generic;  

using DocBeam.Models;

namespace DocBeam.Services
{
    public interface IAttachmentService
    {
        Task<IEnumerable<Attachment>> GetAllAttachments();
        Task<Attachment> GetAttachment(string id);
        Task AddAttachment(Attachment item);
        Task<bool> RemoveAttachment(string id);
        Task<bool> UpdateAttachment(string id, string fileName, byte[] fileContent, int userId);
    }
}