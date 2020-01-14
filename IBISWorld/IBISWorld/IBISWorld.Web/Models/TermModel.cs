using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IBISWorld.Web.Models
{
    public class TermModel
    {
        public int ID { get; set; }
        public string Term { get; set; }
        public string Definition { get; set; }
        public string DateAdded { get; set; }

    }
}