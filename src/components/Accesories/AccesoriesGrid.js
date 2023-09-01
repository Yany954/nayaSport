import { List, Radio, Space } from "antd";
import { useEffect, useState } from "react";
import RoundCard from "../Globals/RoundCard/RoundCard";
import { pathRoutes } from "../../routes/PathRoutes";
import { Link } from "react-router-dom";
import "./Accesories.css";
import GET_AllProducts from "../../services/Products/GET_AllProducts";



const positionOptions = ["top", "bottom", "both"];
const alignOptions = ["start", "center", "end"];

const AccesoriesGrid = () => {
  const [position, setPosition] = useState("both");
  const [align, setAlign] = useState("center");

  const [orders, setOrders] = useState();
  console.log(orders)

  async function getData() {
   
    GET_AllProducts().then((response) => {
      setOrders(response.data);
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
        dataSource={orders}
        renderItem={(item, i) => (
          <List.Item key={i}>
            <Link className="accesories-cards-link" to={`${pathRoutes.uniform}/${item.idProducto}`}>
              <RoundCard imgPath={ require(`../../assets/img/${item.imagen}`)}  product={item.nombre} price={item.precio_venta}/>
            </Link>
          </List.Item>
        )}
      />
    </section>
  );
};

export default AccesoriesGrid;
