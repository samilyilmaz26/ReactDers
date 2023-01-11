using Microsoft.EntityFrameworkCore;
using Rasyotek_Personel_Project.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Rasyotek_Personel_Project.DAL
{
    public class PersonelContext : DbContext
    {
        public PersonelContext(DbContextOptions<PersonelContext> db) : base(db)
        {

        }
        public DbSet<Personel> Personels { get; set; }
        public DbSet<Zimmet> Zimmets { get; set; }
    }
}
