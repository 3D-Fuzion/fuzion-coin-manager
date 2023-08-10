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
      <div className="flex flex-row h-full w-screen justify-center">
        <div className="bg-slate-800 h-full text-center shadow-2xl w-full px-12">
          <RouterProvider router={router} />
        </div>
      </div>
    </div>
  );
}

export default App;
