import { DataTypes } from 'sequelize';
import sequelize from '../../db.js';

const HitoIndicador = sequelize.define('hito_indicador', {
  id_hito: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  meta: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  resultado: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  porcentaje: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: true
  },
  fecha_avance: {
    type: DataTypes.DATE,
    allowNull: true
  },
  id_indicador: {
    type: DataTypes.BIGINT,
    allowNull: true
  }
}, {
  tableName: 'hito_indicador',
  timestamps: false
});

export default HitoIndicador;
