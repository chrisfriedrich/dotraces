using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DotRaces.Models
{
    [Table("dotraces_Surveys")]
    public class Survey
    {
        public int SurveyID { get; set; }
        public DateTime CreatedDate { get; set; }
        [Required]
        [RegularExpression(@"\d{4}", ErrorMessage = "Invalid format.  Please enter your four digit (numbers only) Identity Code.")]
        [DataType(DataType.Text)]
        [Display(Name = "Identity Code")]
        public int? IdentityCode { get; set; }
        public int SettingsID { get; set; }

        public int? PointTotal { get; set; }
        public bool? ChoseToBetFlag { get; set; }

        public int? UOWins { get; set; }
        public int? OSUWins { get; set; }

    }
}
