using Case.Core;
using Case.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Case.Repos.Abstract
{
    public interface IPersonelRep : IBaseRepository<Personel>
    {
        public IEnumerable<Personel> GetPersonels();
        public Personel GetPersonelById(int id);
        public Personel CreatePersonel(Personel p);
        public Personel UpdatePersonel(Personel p);
        public bool DeletePersonel(int id);
    }
}
