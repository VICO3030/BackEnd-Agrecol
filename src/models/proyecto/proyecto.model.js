import { DataTypes } from 'sequelize';
import sequelize from '../../db.js';

const Proyecto = sequelize.define('proyecto', {
  id_proyecto: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  tipo_area: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  area_tematica: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  objetivo: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  estado: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  inicio_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  final_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  id_proyect_bene: {
    type: DataTypes.BIGINT,
    allowNull: true
  },
  id_user_proyect: {
    type: DataTypes.STRING(50),
    allowNull: true
  }
}, {
  tableName: 'proyecto',
  timestamps: false
});

export default Proyecto;
