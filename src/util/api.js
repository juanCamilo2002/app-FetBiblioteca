import axios from "axios";

export const createAxiosInstance = (accessToken, customConfig = {}) =>{
    return axios.create({
        baseURL:import.meta.env.VITE_API_URL,
        headers: {
            "Content-type": "application/json",
            "accessToken": `Bearer ${accessToken}`,
        },
        ...customConfig,
    });

}


export const getBooks = async () =>{
    const customApiInstance = createAxiosInstance();
    try {
        const response = await customApiInstance.get("/books/listar");
        return response.data;
    } catch (error) {
        console.error('error fetching data:', error);
    }
}

