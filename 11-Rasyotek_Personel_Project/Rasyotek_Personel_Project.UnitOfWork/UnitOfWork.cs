using Rasyotek_Personel_Project.DAL;
using Rasyotek_Personel_Project.Repository.Abstracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Rasyotek_Personel_Project.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        PersonelContext _db;

        public IPersonelRepository _personelRepository { get; set; }

        public IZimmetRepository _zimmetRepository { get; set; }

        public UnitOfWork(PersonelContext db, IPersonelRepository personelRepository, IZimmetRepository zimmetRepository)
        {
            _db = db;
            _personelRepository = personelRepository;
            _zimmetRepository = zimmetRepository;
        }

        public void Commit()
        {
            _db.SaveChanges();
        }
    }
}
