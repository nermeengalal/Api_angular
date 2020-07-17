using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EnsuranceCompany.DOT
{
    public class AccidentDOT
    {
        public int ID { get; set; }
        public string location { get; set; }
        public DateTime date { get; set; }
        public int Carid { get; set; }
    }
}