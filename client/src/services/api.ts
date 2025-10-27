import axios from "axios";

const URL = import.meta.env.VITE_API_URL || "http://localhost:3000/"

// NOTE: Usar esta para pruebas
// const URL = "http://localhost:3000/"

class apiService {
    private api = axios.create({
        baseURL: URL,
        timeout: 10000,
        withCredentials: true // <- Enviar cookies de forma automatica
    })

    private errorHandler(error: unknown) {
        // Verifica si es un error de axios
        if (axios.isAxiosError(error)) {
            // Servidor respondio con error
            if (error.response) {
                console.error('Error en la respuesta de la API:', error.response.data);
                return { error: error.response.status, message: error.response.data.message || 'Error en la respuesta del servidor' };
            }
            // Sin respuesta del servicodr
            else if (error.request) {
                return {
                    status: 500,
                    message: "Sin respuesta del servidor"
                }
            }
            // Error desconocido
            console.error("Error desconocido: ", error)
        }
    }

    /**
     * Metodo para enviar datos
     * @param url
     * @param data
     * @returns 
     */
    async post<T>(url: string, data = {}) {
        try {
            const response = await this.api.post<T>(url, data)
            return response.data
        } catch (error) {
            throw this.errorHandler(error)
        }
    }

    /**
     * Metodo para enviar datos con archivos
     * @param url 
     * @param formData 
     * @returns 
     */
    async postFormData<T>(url: string, formData = {}) {
        try {
            const response = await this.api.postForm<T>(url, formData)
            return response.data
        } catch (error) {
            throw this.errorHandler(error)
        }
    }

    /**
     * Metodo para obtener datos
     * @param url 
     * @param params
     * @returns 
     */
    async get<T>(url: string, params = {}) {
        try {
            const response = await this.api.get<T>(url, { params })
            return response.data
        } catch (error) {
            throw this.errorHandler(error)
        }
    }

    /**
     * Metodo para actualizar un objeto completo
     * @param url 
     * @param data 
     * @returns 
     */
    async put<T>(url: string, data = {}) {
        try {
            const response = await this.api.put<T>(url, data)
            return response.data
        } catch (error) {
            throw this.errorHandler(error)
        }
    }

    /**
     * Metodo para actualizar un objeto parcialmente
     * @param url 
     * @param data 
     * @returns 
     */
    async patch<T>(url: string, data = {}) {
        try {
            const response = await this.api.patch<T>(url, data)
            return response.data
        } catch (error) {
            throw this.errorHandler(error)
        }
    }

    /**
     * Metodo para eliminar objetos
     * @param url 
     * @param params 
     * @returns 
     */
    async delete<T>(url: string, params = {}) {
        try {
            const response = await this.api.delete<T>(url, { params })
            return response.data
        } catch (error) {
            throw this.errorHandler(error)
        }
    }

}

export default new apiService()