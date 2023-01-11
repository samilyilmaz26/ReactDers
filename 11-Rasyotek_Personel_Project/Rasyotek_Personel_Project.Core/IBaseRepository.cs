using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Rasyotek_Personel_Project.Core
{
    public interface IBaseRepository<T> where T : class
    {
        public List<T> GetAll();
        public T Find(int Id);
        public bool Update(T entity);
        public bool Update(int Id);
        public bool Delete(int Id);
        public bool Create(T entity);
        public DbSet<T> Set();
    }
}
