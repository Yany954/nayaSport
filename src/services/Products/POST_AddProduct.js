import axios from 'axios';
import { useEffect, useState } from 'react';
import { base_API } from '../configAPI';

function POST_AddProduct({referencia,precio_int,precio_venta,imagen,dimensiones,nombre,descripcion,marca,Categoria_idCategoria}) {
    const request_API = async () => {
        const request_URL = `${base_API.api}/productos`;

        const options = {
            method: 'POST',
            url: request_URL,
            data: {
                "referencia": referencia,
                "precio_int": precio_int,
                "precio_venta": precio_venta,
                "imagen": imagen,
                "dimensiones": dimensiones,
                "nombre": nombre,
                "descripcion": descripcion,
                "marca": marca,
                "Categoria_idCategoria": Categoria_idCategoria
            }
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

export default POST_AddProduct;