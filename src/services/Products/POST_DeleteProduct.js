import axios from 'axios';
import { useEffect, useState } from 'react';
import { base_API } from '../configAPI';

function POST_DeleteProduct({id}) {
    
    const request_API = async () => {
        const request_URL = `${base_API.api}/productos/${id}`;

        const options = {
            method: 'DELETE',
            url: request_URL,
        };

        return  axios.request(options)
    }
    const [product, setProduct] = useState({});


    useEffect(() => {
       request_API().then(function (response) {
            console.log(response.data);
            setProduct(response.data)

        }).catch(function (error) {
            console.error(error);
            setProduct(error)
        });
    }, [])
    
   

    console.log(product)
    return product;
}

export default POST_DeleteProduct;