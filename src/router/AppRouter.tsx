import { ReactNode } from "react";
import { BrowserRouter as Router } from "react-router-dom";

type AppRouterType = {
    children : ReactNode
}

export default function AppRouter( { children } : AppRouterType  ){
    return(
        <Router>
            {children}
        </Router>
    )
}