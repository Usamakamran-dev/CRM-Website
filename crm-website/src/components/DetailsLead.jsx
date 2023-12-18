

function DetailsLead(){

    return(
      <div className="w-full flex flex-col items-center gap-4">
        <h1 className="font-bold text-lg text-blue-400">Lead Details</h1>
        <div className="rounded-lg shadow-[0px_0px_10px_0px_rgb(0,0,0,0.08)] w-1/2 flex flex-col gap-5 p-5">
                  <div className='flex flex-row items-center justify-between'>
                    <label className="font-medium text-sm text-gray-700 m-0">Owner</label>
                    <label className="font-bold italic text-sm text-blue-400 m-0">Usama Kamran</label>
                  </div>
                  <div className='flex flex-row items-center justify-between'>
                    <label className="font-medium text-sm text-gray-700 m-0">Campaign Name</label>
                    <label className="font-bold italic text-sm text-blue-400 m-0">Name</label>
                  </div>
                  <div className='flex flex-row items-center justify-between'>
                    <label className="font-medium text-sm text-gray-700 m-0">Lead Source</label>
                    <label className="font-bold italic text-sm text-blue-400 m-0">Dream Homes</label>
                  </div>
                  <div className='flex flex-row items-center justify-between'>
                    <label className="font-medium text-sm text-gray-700 m-0">Notes</label>
                    <label className="font-bold italic text-sm text-blue-400 m-0">Null</label>
                  </div>
              </div>
      </div>
    )}
export default DetailsLead;