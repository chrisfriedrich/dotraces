using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DotRaces.Models
{
    [Table("dotraces_Races")]
    public class Race
    {
        public int RaceID { get; set; }
        public int Duration { get; set; }
        public bool Winner { get; set; }

        public double Difference1 { get; set; }
        public double Difference2 { get; set; }
        public double Difference3 { get; set; }
        public double Difference4 { get; set; }
        public double Difference5 { get; set; }
        public double Difference6 { get; set; }
        public double Difference7 { get; set; }
        public double Difference8 { get; set; }
        public double Difference9 { get; set; }
        public double Difference10 { get; set; }
        public double Difference11 { get; set; }
        public double Difference12 { get; set; }
        public double Difference13 { get; set; }
        public double Difference14 { get; set; }
        public double Difference15 { get; set; }
        public double Difference16 { get; set; }

        public int? Sound1ID { get; set; }
        public int? Sound2ID { get; set; }
        public int? Sound3ID { get; set; }
        public int? Sound4ID { get; set; }
        public int? Sound5ID { get; set; }
        public int? Sound6ID { get; set; }
        public int? Sound7ID { get; set; }
        public int? Sound8ID { get; set; }
        public int? Sound9ID { get; set; }
        public int? Sound10ID { get; set; }
        public int? Sound11ID { get; set; }
        public int? Sound12ID { get; set; }
        public int? Sound13ID { get; set; }
        public int? Sound14ID { get; set; }
        public int? Sound15ID { get; set; }
        public int? Sound16ID { get; set; }
    }
}
