using Rasyotek_Personel_Project.Repository.Abstracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Rasyotek_Personel_Project.UnitOfWork
{
    public interface IUnitOfWork
    {
        IPersonelRepository _personelRepository { get; }
        IZimmetRepository _zimmetRepository { get; }
        void Commit();
    }
}
