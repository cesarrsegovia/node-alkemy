export default class MySqlRepository {
    constructor(model){
        this.model = model
    }

    getAll = async() => {
        try {
            return await this.model.findAll();
        } catch (error) {
            throw new Error('Error al obtener todos los registros')
        }
    };

    getById = async(id) => {
        try {
            return await this.model.findOne({
                where: {
                    id: id
                }
            });
        } catch (error) {
            throw new Error('Error al obtener un registro por id')
        }
    };

    create = async (obj) => {
        try {
            return await this.model.create(obj);
        } catch (error) {
            throw new Error('Error al crear un registro');
        }
    };

    update = async (id, body) => {
        try {
            return await this.model.update(body, {
                where: {
                    id: id
                }
            });
        } catch (error) {
            throw new Error('Error al actualizar un registro');
        }
    };

    delete = async (id) => {
        try {
            return await this.model.destroy({
                where: {
                    id: id,
                }
            })
        } catch (error) {
            throw new Error('Error al eliminar un registro');
        }
    };
}