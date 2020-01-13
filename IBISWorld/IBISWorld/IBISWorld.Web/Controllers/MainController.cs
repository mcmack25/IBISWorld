using IBISWorld.Web.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace IBISWorld.Web.Controllers
{
    [RoutePrefix("api/main")]
    public class MainController : Controller
    {

        private readonly IGlossaryService _glossarySvc;

        //public MainController() { }

        public MainController(IGlossaryService glossarySvc)
        {
            _glossarySvc = glossarySvc;
        }

        // GET: Home
        //public ActionResult Index()
        //{
        //    return View();
        //}

        [Route("terms/{id}")]
        [HttpGet]
        public JsonResult GetAllTerms(int id)
        {

            var termsList = _glossarySvc.GetTerms();


            return Json(termsList, JsonRequestBehavior.AllowGet);
        }

        [Route("GetTerm/{id}")]
        [HttpGet]
        public JsonResult GetTermByID(int id)
        {

            return Json(true, JsonRequestBehavior.AllowGet);
        }

        [Route("AddTerm/{id}")]
        [HttpPost]
        public JsonResult AddTermToGlossary(int id)
        {

            return Json(true, JsonRequestBehavior.AllowGet);
        }

        [Route("EditTerms/{id}")]
        [HttpPut]
        public JsonResult EditTermByID(int id)
        {

            return Json(true, JsonRequestBehavior.AllowGet);
        }

        [Route("DeleteTerm/{id}")]
        [HttpGet]
        public JsonResult DeleteTermByID(int id)
        {

            return Json(true, JsonRequestBehavior.AllowGet);
        }





    }
}