import data from "../data/data.json";

class ApartmentsService {
    constructor(data) {
        this._data = data;
    }

    /**
     * Récupérer tous les appartements. (uniquement propriétés id, title et cover)
     * @returns {any[]} Array contenant les appartements.
     */
    getAll() {
        return new Promise(async resolve => {
            resolve(
                this._data.map(d => ({
                    id: d.id,
                    title: d.title,
                    cover: d.cover
                }))
            );
        });
    }

    /**
     * Récupérer toutes les données d'un appartement.
     * @param {string} id Id de l'appartement à récupérer.
     * @returns {Object|null} Données de l'appartement.
     */
    getById(id) {
        return new Promise(async (resolve, reject) => {
            for(const apartment of this._data)
                if(apartment.id.toLowerCase() == id.toLowerCase()) return resolve(apartment);
            reject(null);
        });
    }
};

const apartmentsService = new ApartmentsService(data);
export default apartmentsService;