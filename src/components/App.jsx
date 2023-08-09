import "../App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OperationSelect from "../screens/OperationSelect";
import Transferencias from "../screens/Transferencias";
const router = createBrowserRouter([
  {
    path: "/",
    element: <OperationSelect />,
  },
  {
    path: "transferencias",
    element: <Transferencias />,
  },
]);
export function App() {
  return (
    <div className="container-sm mx-auto">
      <div className="flex flex-row">
        <div className="basis-2/12 bg-slate-100"></div>
        <div className="basis-8/12 centered bg-slate-800 shadow-2xl">
          <RouterProvider router={router} />
        </div>
        <div className="basis-2/12 bg-slate-100"></div>
      </div>
    </div>
  );
}

export default App;
