import styles from './App.module.css'
import { useState } from 'react';

function App() {
  // Guarda info que el usuario va cargando en los inputs
  // Para eso el estado es un obj con 2 propiedades
  
  // *Al trabajar con estados controlados se debe enlazar el estado de React con el valor de los inputs 
  // *Porque EL ESTADO debe ser IGUAL al value del input (username y password)
  // Esta validación con JS (propiedades del estado username y password, iguales al value de los inputs)
  // es la correcta y no con HTML --> required
  const [userData, setUserData] = useState({
    username: "",
    password: ""
  });
  
  
  return (
    <form className={styles.container}>
      <h2 >LOGIN</h2>
      
      <div>
        {/* Label e input siempre van juntos si hay label, hay input pero no es obligacion al reves(de input a label)*/}
        <label>Username: </label>
        <input 
        type='text'
        // !al poner value se BINDEA(enlaza) el ESTADO con el INPUT
        value={userData.username}
        // El name de input nos indicará DONDE estará ESCRIBIENDO EL usuario
        name='username'
        // letra en gris que sirve de ejemplo
        placeholder='example@gmail.com'        
        />
      </div>
      
      <div>
        <label>Password: </label>
        <input 
        // el tipo password esconde el texto
        type='password'
        value={userData.password}
        name='password'
        placeholder='**********'
        />
      </div>
      <button>Submit</button>
    </form>
  );
}

export default App;


// proximo archivo. Formulario controlado con funcionalidad