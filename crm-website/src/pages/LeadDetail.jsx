import Sidebar from "../components/Sidebar";
import LeadNav from "../components/LeadNav";
import React , { useContext } from "react";
import { LeadContext } from "../context/LeadProvider";
import ActivitiesLead from "../components/ActivitiesLead";
import DetailsLead from "../components/DetailsLead";
import DocumentLead from "../components/DocumentLead";
import MemberLead from "../components/MemberLead";
import TaskLead from "../components/TaskLead";
import SummaryLead from "../components/SummaryLead";

function LeadDetail(){
    const value=useContext(LeadContext);
    console.log(value.leadNavIndex);
    const handleLeadNav=()=>{
        switch (value.leadNavIndex) {
            case 0:
                return <ActivitiesLead/>
            case 1:
                return <DetailsLead/>
            case 2:
                return <DocumentLead/>
            case 3:
                return <TaskLead/>
            case 4:
                return <MemberLead/>
            case 5:
                return <SummaryLead/>
            default:
                return <ActivitiesLead/>
          }}
    return(
            <div className="grid md:grid-cols-7 grid-cols-1 gap-6 md:px-8 px-2 py-4">
                <Sidebar></Sidebar>
                <div className="md:col-span-5 flex flex-col gap-6 items-center w-full">
                    <LeadNav></LeadNav>
                    {handleLeadNav()}
                </div>
            </div>
          )}
    
    export default LeadDetail;