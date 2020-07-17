using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace EnsuranceCompany.Models
{
    public class Accident
    { 
        public int ID { get; set; }
        [Required]
        public string location { get; set; }

        public DateTime date { get; set; }

        [Required]
        public int DamageAmountPrice { get; set; }

        public int Carid { get; set; }

        [ForeignKey("Carid")]
        [JsonIgnore]
        public virtual Car Car { get; set; }
    }
}