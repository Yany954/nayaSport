import axios from "axios";
import { base_API } from "../configAPI";

function GET_AllProducts() {
    
    const request = `${base_API.api}/productos`;
    return axios.get(request);
    
}

export default GET_AllProducts