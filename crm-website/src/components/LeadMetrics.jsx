import KeyMetricsIcon from './../assets/Icons/KeyLead.png';
import LeadTabBox from './LeadTabBox';

function LeadMetrics(){
    return(
        <div className="rounded-lg shadow-[0px_0px_10px_0px_rgb(0,0,0,0.08)] col-span-2 md:px-6 sm:px-4 md:py-4 sm:py-6 flex flex-col gap-8">
            <div className="flex flex-row items-center gap-4">
                <img src={KeyMetricsIcon} alt="Key-Lead-Icon" className='h-10 w-auto'/>
                <div>
                    <h1 className="text-md font-semibold text-gray-950">
                        KEY LEAD METRICS
                    </h1>
                    <p className="text-xs font-medium text-gray-400">
                        Lorem ipsum lorem ipsum dolor sit amet
                    </p>
                </div>
             </div>
           <div className="flex md:flex-col sm:flex-row sm:gap-4">
                {/* ...Last 30 Days */}
                <div className="flex flex-col items-start gap-2 w-full">
                    <h2 className="text-sm font-semibold text-gray-500">Last 30 Days</h2>
                    <div className="grid grid-rows-1 grid-cols-3 md:gap-3 sm:gap-1 w-full">
                        <LeadTabBox gradient='from-cyan-500 to-blue-500' label='New Leads' price='9,000' />
                        <LeadTabBox gradient='from-rose-400 to-rose-600' label='Engagements' price='10%' />
                        <LeadTabBox gradient='from-amber-400 to-amber-500' label='Active Leads' price='20%' />
                    </div>
                </div>
               {/* ...Overall */}
               <div className="flex flex-col items-start gap-2 w-full">
                    <h2 className="text-sm font-semibold text-gray-500">Overall</h2>
                    <div className="grid grid-rows-1 grid-cols-3 md:gap-3 sm:gap-1 w-full">
                        <LeadTabBox gradient='from-cyan-500 to-blue-500' label='New Leads' price='9,000' />
                        <LeadTabBox gradient='from-rose-400 to-rose-600' label='Engagements' price='10%' />
                        <LeadTabBox gradient='from-amber-400 to-amber-500' label='Active Leads' price='20%' />
                    </div>
                </div>
           </div>
        </div>
    )}
    export default LeadMetrics;