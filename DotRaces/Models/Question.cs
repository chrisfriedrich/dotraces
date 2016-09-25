using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DotRaces.Models
{
    [Table("dotraces_Questions")]
    public class Question
    {
        public int QuestionID { get; set; }
        public string QuestionText { get; set; }
        public bool? AskedFlag { get; set; }
        public bool? CurrentQuestionFlag { get; set; } 
    }
}
