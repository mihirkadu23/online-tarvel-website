using System.Diagnostics;
using AspNetCoreGeneratedDocument;
using Microsoft.AspNetCore.Mvc;
using online_travel_website.Models;

namespace online_travel_website.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Login()
        {
            return View();
        }

        public IActionResult Contactus()
        {
            return View();
        }

        public IActionResult Payment()
        {
            return View();
        }

        public IActionResult Packages()
        {
            return View();
        }

        public IActionResult Bookno()
        {
            return View();
        }

        public IActionResult Catebooking()
        {
            return View();
        }

        public IActionResult Diamond()
        {
            return View();
        }

        public IActionResult Goa()
        {
            return View();
        }
        public IActionResult Gold()
        {
            return View();
        }

        public IActionResult Gujrat()
        {
            return View();
        }

        public IActionResult Jaipurdetails()
        {
            return View();
        }

        public IActionResult Jamukashmir()
        {
            return View();
        }

        public IActionResult Kerla()
        {
            return View();
        }

        public IActionResult Lakshdeepdetails()
        {
            return View();
        }

        public IActionResult Manali()
        {
            return View();
        }

        public IActionResult Mumbai()
        {
            return View();
        }

        public IActionResult Rajasthandetails()
        {
            return View();
        }

        public IActionResult Silver()
        {
            return View();
        }

        public IActionResult Success()
        {
            return View();
        }




        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
