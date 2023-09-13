import React, { useEffect, useRef, useState } from 'react'
import GET_AllProducts from '../../../../services/Products/GET_AllProducts';
import { Avatar, List, Skeleton } from 'antd';
import POST_DeleteProduct from '../../../../services/Products/POST_DeleteProduct';
import { base_API } from '../../../../services/configAPI';
import axios from 'axios';
import Swal from 'sweetalert2';
import Title from '../../../Globals/Title/Title';

function DashboardDeleteForm() {

  const id = useRef(null);

  const [products, setProducts] = useState();
  console.log(products)

  async function getData() {

    GET_AllProducts().then((response) => {
      setProducts(response.data);
    }).catch(function (e) {
      console.error(e);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  function onDelete(idf) {
   

    const productID = id.current.value;
    console.log(productID)

    const request_API = async () => {
      const request_URL = `${base_API.api}/productos/${idf}`;

      const options = {
        method: 'DELETE',
        url: request_URL,
    };
      return axios.request(options)
    }

    request_API().then(function (response) {
      console.log(response.data);
      

      if (response.status == 200) {

        Swal.fire({
          icon: 'success',
          title: 'Producto añadido',
          text: 'Porducto añadido con exito',
        })
        
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se ha podido añadir el producto',
        })
      }
    }).catch(function (error) {
      console.error(error);
    });
  }

  return (
    <div className='list-container'>
      <Title title='Borrar Producto' />
      <List 
        dataSource={products}
        renderItem={(item, i) => (

          <List.Item className='list-item' key={i}
            actions={[<button onClick={(e) => onDelete(item[0].idProducto)} >Borrar</button>,<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
          >
            <Skeleton avatar title={false} loading={false} active>
              <List.Item.Meta
               
                avatar={<Avatar src={item[0].imagen} />}
                title={item[0].nombre}
              />
              <input  className='input-id' ref={id} value={item[0].idProducto}></input>
            </Skeleton>
          </List.Item>

        )}
      />
    </div>
  )
}

export default DashboardDeleteForm