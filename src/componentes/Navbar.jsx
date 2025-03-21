import Utiles from "./Utiles";

const Navbar = () => {

  
  const token = false;


  return (
    <nav className="menuNavegacion">
                         
        <ul className="logos">
          <li>Pizzeria Mama mia</li>
          <li> <button>🍕Home </button></li>
          <li> <button>🔐 Login </button></li>
          <li> <button>🔐Register </button></li>
  
  
          </ul>

        <div > <button className="precio">🛒 Total: $<Utiles/> </button></div>
                   
    </nav>
  );
};

export default Navbar;


