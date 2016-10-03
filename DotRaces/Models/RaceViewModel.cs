using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DotRaces.Models
{
    public class RaceViewModel
    {
        public int SurveyID { get; set; }
        public int RaceID { get; set; }
        public int RaceNum { get; set; }
        public int CurrentPoints { get; set; }
        public int AfterPoints { get; set; }

        public Race Race { get; set; }
    }
}
