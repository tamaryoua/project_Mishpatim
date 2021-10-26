using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;
using Api_Mishpatim.Models;
using Api_Mishpatim.Services;
using Microsoft.AspNetCore.Mvc;

namespace Api_Mishpatim.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmailController : Controller
    {
        //private readonly IMailService mailService;
        //public EmailController(IMailService mailService)
        //{
        //    this.mailService = mailService;
        //}

        //[HttpPost("Send")]
        //public async Task<IActionResult> Send([FromForm] MailRequest request)
        //{
        //    try
        //    {
        //        await mailService.SendEmailAsync(request);
        //        return Ok();
        //    }
        //    catch (Exception ex)
        //    {

        //        throw ex;
        //    }

        //}


    }
}