using System;
using MongoDB.Bson.Serialization.Attributes;

namespace DocBeam.Models
{
    public class NoteImage
    {
        public string Url { get; set; } = string.Empty;
        public string ThumbnailUrl { get; set; } = string.Empty;
        public long ImageSize { get; set; } = 0L;
    }
}