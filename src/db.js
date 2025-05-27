import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('DBagrecol', 'postgres', 'admin', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
  logging: false // para no mostrar logs de SQL
});

export default sequelize;
