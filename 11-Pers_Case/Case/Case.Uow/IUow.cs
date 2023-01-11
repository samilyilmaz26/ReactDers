using Case.Repos.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Case.Uow
{
    public interface IUow
    {
        IPersonelRep _personelRep { get; }

        void Commit();
    }
}
