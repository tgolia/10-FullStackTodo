using System;
using System.Collections.Generic;
using System.Data.Entity;
using VSTDA.Api.Models;
using System.Linq;
using System.Web;

namespace VSTDA.Api.Intrastructure
{
    public class TodoDataContext : DbContext
    {
        public TodoDataContext() : base("Todoes")
        {

        }

        public IDbSet<Todo> Todoes { get; set; }
            
    }
}