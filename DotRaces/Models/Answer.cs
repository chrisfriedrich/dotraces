using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DotRaces.Models
{
    [Table("dotraces_Answers")]
    public class Answer
    {
        public int AnswerID { get; set; }
        public int SurveyID { get; set; }
        public int QuestionID { get; set; }
        public bool? AnswerFlag { get; set; }
        public int? AnswerValue { get; set; }
        public int? QuestionRoundNum { get; set; }
    }
}
