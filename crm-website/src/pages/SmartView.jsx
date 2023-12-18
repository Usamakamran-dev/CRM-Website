import SmartTableRow from "../components/SmartTableRow";
import SmartViewNav from "../components/SmartViewNav";
const TABLE_ROWS = [
    {
      name: "Mr . John Micheal",
      score: "20",
      stage: "Arabic Speaker",
      owner: "Usama Kamran",
      modifiedon: "10/11/2023 04:45 PM",
    },
    {
        name: "Mr . John Micheal",
        score: "20",
        stage: "Arabic Speaker",
        owner: "Usama Kamran",
        modifiedon: "10/11/2023 04:45 PM",
      },
      {
        name: "Mr . John Micheal",
        score: "20",
        stage: "Arabic Speaker",
        owner: "Usama Kamran",
        modifiedon: "10/11/2023 04:45 PM",
      },
      {
        name: "Mr . John Micheal",
        score: "20",
        stage: "Arabic Speaker",
        owner: "Usama Kamran",
        modifiedon: "10/11/2023 04:45 PM",
      },
      {
        name: "Mr . John Micheal",
        score: "20",
        stage: "Arabic Speaker",
        owner: "Usama Kamran",
        modifiedon: "10/11/2023 04:45 PM",
      },
      {
        name: "Mr . John Micheal",
        score: "20",
        stage: "Arabic Speaker",
        owner: "Usama Kamran",
        modifiedon: "10/11/2023 04:45 PM",
      },
      {
        name: "Mr . John Micheal",
        score: "20",
        stage: "Arabic Speaker",
        owner: "Usama Kamran",
        modifiedon: "10/11/2023 04:45 PM",
      },
      {
          name: "Mr . John Micheal",
          score: "20",
          stage: "Arabic Speaker",
          owner: "Usama Kamran",
          modifiedon: "10/11/2023 04:45 PM",
        },
        {
          name: "Mr . John Micheal",
          score: "20",
          stage: "Arabic Speaker",
          owner: "Usama Kamran",
          modifiedon: "10/11/2023 04:45 PM",
        },
        {
          name: "Mr . John Micheal",
          score: "20",
          stage: "Arabic Speaker",
          owner: "Usama Kamran",
          modifiedon: "10/11/2023 04:45 PM",
        },
        {
          name: "Mr . John Micheal",
          score: "20",
          stage: "Arabic Speaker",
          owner: "Usama Kamran",
          modifiedon: "10/11/2023 04:45 PM",
        },
        {
          name: "Mr . John Micheal",
          score: "20",
          stage: "Arabic Speaker",
          owner: "Usama Kamran",
          modifiedon: "10/11/2023 04:45 PM",
        }
  ];

function SmartView(){

    return(
        <div className="md:px-20 px-2 flex flex-col gap-3 pb-10">
            <h1 className="text-xl font-semibold text-center text-blue-950">SMART VIEW</h1>
            <SmartViewNav></SmartViewNav>
            <div className="py-3">
            <table className="w-full min-w-max table-auto text-left">
                    <thead>
                    <tr>
                    <th className="font-semibold leading-none sm:text-xs text-[10px] text-blue-400 sm:px-4 px-2 py-3 cursor-default">
                         No.1
                     </th>
                    <th className="font-semibold leading-none sm:text-xs text-[10px] text-blue-400 sm:px-6 px-2 py-3 cursor-default">
                         Lead Name
                     </th>
                     <th className="font-semibold leading-none sm:text-xs text-[10px] text-blue-400 py-3 cursor-default">
                         Lead Score
                     </th>
                     <th className="font-semibold leading-none sm:text-xs text-[10px] text-blue-400 sm:px-6 px-2 py-3 cursor-default">
                        Lead Stage
                     </th>
                     <th className="font-semibold leading-none sm:text-xs text-[10px] text-blue-400 py-3 cursor-default">
                        Owner
                     </th>
                     <th className="font-semibold leading-none sm:text-xs text-[10px] text-blue-400 sm:px-4 px-2 py-3 cursor-default">
                         Modified On
                     </th>
                    </tr>
                    </thead>
                        <tbody>
                        {TABLE_ROWS.map((dataObj, index) => (
                            <SmartTableRow 
                            key={index}
                            No={index} 
                            name={dataObj.name}
                            stage={dataObj.stage}
                            score={dataObj.score}
                            owner={dataObj.owner}
                            modifiedon={dataObj.modifiedon}/>
                        )
                        )}
                        </tbody>
                    </table>
                    </div>
                  </div>
               )}
   export default SmartView;