
import {
  createBrowserRouter,

} from "react-router-dom";
import { DribbleItemDetails } from "./components/DribbleItemDetails";
import DribbleItem from "./components/DribbleItem"


export const router = createBrowserRouter([
  {
    path: "/",
    element: <DribbleItem />,
  },
  {
    path: "/shotDetails/:id",
    element: <DribbleItemDetails />,
  },
]);