import Sequelize, { Model } from "sequelize";
import bcrypt from "bcryptjs";

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        /*
        Abaixo é possível ver o campo Virtual, significa que esse campo jamais
        existirá na base de dados, ele somente existirá no lado do codigo.
        */
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN
      },
      { sequelize }
    );

    /*Esses hooks são trechos de códigos que são executados de forma automática
    baseado em ações que ocorrem no nosso model */
    this.addHook("beforeSave", async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
