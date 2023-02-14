import AppRouter from "./router/AppRouter";
import AppRoutes from "./router/AppRoutes";
import './App.css'
import axios from "axios";
import { API_PREFIX } from "./data/constant/api";
import {useEffect} from "react";
import {  } from 'react-router-dom';

axios.defaults.baseURL = API_PREFIX;

export default function App(){

    useEffect(() => {
        console.log('changed from parent')
    } , [window.location.href])

  return (
    <>
     <AppRouter>
       <AppRoutes />
     </AppRouter>
    </>
  )
}
