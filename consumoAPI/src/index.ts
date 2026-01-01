import axios from "axios";
export {};

const consumirComFetch = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Ocorreu um Erro: ", error);
    }
};

async function consumirComAxios() {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/erro/1");

        console.log(response.status);
        console.log(response.data);
    } catch (error: any) {
        console.log(error.response.status);
        console.log(error.response.data);
    }
}

consumirComAxios()