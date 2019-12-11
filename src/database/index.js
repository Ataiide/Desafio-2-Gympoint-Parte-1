import Sequelize from "sequelize";

import User from "../app/models/User";
import Student from "../app/models/Student";

import databaseConfig from "../config/database";

const models = [User, Student];

class Database {
  constructor() {
    this.init();
  }

  /*Esse método init, fará a conexão com a nossa base de 
  dados para carregar nossos models.*/
  init() {
    this.connection = new Sequelize(databaseConfig);
    //Estou usando o .map, para percorrer cada um desses models.
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
