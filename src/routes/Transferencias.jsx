import axios from 'axios'
import { useEffect, useState } from 'react';
import AccountContainer from '../components/AccountContainer';
function Transferecias()  {

  const [contas, setContas] = useState([]);
 
  useEffect(() => {
      axios.get('http://localhost:3000/user')
        .then((response) => setContas(response.data))
        console.log(contas);  
  }, []) 
  
       
  return ( 
    <div className="container mx-auto">
      <h1 className='text-4xl'>Lista de Contas</h1>
      <ul>
        {contas.map(c => 
          <AccountContainer key={c._id} email={c.email}/> 
        )}
      </ul>
    </div>
    )
  }


export default Transferecias