﻿using EnsuranceCompany.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;


namespace EnsuranceCompany.Controllers
{
    public class AccountController : ApiController
    {

        [HttpPost]
        public async Task<IHttpActionResult> Registration(UserModel account)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                UserStore<IdentityUser> store = new UserStore<IdentityUser>(new ApplicationDbContext());
                UserManager<IdentityUser> manager = new UserManager<IdentityUser>(store);

                IdentityUser user = new IdentityUser();
                user.UserName = account.Name;
                user.PasswordHash = account.Password;
              

                IdentityResult result = await manager.CreateAsync(user, account.Password);

                if (result.Succeeded)
                {
                    return Created("", "This Account has been created");
                }
                else
                {
                    return BadRequest((result.Errors.ToList())[0]);
                }

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
