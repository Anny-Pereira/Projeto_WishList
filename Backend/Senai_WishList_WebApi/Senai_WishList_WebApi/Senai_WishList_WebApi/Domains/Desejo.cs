using System;
using System.Collections.Generic;

#nullable disable

namespace Senai_WishList_WebApi.Domains
{
    public partial class Desejo
    {
        public byte IdDesejo { get; set; }
        public byte? IdUsuario { get; set; }
        public string DescDesejo { get; set; }

        public virtual Usuario IdUsuarioNavigation { get; set; }
    }
}
