using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace DotRaces.Models
{
    [Table("dotraces_Separators")]
    public class Separator
    {
        public int SeparatorID { get; set; }
        public bool CurrentVersion { get; set; }
    }
}