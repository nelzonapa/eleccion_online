// RESTful (Inicia Aquí)
import axios from 'axios';
class ResultadoEleccion {
    static async getResultados() {
        try {
            // RESTful (continuando)
            const response = await axios.get('/api/services/resultado');
            return response;
        } catch (error) {
            console.error('Error al obtener resultados base de datos:', error);
            throw error;
        }
    }
    static async getUserById(id) {
        try {
            // RESTful (continuando)
            const response = await axios.get(`/api/users/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error al obtener el usuario con ID ${id}:`, error);
            throw error;
        }
    }
}

export default ResultadoEleccion;