import styles from './App.module.css'
console.log(styles);


function App() {

  return (
    <form>
      <h2>LOGIN</h2>
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
