import LeadFunnel from "../components/LeadFunnel";
import LeadMetrics from "../components/LeadMetrics";
import LeadSource from "../components/LeadSource";
import TaskSummary from "../components/TaskSummary";
import CallGraph from "../components/CallGraph";
import NewLeads from "../components/NewLeads";

function Administrator(){

    return(
          <div className="md:px-8 sm:px-4 px-2 flex flex-col gap-4 pb-10">
            <h1 className="text-xl font-semibold text-center text-blue-950">ADMINISTRATOR DASHBOARD</h1>
            <div className="grid md:grid-cols-5 grid-cols-1 md:gap-x-4 gap-y-4">
                  <LeadMetrics></LeadMetrics>
                  <LeadFunnel></LeadFunnel>
                  <LeadSource></LeadSource>
                  <TaskSummary></TaskSummary>
                  <CallGraph></CallGraph>
                  <NewLeads></NewLeads>
            </div>
          </div>
    )
   }

export default Administrator;



