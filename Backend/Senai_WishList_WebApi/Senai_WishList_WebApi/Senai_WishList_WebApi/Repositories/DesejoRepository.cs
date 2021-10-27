using Senai_WishList_WebApi.Domains;
using Senai_WishList_WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai_WishList_WebApi.Repositories
{
    public class DesejoRepository : IDesejoRepository
    {
        //Contexto 

        public void Cadastrar(Desejo novoDesejo)
        {
            ctx.Desejos.Add(novoDesejo);

            ctx.SaveChanges();
        }


        public List<Desejo> ListarTodos()
        {
            return ctx.DesejosToList();
        }
    }
}
