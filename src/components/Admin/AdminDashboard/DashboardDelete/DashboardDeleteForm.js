import React, { useEffect, useRef, useState } from 'react'
import GET_AllProducts from '../../../../services/Products/GET_AllProducts';
import { Avatar, Divider, List, Skeleton } from 'antd';
import POST_DeleteProduct from '../../../../services/Products/POST_DeleteProduct';
import { base_API } from '../../../../services/configAPI';
import axios from 'axios';
import Swal from 'sweetalert2';
import Title from '../../../Globals/Title/Title';
import InfiniteScroll from 'react-infinite-scroll-component';
import { pathRoutes } from '../../../../routes/PathRoutes';
import { Link } from 'react-router-dom';

function DashboardDeleteForm() {

  const id = useRef(null);

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState();

  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    GET_AllProducts().then((response) => {
      setProducts(response.data);
    }).catch(function (e) {
      console.error(e);
    })
      .catch(() => {
        setLoading(false);
      });
  };

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
    loadMoreData();
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
          icon: 'question',
          title: 'Eliminar producto',
          text: '¿Seguro desea eliminar este producto?',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si,borrar'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              icon: 'success',
              title: 'Producto Eliminado',
              text: 'Producto eliminado con exito',
            })

            setTimeout(() => {
              window.location.reload(true);
            }, 3000);
          }
        })



      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se ha podido eliminar el producto',
        })
      }
    }).catch(function (error) {
      console.error(error);
    });
  }

  return (

    <div className='list-container' id="scrollableDiv">
      {products && loading && <InfiniteScroll
        dataLength={products.length}
        next={loadMoreData}
        hasMore={products.length < 10}
        loader={
          <Skeleton
            avatar
            paragraph={{
              rows: 1,
            }}
            active
          />
        }
        endMessage={<Divider plain>No hay más productos 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <Title title='PRODUCTOS DISPONIBLES' />
        <List style={{ padding: '30px' }}
          dataSource={products}
          renderItem={(item, i) => (

            <List.Item className='list-item' key={i}
              actions={[<button onClick={(e) => onDelete(item.idProducto)} >Delete</button>, <Link to={`${pathRoutes.adminUpdate}/${item.idProducto}`} key="list-loadmore-edit">Update</Link>]}
            >
              <Skeleton avatar title={false} loading={false} active>
                <List.Item.Meta

                  avatar={<Avatar src={item.imagen} />}
                  title={item.nombre}
                />
                <input className='input-id' ref={id} value={item.idProducto}></input>
              </Skeleton>
            </List.Item>
          )}
        />
      </InfiniteScroll>
      }
    </div>
  )
}

export default DashboardDeleteForm