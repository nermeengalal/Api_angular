using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace EnsuranceCompany.Models
{
    public class Car
    {
        public int ID { get; set; }

        public string model { get; set; }

        public DateTime year { get; set; }

        [JsonIgnore]
        public virtual ICollection<Accident> Accidents { get; set; }


        public int prID { get; set; }
        [ForeignKey("prID")]

        [JsonIgnore]
        public virtual Person Persons { get; set; }
    }
}