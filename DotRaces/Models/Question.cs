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
        public int SettingSetID { get; set; }
        public int QuestionID { get; set; }
        public string QuestionText { get; set; }
        public bool HasFollowUp { get; set; }
        public string FollowUpText { get; set; }
        public string FeelingNoun { get; set; }
        public string LowScaleDescription { get; set; }
        public string HighScaleDescription { get; set; }
        public bool? AskedFlag { get; set; }
        public bool? CurrentQuestionFlag { get; set; }
        public int? QuestionRoundNum { get; set; }
        public bool? FinalGroupQuestion { get; set; }
        public int? GroupQuestionNumber { get; set; } 
    }
}
