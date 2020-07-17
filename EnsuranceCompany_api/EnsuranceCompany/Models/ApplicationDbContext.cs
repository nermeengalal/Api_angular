using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace EnsuranceCompany.Models
{
    public class ApplicationDbContext:IdentityDbContext
    {
        public ApplicationDbContext() : base("CS")
        {

        }
        public virtual DbSet<Car> Cars { get; set; }
        public virtual DbSet<Accident> Accidens { get; set; }
        public virtual DbSet<Person> Persons { get; set; }
    }
}