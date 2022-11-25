using Microsoft.EntityFrameworkCore;
using System.Net;
using System.Numerics;

namespace JewelleryManagement.Model
{
    public class JewelleryContext : DbContext
    {
        public JewelleryContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Jewellery> Jewelleries { get; set; }
        public DbSet<feedback> feedbacks { get; set; }
    }
}
