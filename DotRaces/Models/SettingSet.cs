using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DotRaces.Models
{
    [Table("dotraces_SettingSets")]
    public class SettingSet
    {
        public int SettingSetID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool? DefaultSetFlag { get; set; }

        public int PotentialHighScore { get; set; }
        public int PotentialLowScore { get; set; }
        public int PointsPerRound { get; set; }

        public int NumberOfRaces { get; set; }
        public string NumberOfRacesText { get; set; }
        public string NumberOfRacesAdjective { get; set; }

        public int LastRaceMultiplier { get; set; }
    }
}


