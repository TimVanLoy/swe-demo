using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SweDemoBackend.Infrastructure.Entities;

namespace SweDemoBackend.Infrastructure.Configurations
{
  public class LegoSetConfiguration : IEntityTypeConfiguration<LegoSet>
  {
    public void Configure(EntityTypeBuilder<LegoSet> b)
    {
      b.ToTable("LegoSet");
    }
  }
}
