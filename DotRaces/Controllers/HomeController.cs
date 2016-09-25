using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DotRaces.Models;

namespace DotRaces.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            Survey survey = new Survey();
            return View(survey);
        }

        //public ActionResult About()
        //{
        //    ViewBag.Message = "Your application description page.";

        //    return View();
        //}

        //public ActionResult Contact()
        //{
        //    ViewBag.Message = "Your contact page.";

        //    return View();
        //}
    }
}