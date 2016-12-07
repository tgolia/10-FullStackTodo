using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace VSTDA.Api.Models
{
    public class Todo
    {
        // Properties
        public int TodoId { get; set; }
        public string Name { get; set; }
        public int Priority { get; set; }
        public DateTime? CreatedAt { get; set; }

    }
}