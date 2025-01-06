import styles from './App.module.css'
import { useState } from 'react';

function App() {
  // Guarda info que el usuario va cargando en los inputs
  // Para eso el estado es un obj con 2 propiedades username y password
  
  // *Al trabajar con estados controlados se debe enlazar el estado de React con el valor de los inputs 
  // *Porque EL ESTADO debe ser IGUAL al value del input (username y password)
  // Esta validación con JS (propiedades del estado username y password, iguales al value de los inputs)
  // es la correcta y no con HTML --> required
  const [userData, setUserData] = useState({
    username: "",
    password: ""
  });
  console.log(userData);


  
  // Esta funcion agrega funcionalidad a los inputs(sin esto no se puede escribir en ellos) SE BINDEA con onChange={handleInputChange}
  // Cada caracter que se ingrese, actualizara el valor del input y se debe guardar
  // !AL BINDEAR el input se recibe un objeto EVENT que se dispara ante cada cambio en el input 
  // Aqui se ve onChange={(event) => handleInputChange(event)}) pero ocuparemos la mas simple onChange={handleInputChange}
  const handleInputChange = (event) => {
    // para ver que las propiedades value y name estan en target:input
    console.log(event);

    // destructuring del objeto event.target
    const {name, value} = event.target;
    // actualizar el estado
    setUserData({
      ...userData,
      [name]: value
    });

  }
  
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
        // !Bindeo de la funcion con el input (OPCION 2 --> onChange={(event) => handleInputChange(event)}) son lo mismo
        onChange={handleInputChange}

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
        // !Bindeo de la funcion con el input
        onChange={handleInputChange}
        />
      </div>
      <button>Submit</button>
    </form>
  );
}

export default App;
