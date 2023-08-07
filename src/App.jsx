import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './css/Base.css'
import { Login } from './components/Login';
import { Input } from './components/Input';
import axios from 'axios';
function App() {
  const logIn = async (email, password) => { 
    var body = { 
      email,
      password
    }
    var response = await axios.post('http://localhost:3000/login', body)
    console.log(response);
  }

  logIn(); 
  return (
   <>
    <div className="row align-items-center">
    <div className="col"></div>
    <div className="col-4 border">
      <Login/>
      <Input/>
    </div>
    <div class="col"></div>
  </div>  
   </>
  );
}

export default App;
