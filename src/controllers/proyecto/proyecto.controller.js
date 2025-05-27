import Proyecto from '../../models/proyecto/proyecto.model.js';

// Obtener todos los proyectos
export const getProyectos = async (req, res) => {
  try {
    const proyectos = await Proyecto.findAll();
    res.json(proyectos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener proyectos', error: error.message });
  }
};

// Crear un nuevo proyecto
export const crearProyecto = async (req, res) => {
  try {
    const {
      nombre,
      descripcion,
      tipo_area,
      area_tematica,
      objetivo,
      estado,
      inicio_date,
      final_date,
      id_proyect_bene,
      id_user_proyect
    } = req.body;

    const nuevoProyecto = await Proyecto.create({
      nombre,
      descripcion,
      tipo_area,
      area_tematica,
      objetivo,
      estado,
      inicio_date,
      final_date,
      id_proyect_bene,
      id_user_proyect
    });

    res.status(201).json({ message: 'Proyecto creado', proyecto: nuevoProyecto });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear proyecto', error: error.message });
  }
};

// Obtener un proyecto por ID
export const getProyecto = async (req, res) => {
  try {
    const { id } = req.params;
    const proyecto = await Proyecto.findByPk(id);

    if (!proyecto) return res.status(404).json({ message: 'Proyecto no encontrado' });

    res.json(proyecto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener proyecto', error: error.message });
  }
};

// Actualizar un proyecto por ID
export const updateProyecto = async (req, res) => {
  try {
    const { id } = req.params;
    const proyecto = await Proyecto.findByPk(id);

    if (!proyecto) return res.status(404).json({ message: 'Proyecto no encontrado' });

    const {
      nombre,
      descripcion,
      tipo_area,
      area_tematica,
      objetivo,
      estado,
      inicio_date,
      final_date,
      id_proyect_bene,
      id_user_proyect
    } = req.body;

    await proyecto.update({
      nombre,
      descripcion,
      tipo_area,
      area_tematica,
      objetivo,
      estado,
      inicio_date,
      final_date,
      id_proyect_bene,
      id_user_proyect
    });

    res.json({ message: 'Proyecto actualizado', proyecto });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar proyecto', error: error.message });
  }
};

// Eliminar un proyecto por ID
export const deleteProyecto = async (req, res) => {
  try {
    const { id } = req.params;
    const proyecto = await Proyecto.findByPk(id);

    if (!proyecto) return res.status(404).json({ message: 'Proyecto no encontrado' });

    await proyecto.destroy();

    res.json({ message: 'Proyecto eliminado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar proyecto', error: error.message });
  }
};
