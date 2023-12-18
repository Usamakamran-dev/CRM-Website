import React , { lazy , Suspense} from "react";
import { createBrowserRouter } from "react-router-dom";
import ParentElement from "./ParentElement";
import Loader from "../components/Loader";
const Administrator=lazy(()=> import('./../pages/Administrator'));
const SmartView=lazy(()=> import('./../pages/SmartView'));
const LeadDetail=lazy(()=> import('./../pages/LeadDetail'));

export const router=createBrowserRouter([
    {path: '/', 
    element: <ParentElement/>,
    children:[
    { index: true , element: <Suspense fallback={<Loader/>}> <Administrator/> </Suspense>},
    { path: '/smartview' , element: <Suspense fallback={<Loader/>}> <SmartView/> </Suspense>},
    { path: '/leadDetail' , element: <Suspense fallback={<Loader/>}> <LeadDetail/> </Suspense>}
    ]}
    ])

export default router;
