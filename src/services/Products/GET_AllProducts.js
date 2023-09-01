import axios from "axios";

function GET_AllProducts() {
    
    const urlOrders = "http://localhost:3001/api/productos";
    return axios.get(urlOrders);

    
}

export default GET_AllProducts