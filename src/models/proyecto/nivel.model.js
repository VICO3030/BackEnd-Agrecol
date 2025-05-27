import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const ObjetivoLogico = sequelize.define('objetivo_logico', {
  id_objetivo: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  tipo: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  id_proyecto: {
    type: DataTypes.BIGINT,
    allowNull: true,
    references: {
      model: 'proyecto',
      key: 'id_proyecto'
    }
  },
  nivel: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  id_objetivo_padre: {
    type: DataTypes.BIGINT,
    allowNull: true,
    references: {
      model: 'objetivo_logico',
      key: 'id_objetivo'
    }
  }
}, {
  tableName: 'objetivo_logico',
  timestamps: false
});

// Definir relaciones para que Sequelize entienda la jerarquía
ObjetivoLogico.hasMany(ObjetivoLogico, {
  foreignKey: 'id_objetivo_padre',
  as: 'subobjetivos'
});
ObjetivoLogico.belongsTo(ObjetivoLogico, {
  foreignKey: 'id_objetivo_padre',
  as: 'objetivoPadre'
});

export default ObjetivoLogico;
