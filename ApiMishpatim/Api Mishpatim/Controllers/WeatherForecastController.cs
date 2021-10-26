using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api_Mishpatim.Models;
using Api_Mishpatim.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Api_Mishpatim.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly IEmailSender _emailSender;
        //private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(IEmailSender emailSender)
        {
            _emailSender = emailSender;
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            var rng = new Random();

            var message = new Message(new string[] { "codemazetest@mailinator.com" }, "Test email", "This is the content from our email.");
            _emailSender.SendEmail(message);

            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}
