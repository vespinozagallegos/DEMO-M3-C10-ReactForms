import styles from './App.module.css'


function App() {

  return (
    <form className={styles.container}>
      <h2 >LOGIN</h2>
      <div>
        <label>Username: </label>
        <input />
      </div>
      
      <div>
        <label>Password: </label>
        <input />
      </div>
      <button>Submit</button>
    </form>
  );
}

export default App;
