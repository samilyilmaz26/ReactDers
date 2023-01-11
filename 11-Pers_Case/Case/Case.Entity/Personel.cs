using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Case.Entity
{
    public class Personel:BaseTable
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public char Gender { get; set; }
        public bool Computer { get; set; }
        public bool Phone { get; set; }
        public bool Car { get; set; }
        public string Graduation { get; set; }

    }
}
