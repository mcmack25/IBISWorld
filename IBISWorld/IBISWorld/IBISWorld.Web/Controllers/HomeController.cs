using IBISWorld.Web.Models;
using IBISWorld.Web.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace IBISWorld.Web.Controllers
{

    //[RoutePrefix("api/home")]
    public class HomeController : Controller
    {

       private readonly IGlossaryService _glossarySvc;

        //public HomeController(){}

        public HomeController(IGlossaryService glossarySvc)
        {
            _glossarySvc = glossarySvc;
        }

        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        [Route("api/home/GetTerms")]
        [HttpGet]
        public JsonResult GetAllTerms()
        {

            var termsList = _glossarySvc.GetTerms();


            return Json(termsList, JsonRequestBehavior.AllowGet);
        }

        [Route("api/home/GetTerm/{id}")]
        [HttpGet]
        public JsonResult GetTermByID(int id)
        {
            var term = _glossarySvc.GetTermByID(id);

            return Json(term, JsonRequestBehavior.AllowGet);
        }

        [Route("api/home/AddTerm")]
        [HttpPost]
        public JsonResult AddTermToGlossary(TermModel newTerm)
        {

            var term = _glossarySvc.AddTerm(newTerm);

            return Json(true, JsonRequestBehavior.AllowGet);
        }

        [Route("api/home/EditTerm")]
        [HttpPut]
        public JsonResult EditTerm(TermModel editTerm)
        {
            _glossarySvc.EditTerm(editTerm);

            return Json(true, JsonRequestBehavior.AllowGet);
        }

        [Route("DeleteTerm/{id}")]
        [HttpGet]
        public JsonResult DeleteTermByID(int id)
        {
             _glossarySvc.GetTermByID(id);

            return Json(true, JsonRequestBehavior.AllowGet);
        }

    }
}