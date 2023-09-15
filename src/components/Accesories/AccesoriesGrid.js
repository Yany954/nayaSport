import { List } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { pathRoutes } from "../../routes/PathRoutes";
import GET_AllProducts from "../../services/Products/GET_AllProducts";
import RoundCard from "../Globals/RoundCard/RoundCard";
import "./Accesories.css";


const AccesoriesGrid = () => {
  
  const [position, setPosition] = useState("both");
  const [align, setAlign] = useState("center");

  const [products, setProducts] = useState();
  console.log(products);

  async function getData() {

    GET_AllProducts().then((response) => {
      setProducts(response.data);
      console.log(response.data)

      const reader = new FileReader();

      reader.onload = () => {
        const read = reader.readAsArrayBuffer(response.data);
        console.log(read)
      };

    }).catch(function (e) {
      console.error(e);
    });
  }


  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="accesories-cards">
      <List
        pagination={{
          position,
          align,
        }}
        grid={{
          gutter: 6,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 3,
          xxl: 6,
        }}
        dataSource={products}
        renderItem={(item, i) => (

          <List.Item key={i}>
            <Link className="accesories-cards-link" to={`${pathRoutes.uniform}/${item.idProducto}`}>
              <RoundCard
                imgPath={item.imagen.data}
                product={item.nombre}
                price={item.precio_venta}
              />
            </Link>
          </List.Item>

        )}
      />
    </section>
  );
};

export default AccesoriesGrid;
