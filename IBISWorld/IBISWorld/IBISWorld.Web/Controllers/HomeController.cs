using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace IBISWorld.Web.Controllers
{

    [RoutePrefix("api/home")]
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        [Route("Terms")]
        [HttpGet]
        public JsonResult GetAllTerms()
        {

            return Json(true, JsonRequestBehavior.AllowGet);
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