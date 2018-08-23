using System;
using System.Collections.Generic;
using DocBeam.Models;
using MongoDB.Driver;
using Microsoft.Extensions.Options;

namespace DocBeam.DataAccess
{
    public class DBContext
    {
        private readonly IMongoDatabase _database = null;

        public DBContext(IOptions<Settings> optionSettings)
        {
            string mongoDbAuthMechanism = "SCRAM-SHA-1";
            MongoInternalIdentity internalIdentity =
                new MongoInternalIdentity("admin", optionSettings.Value.Username);
            PasswordEvidence passwordEvidence = new PasswordEvidence(optionSettings.Value.Password);
            MongoCredential mongoCredential =
                 new MongoCredential(mongoDbAuthMechanism,
                         internalIdentity, passwordEvidence);
            List<MongoCredential> credentials =
                       new List<MongoCredential>() { mongoCredential };

            MongoClientSettings settings = new MongoClientSettings();
            // comment this line below if your mongo doesn't run on secured mode
            //settings.Credentials = credentials;
            String mongoHost = optionSettings.Value.Host;
            MongoServerAddress address = new MongoServerAddress(mongoHost);
            settings.Server = address;

            MongoClient client = new MongoClient(settings);
            if (client != null)
                _database = client.GetDatabase(optionSettings.Value.Database);

        }

        public IMongoCollection<Note> Notes
        {
            get
            {
                return _database.GetCollection<Note>("Note");
            }
        }

        public IMongoCollection<Attachment> Attachments
        {
            get
            {
                return _database.GetCollection<Attachment>("Attachment");
            }
        }
        public IMongoCollection<Customer> Customers
        {
            get
            {
                return _database.GetCollection<Customer>("Customer");
            }
        }
    }
}