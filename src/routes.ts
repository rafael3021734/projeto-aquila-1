import { Express } from "express";
import { createAgendamentoHandler, getAgendamentoHandler, getAgendamentosByUserHandler } from "./controller/AgendamentoController";
import { addFavoritoHandler, createAvalicaoHandler, getPrestadoresHandler } from "./controller/PrestadorController";
import { createUserHandler, deleteUserHandler, getUserHandler, getUsersHandler, updateUserHandler } from "./controller/UserController";
import { createUsuarioHandler, deleteUsuarioHandler, getUsuariosHandler, getUsuarioHandler, updateUsuarioHandler } from "./controller/UsuarioController";
import { createPrestadorsHandler, deletePrestadorsHandler, getPrestadorsHandler, getPrestadoressHandler, updatePrestadorsHandler } from "./controller/PrestadorServicoController";
import { createServicosHandler, deleteServicosHandler, getServicosHandler, getServicossHandler, updateServicosHandler } from "./controller/ServicosController";


export default (app: Express) => {
  /**
   * @openapi
   * /api/users:
   *  get:
   *    tags:
   *    - Users
   *    description: Fetch all users
   *    responses:
   *      200:
   *        description: Succesfully fetched all users
   */
<<<<<<< HEAD
  app.get("/api/servicos", getServicossHandler);

  app.get("/api/servicos/:id", getServicosHandler);

  app.post("/api/servico", createServicosHandler);

  app.put("/api/uservicos/:id", updateServicosHandler);

  app.delete("/api/servicos/:id", deleteServicosHandler);

  /**
   * @openapi
   * /api/usuarios:
   *  get:
   *    tags:
   *    - Users
   *    description: Fetch all users
   *    responses:
   *      200:
   *        description: Succesfully fetched all users
   */
   app.get("/api/usuarios", getUsuariosHandler);

   app.get("/api/usuarios/:id", getUsuarioHandler);
 
   app.post("/api/usuarios", createUsuarioHandler);
 
   app.put("/api/usuarios/:id", updateUsuarioHandler);
 
   app.delete("/api/usuarios/:id", deleteUsuarioHandler);

  /**
   * @openapi
   * /api/prestador:
   *  get:
   *    tags:
   *    - Users
   *    description: Fetch all users
   *    responses:
   *      200:
   *        description: Succesfully fetched all users
   */
   app.get("/api/prestadors", getPrestadoressHandler);

   app.get("/api/prestadors/:id", getPrestadorsHandler);
 
   app.post("/api/prestadorAll", createPrestadorsHandler);
 
   app.put("/api/prestadors/:id", updatePrestadorsHandler);
 
   app.delete("/api/prestadors/:id", deletePrestadorsHandler); 

   /**
   * @openapi
   * /api/prestador:
   *  get:
   *    tags:
   *    - Users
   *    description: Fetch all users
   *    responses:
   *      200:
   *        description: Succesfully fetched all users
   */
    app.get("/api/prestadors", getPrestadoressHandler);
=======
  app.get("/api/users", getUsersHandler);
  app.get("/api/users/:id", getUserHandler);
  app.post("/api/users", createUserHandler);
  app.put("/api/users/:id", updateUserHandler);
  app.delete("/api/users/:id", deleteUserHandler);
>>>>>>> 8b836c61e337767078e8f3a57c0dda244db4304d

    app.get("/api/prestadors/:id", getPrestadorsHandler);
  
    app.post("/api/prestadorAll", createPrestadorsHandler);
  
    app.put("/api/prestadors/:id", updatePrestadorsHandler);
  
    app.delete("/api/prestadors/:id", deletePrestadorsHandler); 
    
  /**
   * @openapi
   * /api/prestadores:
   *  get:
   *    tags:
   *    - Prestadores
   *    description: Fetch all prestadores
   *    responses:
   *      200:
   *        description: Succesfully fetched all prestadores
   */
  app.get("/api/prestadores", getPrestadoresHandler);
  app.post("/api/prestadores/:id/favorito", addFavoritoHandler);
  app.post("/api/prestadores/:id/avaliacao", createAvalicaoHandler);

  
  app.post("/api/agendamentos/:userId/agendar/:prestadorId", createAgendamentoHandler);
  app.get("/api/agendamentos/user/:id", getAgendamentosByUserHandler);
  app.get("/api/agendamentos/:id", getAgendamentoHandler);
}
