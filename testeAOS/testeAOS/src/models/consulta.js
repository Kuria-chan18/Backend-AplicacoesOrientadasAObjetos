// consulta.js

import { type } from "os";

const getConsultaModel = (sequelize, { DataTypes }) => {
  const Consulta = sequelize.define("consulta", {
    id: {
     type: DataTypes.UUID,
     primaryKey: true,
     allowNull: false
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },
    status: {
      type: DataTypes.ENUM('Agendada', 'Realizada', 'Cancelada'),
      allowNull: false,
      defaultValue: 'Agendada',
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    // Outros campos como resultado, diagnóstico, etc.
  });

  Consulta.associate = (models) => {
    Consulta.belongsTo(models.Medico);
    Consulta.belongsTo(models.Paciente);
    Consulta.belongsTo(models.Hospital);
  };

  return Consulta;
};

export default getConsultaModel;
