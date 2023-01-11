using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Case.Entity
{
    public class BaseTable
    {
        [Key]
        public int Id { get; set; }
    }
}
