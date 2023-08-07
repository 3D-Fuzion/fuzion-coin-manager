import { useState } from "react"
import "../css/Input.css"

export function Input () { 
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })
  

  const handleChange = (event) => { 
    setUserData(event.target.value) 
  }

  return( 
    <div class="container-sm text row">
    <div class='col'/>
    <div class='col-8'>
    <form>
    <label for="email" class="form-label">Email</label>
      <input type="username" class='form-control' id="email" onChange={handleChange}></input>
      <label for="password" class="form-label">Senha</label>
      <input type="password" class='form-control' id="password"></input>  
      <div> 
        <button type="button" class="btn btn-primary">Acessar</button>
      </div>
    </form>
    </div> 
    <div class='col'/>
    </div>
  )
}