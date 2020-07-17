using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EnsuranceCompany.DOT
{
    public class CarDOT
    {
        public int ID { get; set; }
        public string model { get; set; }
        public DateTime year { get; set; }
      
        public int prID { get; set; }
    }
}