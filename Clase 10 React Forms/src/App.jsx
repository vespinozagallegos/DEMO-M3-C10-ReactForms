import styles from './App.module.css'
import { useState } from 'react';

function App() {
  // Guarda info que el usuario va cargando en los inputs
  // Para eso el estado es un obj con 2 propiedades
  const [userData, setUserData] = useState({
    username: "",
    password= ""
  });
  // *Al trabajar con estados controlados se debe enlazar el estado de React con el valor de los inputs 
  // !Porque EL ESTADO debe ser IGUAL al value del input (USERNAME Y PASSWORD)
  // Esta validación con JS (ESTADO) es la correcta y no con HTML --> required
  return (
    <form className={styles.container}>
      <h2 >LOGIN</h2>
      
      <div>
        {/* Label e input siempre van juntos si hay label, hay input pero no es obligacion al reves*/}
        <label>Username: </label>
        {/* al poner value se BINDEA para enlazarlo con el ESTADO */}
        <input 
        type='text'
        value={userData.username}
        />
      </div>
      
      <div>
        <label>Password: </label>
        <input 
        type='text'
        value={userData.password}
        />
      </div>
      <button>Submit</button>
    </form>
  );
}

export default App;
