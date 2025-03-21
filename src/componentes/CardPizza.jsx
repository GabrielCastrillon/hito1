const CardPizza = ({ nombre, precio, imagen2,ingredientes }) => {
  return (
    <div className="contenedor">

  

    <div className="card-pizza">

      <div className="seccionImagen">
      <img src={imagen2} alt={`Imagen2`} />
      <h2>{nombre}</h2>
      </div>

      <div className="seccionIngredientes">
        <p>Ingredientes:</p>
        {ingredientes}


      </div>
       <div className="seccionValor">
      <h3 className="valor">Precio: {precio}</h3>

       <div  className="botones">
      <button>Ver mas 👀</button>
      <button>Añadir🛒</button>
      </div>
      </div>

    </div>


    </div>
  );
};

export default CardPizza;
