import TeamTaskIcon from './../assets/Icons/TeamTask.png';

function TaskSummary(){
    const userData = [
        { id: 1, name: 'John Doe', incompleteTask: 25, pendingTask: 25,pendingToday: 25, overdueTask: 25, recentlyCompleted: 25 },
        { id: 2, name: 'John Doe', incompleteTask: 25, pendingTask: 25,pendingToday: 25, overdueTask: 25, recentlyCompleted: 25 },
        { id: 3, name: 'John Doe', incompleteTask: 25, pendingTask: 25,pendingToday: 25, overdueTask: 25, recentlyCompleted: 25 },
        { id: 4, name: 'John Doe', incompleteTask: 25, pendingTask: 25,pendingToday: 25, overdueTask: 25, recentlyCompleted: 25 },
        { id: 5, name: 'John Doe', incompleteTask: 25, pendingTask: 25,pendingToday: 25, overdueTask: 25, recentlyCompleted: 25 },
        { id: 6, name: 'John Doe', incompleteTask: 25, pendingTask: 25,pendingToday: 25, overdueTask: 25, recentlyCompleted: 25 },
        { id: 7, name: 'John Doe', incompleteTask: 25, pendingTask: 25,pendingToday: 25, overdueTask: 25, recentlyCompleted: 25 },
        { id: 8, name: 'John Doe', incompleteTask: 25, pendingTask: 25,pendingToday: 25, overdueTask: 25, recentlyCompleted: 25 }
      ];

    return(
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-[0px_0px_10px_0px_rgb(0,0,0,0.08)] w-full h-full col-span-3">
             <div className="flex flex-row items-center gap-4 md:px-6 sm:px-4 md:py-4 sm:py-6">
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
            <div className="flex items-center justify-center py-4 px-4">
            <table>
                <thead>
                    <tr className='bg-white rounded-lg'>
                    <th className="md:p-3 sm:p-2 md:text-sm text-xs font-semibold text-blue-500 tracking-wide text-left">User Name</th>
                    <th className="md:p-3 sm:p-2 md:text-sm text-xs font-semibold text-blue-500 tracking-wide text-left">Incomplete Task</th>
                    <th className="md:p-3 sm:p-2 md:text-sm text-xs font-semibold text-blue-500 tracking-wide text-left">Pending</th>
                    <th className="md:p-3 sm:p-2 md:text-sm text-xs font-semibold text-blue-500 tracking-wide text-left">Pending For Today</th>
                    <th className="md:p-3 sm:p-2 md:text-sm text-xs font-semibold text-blue-500 tracking-wide text-left">Overdue</th>
                    <th className="md:p-3 sm:p-2 md:text-sm text-xs font-semibold text-blue-500 tracking-wide text-left">Recently Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map(user => (
                    <tr key={user.id} className='border-b-[1px] border-b-gray-300'>
                    <td className='md:p-3 sm:p-2 md:text-sm text-xs font-medium text-white'>{user.name}</td>
                    <td className='md:p-3 sm:p-2 md:text-sm text-xs font-medium text-white'>{user.incompleteTask}</td>
                    <td className='md:p-3 sm:p-2 md:text-sm text-xs font-medium text-white'>{user.pendingTask}</td>
                    <td className='md:p-3 sm:p-2 md:text-sm text-xs font-medium text-white'>{user.pendingToday}</td>
                    <td className='md:p-3 sm:p-2 md:text-sm text-xs font-medium text-white'>{user.overdueTask}</td>
                    <td className='md:p-3 sm:p-2 md:text-sm text-xs font-medium text-white'>{user.recentlyCompleted}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
            </div>
    </div>
    )
    }

export default TaskSummary;