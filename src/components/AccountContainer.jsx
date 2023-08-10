import Modal from "react-modal";
import { useState } from "react";
import axios from "axios";
function AccountContainer(props) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [operationValue, setOperationValue] = useState();

  function AddCoin() {
    axios
      .post("http://localhost:3000/manager/addcoin", {
        userId: props.userId,
        newValue: operationValue,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(props.userId);
  }

  function RemoveCoin() {
    axios
      .post("http://localhost:3000/manager/removecoin", {
        userId: props.userId,
        newValue: operationValue,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(props.userId);
  }

  Modal.setAppElement("body");

  return (
    <li>
      <div className="flex flex-row justify-between gap-8 m-5 hover:scale-105 transition-all duration-75 bg-slate-200 shadow-md hover:shadow-xl">
        <div className="border-r-4 border-l-8 p-2 border-l-blue-600 border-slate-800">
          <h1 className="text-3xl font-bold underline">Email</h1>
          <h1>{props.email}</h1>
        </div>
        <div className="border-r-4 font-bold border-l-4 p-2 border-slate-800">
          <h1 className="text-3xl underline">Nome</h1>
          <h1>{props.name}</h1>
        </div>
        <div className="border-r-4 font-bold border-l-4 p-2 border-slate-800">
          <h1 className="text-3xl underline">CPF</h1>
          <h1>{props.cpf}</h1>
        </div>
        <div className="border-r-4 font-bold border-l-4 p-2 border-slate-800">
          <h1 className="text-3xl underline">Coins</h1>
          <h1>{props.coin}</h1>
        </div>
        <div className="border-r-4 font-bold border-l-8 p-2 bg-green-300 border-slate-800">
          <button className="btn text-3xl mt-2" onClick={openModal}>
            Gerenciar
          </button>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <div>
            <button
              className="btn mr-8 mt-6 text-3xl rounded-lg p-4 bg-green-300"
              onClick={AddCoin}
            >
              Adicionar
            </button>
            <input
              className="p-2 text-2xl font-bold text-center bg-slate-300 scale-125 m-10"
              onChange={(e) => setOperationValue(e.target.value)}
            />
            <button
              className="btn ml-8 text-3xl rounded-lg p-4 bg-red-300"
              onClick={RemoveCoin}
            >
              Remover
            </button>
          </div>
        </Modal>
      </div>
    </li>
  );
}

export default AccountContainer;
