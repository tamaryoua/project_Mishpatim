
using Api_Mishpatim.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api_Mishpatim.Services
{
    public interface IEmailSender
    {
        void SendEmail(Message message);
    }
}
