import AppRouter from "./router/AppRouter";
import AppRoutes from "./router/AppRoutes";
import './App.css';

export default function App(){
  return (
    <>
     <AppRouter>
       <AppRoutes />
     </AppRouter>
    </>
  )
}
