using DotRaces.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DotRaces.DAL
{
    class DotRacesDataContext : DbContext
    {
        public DotRacesDataContext() : base("DotRacesDataContext")
        {

        }

        public DbSet<Answer> Answers { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<Race> Races { get; set; }
        public DbSet<SettingSet> SettingSets { get; set; }
        public DbSet<Survey> Surveys { get; set; }
        public DbSet<Separator> Separators { get; set; }
    }
}
