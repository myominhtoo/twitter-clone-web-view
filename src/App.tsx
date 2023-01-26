import AppRouter from "./router/AppRouter";
import AppRoutes from "./router/AppRoutes";
import './App.css'
import axios from "axios";
import { API_PREFIX } from "./data/constant/api";

axios.defaults.baseURL = API_PREFIX;

export default function App(){
  return (
    <>
     <AppRouter>
       <AppRoutes />
     </AppRouter>
    </>
  )
}
