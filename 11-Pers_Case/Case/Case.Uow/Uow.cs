using Case.Dal;
using Case.Repos.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Case.Uow
{
    public class Uow : IUow
    {
        PersonelContext _db;

        public Uow(PersonelContext db, IPersonelRep personelRep)
        {
            _db = db;
            _personelRep = personelRep;
        }


        public IPersonelRep _personelRep { get; set; }

        public void Commit()
        {
            _db.SaveChanges();
        }

       
    }
}
