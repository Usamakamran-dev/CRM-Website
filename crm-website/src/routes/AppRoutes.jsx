import React , { lazy , Suspense} from "react";
import { createBrowserRouter } from "react-router-dom";
import ParentElement from "./ParentElement";
const Administrator=lazy(()=> import('./../pages/Administrator'));


export const router=createBrowserRouter([
    {path: '/', 
    element: <ParentElement/>,
    children:[
    { index: true , element: <Suspense fallback='Loadinggg'> <Administrator/> </Suspense>}
    ]}
    ])

export default router;
