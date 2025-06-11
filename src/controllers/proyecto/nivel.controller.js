import ObjetivoLogico from '../../models/proyecto/nivel.model.js';
import Proyecto  from  '../../models/proyecto/proyecto.model.js';

// Obtener objetivos por proyecto
// proyecto.controller.js
export const getObjetivosByProyecto = async (req, res) => {
  try {
    const { id } = req.params; 
    
    if (!id) {
      return res.status(400).json({ message: 'ID de proyecto es requerido' });
    }

    // Verificar si el proyecto existe primero
    const proyecto = await Proyecto.findByPk(id);
    if (!proyecto) {
      return res.status(404).json({ message: 'Proyecto no encontrado' });
    }

    const objetivos = await ObjetivoLogico.findAll({
      where: { id_proyecto: id },  // Usamos el 'id' que se pasó en la URL
      order: [['nivel', 'ASC']]  // Ordenar por nivel (Fin -> Propósito -> Componente -> Actividad)
    });
    
    res.json(objetivos);
  } catch (error) {
    console.error('Error en getObjetivosByProyecto:', error);
    res.status(500).json({ 
      message: 'Error al obtener objetivos lógicos', 
      error: error.message 
    });
  }
};



// Obtener todos los objetivos lógicos
export const getObjetivosLogicos = async (req, res) => {
  try {
    const objetivos = await ObjetivoLogico.findAll();
    res.json(objetivos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener objetivos lógicos', error: error.message });
  }
};

// Obtener un objetivo lógico por id
export const getObjetivoLogico = async (req, res) => {
  try {
    const { id } = req.params;
    const objetivo = await ObjetivoLogico.findByPk(id);
    if (!objetivo) {
      return res.status(404).json({ message: 'Objetivo lógico no encontrado' });
    }
    res.json(objetivo);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el objetivo lógico', error: error.message });
  }
};

// Crear un nuevo objetivo lógico
export const crearObjetivoLogico = async (req, res) => {
  try {
    const { tipo, descripcion, id_proyecto, nivel, id_objetivo_padre } = req.body;

    // Verificar que los campos sean correctos
    if (!tipo || !descripcion || !id_proyecto || !nivel) {
      return res.status(400).json({ message: 'Campos incompletos' });
    }
    const nuevoObjetivo = await ObjetivoLogico.create({
      tipo,
      descripcion,
      id_proyecto,
      nivel,
      id_objetivo_padre
    });
    res.status(201).json({ message: 'Objetivo lógico creado', objetivo: nuevoObjetivo });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear objetivo lógico', error: error.message });
  }
};

// Actualizar un objetivo lógico
export const updateObjetivoLogico = async (req, res) => {
  try {
    const { id } = req.params;
    const { tipo, descripcion, id_proyecto, nivel, id_objetivo_padre } = req.body;

    const objetivo = await ObjetivoLogico.findByPk(id);
    if (!objetivo) {
      return res.status(404).json({ message: 'Objetivo lógico no encontrado' });
    }

    objetivo.tipo = tipo;
    objetivo.descripcion = descripcion;
    objetivo.id_proyecto = id_proyecto;
    objetivo.nivel = nivel;
    objetivo.id_objetivo_padre = id_objetivo_padre;

    await objetivo.save();
    res.json({ message: 'Objetivo lógico actualizado', objetivo });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar objetivo lógico', error: error.message });
  }
};

// Eliminar un objetivo lógico
export const deleteObjetivoLogico = async (req, res) => {
  try {
    const { id } = req.params;

    const objetivo = await ObjetivoLogico.findByPk(id);
    if (!objetivo) {
      return res.status(404).json({ message: 'Objetivo lógico no encontrado' });
    }

    await objetivo.destroy();
    res.json({ message: 'Objetivo lógico eliminado' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar objetivo lógico', error: error.message });
  }
};
