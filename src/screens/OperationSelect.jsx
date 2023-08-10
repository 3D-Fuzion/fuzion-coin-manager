import { useNavigate } from "react-router-dom";
import "../App.css";
function OperationSelect() {
  const navigate = useNavigate();

  function changePage() {
    navigate("/transferencias");
  }

  return (
    <div className="flex m-64 justify-center gap-12 content-center mt-80">
      <div>
        <div className=" bg-blue-500 rounded-md hover:border-4 hover:scale-110 drop-shadow-md hover:drop-shadow-xl">
          <button
            className="text-3xl actionButton drop-shadow-2xl border-3"
            onClick={changePage}
          >
            Transferencias
          </button>
        </div>
      </div>
      <div>
        <div className=" bg-blue-500 rounded-lg hover:border-4 hover:scale-110  drop-shadow-md hover:drop-shadow-xl">
          <button className="text-3xl actionButton drop-shadow-2xl">
            Gerencia de Conta
          </button>
        </div>
      </div>
    </div>
  );
}

export default OperationSelect;
