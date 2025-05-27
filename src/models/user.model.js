import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Usuario =  sequelize.define('usuario', {
  id_usuario: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  tipo_user: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  usuario: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  password: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  id_user_proyect: {
    type: DataTypes.STRING(50),
    allowNull: true
  }
}, {
  tableName: 'usuario',
  timestamps: false
});

export default Usuario;
