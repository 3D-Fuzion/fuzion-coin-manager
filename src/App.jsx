import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './css/Base.css'
import { Login } from './components/Login';
import { Input } from './components/Input';
function App() {
  return (
   <>
    <div class="row align-items-center">
    <div class="col"></div>
    <div class="col-4 border">
      <Login/>
      <Input/>
    </div>
    <div class="col"></div>
  </div>  
   </>
  );
}

export default App;
