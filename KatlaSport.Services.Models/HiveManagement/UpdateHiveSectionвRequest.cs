using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KatlaSport.Services.HiveManagement
{
    /// <summary>
    /// Request for creating/updating hive.
    /// </summary>
    class UpdateHiveSectionRequest
    {
        /// <summary>
        /// Gets or sets hive name.
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Gets or sets hive code.
        /// </summary>
        public string Code { get; set; }
    }
}
