using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Senai_WishList_WebApi.Domains;
using Senai_WishList_WebApi.Interfaces;
using Senai_WishList_WebApi.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai_WishList_WebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class DesejosController : ControllerBase
    {

        private IDesejoRepository _desejoRepository { get; set; }


        public DesejosController()
        {
            _desejoRepository = new DesejoRepository();
        }




        /// <summary>
        /// Lista todos os desejos
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IActionResult ListarTodos()
        {

            try
            {
                return Ok(_desejoRepository.ListarTodos());
            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }




        /// <summary>
        /// Cadastra um novo desejo
        /// </summary>
        /// <param name="novoDesejo">objeto que será cadastrado</param>
        /// <returns></returns>
        [HttpPost]
        public IActionResult Cadastrar(Desejo novoDesejo)
        {
            try
            {
                _desejoRepository.Cadastrar(novoDesejo);

                return StatusCode(201);
            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }

    }
}
