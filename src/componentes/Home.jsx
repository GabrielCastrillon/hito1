import Header from "./Header";
import CardPizza from "./CardPizza";
import Imagen2 from "../assets/imagenes/imagen2.png";
import Imagen3 from "../assets/imagenes/imagen3.png";
import Imagen4 from "../assets/imagenes/imagen4.png";

const Home = () => {
  return (
    <>
      <Header />

      <div className=" todo">
        <div className="cajas">
          <CardPizza
            nombre="Pizza Española"
            precio="$15.000"
            imagen2={Imagen2}
            ingredientes={["🍕mozzarella", "", "pepperoni", "", "orégano"]}
          />
        </div>

        <div className="cajas">
          <CardPizza
            nombre="Pizza Napolitana"
            precio="$25.000"
            imagen2={Imagen3}
            ingredientes={["🍕mozzarella", "tomates", "jamón", "orégano"]}
          />
        </div>

        <div className="cajas">
          <CardPizza
            nombre="Pizza Peperoni"
            precio="$27.000"
            imagen2={Imagen4}
            ingredientes={["🍕mozzarella", "pepperoni", "orégano"]}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
