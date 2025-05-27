import { DataTypes } from 'sequelize';
import sequelize from '../../db.js';

const Indicador = sequelize.define('indicador', {
  id_indicador: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  medios_verificacion: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  descripcion: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  unidad_medida: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  fecha_creacion: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },

  estado: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  id_objetivo_logico: {
    type: DataTypes.BIGINT,
    allowNull: true
  },
  meta_total: {
    type: DataTypes.DOUBLE,
    allowNull: true
  },
  resultado_total: {
    type: DataTypes.DOUBLE,
    allowNull: true
  },
  porcentaje_total: {
    type: DataTypes.DOUBLE,
    allowNull: true
  },
  recoleccion_datos_calculo: {
    type: DataTypes.STRING(50),
    allowNull: true
  }
}, {
  tableName: 'indicador',
  timestamps: false
});

export default Indicador;
