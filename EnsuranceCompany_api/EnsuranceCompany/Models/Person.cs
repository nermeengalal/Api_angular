using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace EnsuranceCompany.Models
{
    public class Person
    {
        public int ID { get; set; }

        public string address { get; set; }
        [Required]
        public string name { get; set; }

       [Newtonsoft.Json.JsonIgnore]
        public virtual ICollection<Car> Cars { get; set; }
    }
}