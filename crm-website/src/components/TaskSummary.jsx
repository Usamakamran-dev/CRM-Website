import TeamTaskIcon from './../assets/Icons/TeamTask.png';
import { Typography } from "@material-tailwind/react";

const TABLE_ROWS = [
  {
    name: "John Michael",
    incompleteTask: "20",
    pending: "20",
    pendingToday: "20",
    overdue: "20",
    recentlyCompleted:"20"
  },
  {
    name: "John Michael",
    incompleteTask: "20",
    pending: "20",
    pendingToday: "20",
    overdue: "20",
    recentlyCompleted:"20"
  }, {
    name: "John Michael",
    incompleteTask: "20",
    pending: "20",
    pendingToday: "20",
    overdue: "20",
    recentlyCompleted:"20"
  }, {
    name: "John Michael",
    incompleteTask: "20",
    pending: "20",
    pendingToday: "20",
    overdue: "20",
    recentlyCompleted:"20"
  }, {
    name: "John Michael",
    incompleteTask: "20",
    pending: "20",
    pendingToday: "20",
    overdue: "20",
    recentlyCompleted:"20"
  },
   {
    name: "John Michael",
    incompleteTask: "20",
    pending: "20",
    pendingToday: "20",
    overdue: "20",
    recentlyCompleted:"20"
  },
   {
    name: "John Michael",
    incompleteTask: "20",
    pending: "20",
    pendingToday: "20",
    overdue: "20",
    recentlyCompleted:"20"
  },
];
 

function TaskSummary(){
    return(
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-[0px_0px_10px_0px_rgb(0,0,0,0.08)] w-full h-full col-span-3">
             <div className="flex flex-row items-center gap-4 md:px-6 px-4 md:py-4 py-6">
                <img src={TeamTaskIcon} alt="Team-Task-Icon" className='h-10 w-auto'/>
                <div>
                    <h1 className="text-md font-semibold text-white">
                        TEAM TASK SUMMARY
                    </h1>
                    <p className="text-xs font-medium text-white">
                        Lorem ipsum lorem ipsum dolor sit amet
                    </p>
                </div>
             </div>
             <div className='sm:px-4 px-2'>
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                    <tr>
                    <th className="border-b-2 border-white-100 sm:p-4 p-2">
                        <Typography color="white" className="font-semibold leading-none sm:text-xs text-[10px]">
                         User Name
                        </Typography>
                     </th>
                     <th className="border-b-2 border-white-100 sm:p-4" >
                        <Typography
                        color="white"
                        className="font-semibold leading-none sm:text-xs text-[10px]">
                         Incomplete
                        </Typography>
                     </th>
                     <th className="border-b-2 border-white-100 sm:p-4 p-2">
                        <Typography color="white" className="font-semibold leading-none sm:text-xs text-[10px]">
                         Pending
                        </Typography>
                     </th>
                     <th className="border-b-2 border-white-100 sm:p-4">
                        <Typography color="white" className="font-semibold leading-none sm:text-xs text-[10px]">
                        Pending Today
                        </Typography>
                     </th>
                     <th className="border-b-2 border-white-100 sm:p-4 p-2">
                        <Typography
                        color="white"
                        className="font-semibold leading-none sm:text-xs text-[10px]">
                         Overdue
                        </Typography>
                     </th>
                     <th className="border-b-2 border-white-100 sm:p-4">
                        <Typography color="white" className="font-semibold leading-none sm:text-xs text-[10px]">
                         Recently
                        </Typography>
                     </th>
                    </tr>
                    </thead>
        <tbody>
          {TABLE_ROWS.map((dataObj, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "py-3" : "py-3 border-b border-white-100";
            return (
              <tr key={dataObj.name}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal sm:text-xs text-[10px] sm:px-3 px-2"
                  >
                    {dataObj.name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal sm:text-xs text-[10px] sm:px-3"
                  >
                    {dataObj.incompleteTask}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal sm:text-xs text-[10px] sm:px-3 px-2"
                  >
                    {dataObj.pending}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="white"
                    className="font-medium sm:text-xs text-[10px] sm:px-3"
                  >
                    {dataObj.pendingToday}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="white"
                    className="font-medium sm:text-xs text-[10px] sm:px-3 px-2"
                  >
                    {dataObj.overdue}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="white"
                    className="font-medium sm:text-xs text-[10px] sm:px-3"
                  >
                    {dataObj.recentlyCompleted}
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

export default TaskSummary;