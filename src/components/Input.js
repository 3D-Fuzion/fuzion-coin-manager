import "../css/Input.css"
import { Button } from "./Button"

export function Input () { 
  return( 
    <div class="container-sm text row">
    <div class='col'/>
    <div class='col-8'>
      <label for="email" class="form-label">Email</label>
      <input type="username" class='form-control' id="email"></input>
      <label for="password" class="form-label">Senha</label>
      <input type="password" class='form-control' id="password"></input>  
      <Button/>
    </div> 
    <div class='col'/>
    </div>
  )
}