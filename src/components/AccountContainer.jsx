function AccountContainer(props) {
  return (
    <li>
      <div className="flex flex-row justify-between gap-8 m-5 hover:scale-105 bg-slate-200 shadow-md hover:shadow-xl">
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
      </div>
    </li>
  );
}

export default AccountContainer;
