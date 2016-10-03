using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DotRaces.Models
{
    public class EnjoymentViewModel
    {
        public int SurveyID { get; set; }
        public List<Answer> Answers { get; set; }
        public List<Question> Questions { get; set; }
    }
}
