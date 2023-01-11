using Rasyotek_Personel_Project.Core;
using Rasyotek_Personel_Project.DAL;
using Rasyotek_Personel_Project.Entity;
using Rasyotek_Personel_Project.Repository.Abstracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Rasyotek_Personel_Project.Repository.Concretes
{
    public class ZimmetRepository<T> : BaseRepository<Zimmet>, IZimmetRepository where T : class
    {
        public ZimmetRepository(PersonelContext db) : base(db)
        {
        }
    }
}
