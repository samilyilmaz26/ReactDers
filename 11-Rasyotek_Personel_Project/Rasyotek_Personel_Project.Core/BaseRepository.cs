using Microsoft.EntityFrameworkCore;
using Rasyotek_Personel_Project.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Rasyotek_Personel_Project.Core
{
    public class BaseRepository<T> : IBaseRepository<T> where T : class
    {
        PersonelContext _db;
        public BaseRepository(PersonelContext db)
        {
            _db = db;
        }

        public bool Create(T entity)
        {
            try
            {
                Set().Add(entity);
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public bool Delete(int Id)
        {
            try
            {
                Set().Remove(Find(Id));
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public T Find(int Id)
        {
            return Set().Find(Id);
        }

        public List<T> GetAll()
        {
            return Set().ToList();
        }

        public DbSet<T> Set()
        {
            return _db.Set<T>();
        }

        public bool Update(T entity)
        {
            try
            {
                Set().Update(entity);
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public bool Update(int Id)
        {
            try
            {
                Set().Update(Find(Id));
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
    }
}
