using System;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using Microsoft.Extensions.Options;

namespace DocBeam.Models
{
    public class Attachment
    {
        [BsonId]
        public string Id { get; set; }
        public string FileName { get; set; }
        public byte[] FileContent { get; set; }
        public DateTime UpdatedOn { get; set; } = DateTime.Now;
        public DateTime CreatedOn { get; set; } = DateTime.Now;
        public int UserId { get; set; } = 0;
    }
}