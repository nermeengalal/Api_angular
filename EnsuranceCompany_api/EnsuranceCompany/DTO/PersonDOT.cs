using EnsuranceCompany.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EnsuranceCompany.DOT
{
    public class PersonDOT
    {
        public int ID { get; set; }
        public string address { get; set; }
        public string name { get; set; }
        public List<Car> cars { get; set; } = new List<Car>();

    }
}