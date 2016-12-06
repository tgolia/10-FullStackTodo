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
        // Constructor (there's a shortcut)
        public TodoDataContext() : base("Todoes") // This is where you set the name of the SQL database
        {

        }
        // <access> <type> <name> { get; set; }
        public IDbSet<Todo> Todoes { get; set; }
            
    }
}