using Senai_WishList_WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai_WishList_WebApi.Interfaces
{
    /// <summary>
    /// Interface responsável pela DesejoRepository
    /// </summary>

    interface IDesejoRepository
    {
        /// <summary>
        /// Lista todos os desejos
        /// </summary>
        /// <returns>uma lista com todos os desejos</returns>
        List<Desejo> ListarTodos();


        /// <summary>
        /// Cadastra um novo desejo
        /// </summary>
        /// <param name="novoDesejo">objeto com as informações cadastradas</param>
        void Cadastrar(Desejo novoDesejo);


    }
}
