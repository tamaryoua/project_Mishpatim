using Microsoft.AspNetCore.Http;
using MimeKit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api_Mishpatim.Models
{
    public class Message
    {
        //public string ToEmail { get; set; }
        //public string Subject { get; set; }
        //public string Body { get; set; }
        //public List<IFormFile> Attachments { get; set; }
        public List<MailboxAddress> To { get; set; }
        public string Subject { get; set; }
        public string Content { get; set; }
        public Message(IEnumerable<string> to, string subject, string content)
        {
            To = new List<MailboxAddress>();
            To.AddRange(to.Select(x => new MailboxAddress(x)));
            Subject = subject;
            Content = content;
        }
    }
}
