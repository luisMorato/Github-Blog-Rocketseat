import { Outlet } from "react-router-dom";
import { DefaultLayout } from "./Components/DefaultLayout";

export function App() {
  return (
   <DefaultLayout>
    <Outlet />
   </DefaultLayout>
  )
}
