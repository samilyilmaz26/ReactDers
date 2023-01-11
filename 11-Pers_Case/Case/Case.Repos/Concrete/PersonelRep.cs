using Case.Core;
using Case.Dal;
using Case.Entity;
using Case.Repos.Abstract;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Case.Repos.Concrete
{
    public class PersonelRep<T> : BaseRepository<Personel> , IPersonelRep where T: class
    {
        public PersonelContext _db;
                
        public PersonelRep(PersonelContext db) : base(db)
        {
            _db = db;
        }

        public Personel CreatePersonel(Personel p)
        {
            _db.Set<Personel>().Add(p);
            _db.SaveChanges();
            return p;
        }

        public bool DeletePersonel(int id)
        {
           _db.Set<Personel>().Remove(Find(id));
            return true;
            
        }

        public Personel GetPersonelById(int id)
        {
            return _db.Personels.FirstOrDefault(p => p.Id == id);
        }

        public IEnumerable<Personel> GetPersonels()
        {
            return _db.Personels.ToList();
        }

        public Personel UpdatePersonel(Personel p)
        {
            _db.Set<Personel>().Update(p);
            return p;
        }
    }
}
