import TeamTaskIcon from './../assets/Icons/TeamTask.png';
import { Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Name", "Incomplete", "Lead Score"];
const TABLE_ROWS = [
  {
    name: "John Michael",
    incompleteTask: "20",
    leadScore: "20"
  },
  {
    name: "John Michael",
    incompleteTask: "20",
    leadScore: "20"
  },
  {
    name: "John Michael",
    incompleteTask: "20",
    leadScore: "20"
  },
  {
    name: "John Michael",
    incompleteTask: "20",
    leadScore: "20"
  },
  {
    name: "John Michael",
    incompleteTask: "20",
    leadScore: "20"
  }
  ,
  {
    name: "John Michael",
    incompleteTask: "20",
    leadScore: "20"
  }
  ]

function NewLeads(){
    return(
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-[0px_0px_10px_0px_rgb(0,0,0,0.08)] h-full col-span-2">
            <div className="flex flex-row items-center gap-4 md:px-6 px-4 md:py-4 py-6">
                <img src={TeamTaskIcon} alt="Team-Task-Icon" className='h-10 w-auto'/>
                <div>
                    <h1 className="text-md font-semibold text-white">
                        TOP NEW LEADS
                    </h1>
                    <p className="text-xs font-medium text-white">
                        Lorem ipsum lorem ipsum dolor sit amet
                    </p>
                </div>
             </div>
             <div className='px-4'>
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                    <tr>
                     <th className="border-b-2 border-white-100 p-4">
                        <Typography color="white" className="font-semibold leading-none sm:text-xs text-[10px]">
                        User Name
                        </Typography>
                     </th>
                     <th className="border-b-2 border-white-100 p-4" >
                        <Typography
                        color="white"
                        className="font-semibold leading-none sm:text-xs text-[10px]">
                         Incomplete Task
                        </Typography>
                     </th>
                     <th className="border-b-2 border-white-100 p-4">
                        <Typography color="white" className="font-semibold leading-none sm:text-xs text-[10px]">
                         Leading Score
                        </Typography>
                     </th>
                    </tr>
                    </thead>
        <tbody>
          {TABLE_ROWS.map((dataObj, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-3" : "p-3 border-b border-white-100";
            return (
              <tr key={dataObj.name}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal sm:text-xs text-[10px]"
                  >
                    {dataObj.name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal sm:text-xs text-[10px]"
                  >
                    {dataObj.incompleteTask}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal sm:text-xs text-[10px]"
                  >
                    {dataObj.leadScore}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
         </div>
    )
}

export default NewLeads;