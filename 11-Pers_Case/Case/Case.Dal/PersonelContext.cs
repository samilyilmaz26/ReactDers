using Case.Entity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Case.Dal
{
    public class PersonelContext : DbContext
    {
        public PersonelContext(DbContextOptions<PersonelContext> db) : base(db)
        {

        }
        public DbSet<Personel> Personels { get; set; }
    }
}
