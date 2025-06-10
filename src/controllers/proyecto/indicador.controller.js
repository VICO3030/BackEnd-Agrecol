import Indicador from '../../models/proyecto/indicador.model.js';
import axios from 'axios';
// Obtener todos los indicadores
export const getIndicadores = async (req, res) => {
  try {
    const indicadores = await Indicador.findAll();
    res.json(indicadores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener indicadores', error: error.message });
  }
};

// Crear un nuevo indicador
export const crearIndicador = async (req, res) => {
  try {
    const {
      medios_verificacion,
      descripcion,
      unidad_medida,
      fecha_creacion,
      estado,
      id_objetivo_logico,
      meta_total,
      resultado_total,
      porcentaje_total,
      recoleccion_datos_calculo
    } = req.body;

    const nuevoIndicador = await Indicador.create({
      medios_verificacion,
      descripcion,
      unidad_medida,
      fecha_creacion,
      estado,
      id_objetivo_logico,
      meta_total,
      resultado_total,
      porcentaje_total,
      recoleccion_datos_calculo
    });



    res.status(201).json({ message: 'Indicador creado', indicador: nuevoIndicador });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear indicador', error: error.message });
  }
};

// Obtener un indicador por ID
export const getIndicador = async (req, res) => {
  try {
    const { id } = req.params;
    const indicador = await Indicador.findByPk(id);

    if (!indicador) return res.status(404).json({ message: 'Indicador no encontrado' });

    res.json(indicador);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener indicador', error: error.message });
  }
};

// Actualizar un indicador por ID
export const updateIndicador = async (req, res) => {
  try {
    const { id } = req.params;
    const indicador = await Indicador.findByPk(id);

    if (!indicador) return res.status(404).json({ message: 'Indicador no encontrado' });

    const {
      medios_verificacion,
      descripcion,
      unidad_medida,
      fecha_creacion,
      estado,
      id_objetivo_logico,
      meta_total,
      resultado_total,
      porcentaje_total,
      recoleccion_datos_calculo
    } = req.body;

    await indicador.update({
      medios_verificacion,
      descripcion,
      unidad_medida,
      fecha_creacion,
      estado,
      id_objetivo_logico,
      meta_total,
      resultado_total,
      porcentaje_total,
      recoleccion_datos_calculo
    });

    res.json({ message: 'Indicador actualizado', indicador });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar indicador', error: error.message });
  }
};

// Eliminar un indicador por ID
export const deleteIndicador = async (req, res) => {
  try {
    const { id } = req.params;
    const indicador = await Indicador.findByPk(id);

    if (!indicador) return res.status(404).json({ message: 'Indicador no encontrado' });

    await indicador.destroy();

    res.json({ message: 'Indicador eliminado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar indicador', error: error.message });
  }
};
