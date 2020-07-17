using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using EnsuranceCompany.Models;

namespace EnsuranceCompany.Controllers
{
    public class AccidentsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Accidents
        public IQueryable<Accident> GetAccidens()
        {
            return db.Accidens;
        }

        // GET: api/Accidents/5
        [ResponseType(typeof(Accident))]
        public IHttpActionResult GetAccident(int id)
        {
            var accident = db.Accidens.Where(a=>a.Carid==id).ToList();
            if (accident == null)
            {
                return NotFound();
            }

            return Ok(accident);
        }

        // PUT: api/Accidents/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutAccident(int id, Accident accident)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != accident.ID)
            {
                return BadRequest();
            }

            db.Entry(accident).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AccidentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Accidents
        [ResponseType(typeof(Accident))]
        public IHttpActionResult PostAccident(Accident accident)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Accidens.Add(accident);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = accident.ID }, accident);
        }

        // DELETE: api/Accidents/5
        [ResponseType(typeof(Accident))]
        public IHttpActionResult DeleteAccident(int id)
        {
            Accident accident = db.Accidens.Find(id);
            if (accident == null)
            {
                return NotFound();
            }

            db.Accidens.Remove(accident);
            db.SaveChanges();

            return Ok(accident);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AccidentExists(int id)
        {
            return db.Accidens.Count(e => e.ID == id) > 0;
        }
    }
}