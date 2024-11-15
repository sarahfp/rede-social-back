import { Sequelize } from 'sequelize';

const Connection = new Sequelize({
  dialect: 'sqlite',
  storage: 'base.sqlite',
});

export default Connection;
