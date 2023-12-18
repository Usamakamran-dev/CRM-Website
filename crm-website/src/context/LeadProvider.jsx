import React , { createContext, useState } from "react";

export const LeadContext=createContext();

function LeadProvider(props){
    const [leadNavIndex,setLeadNavIndex]=useState(0);
    const value={
        leadNavIndex,
        setLeadNavIndex
    }
    return(
          <LeadContext.Provider value={value}>
            {props.children}
          </LeadContext.Provider>
    )
    }

export default LeadProvider;
