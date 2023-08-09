import axios from "axios";
import { useEffect, useState } from "react";
import AccountContainer from "../components/AccountContainer";
import "../App.css";
function Transferecias() {
  const [contas, setContas] = useState([]);

  useEffect(() => {
    axios
      .get("https://fuzion-coin.azurewebsites.net/user")
      .then((response) => setContas(response.data));
    console.log(contas);
  }, []);

  return (
    <div className="">
      <h1 className="text-6xl mt-5 my-8 font-bold text-white">
        Lista de Contas
      </h1>
      <ul>
        {contas.map((c) => (
          <AccountContainer
            key={c._id}
            email={c.email}
            name={c.name}
            coin={c.coin}
            cpf={c.cpf}
          />
        ))}
      </ul>
    </div>
  );
}

export default Transferecias;
