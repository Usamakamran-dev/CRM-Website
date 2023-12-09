import TeamTaskIcon from './../assets/Icons/TeamTask.png';

function NewLeads(){
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
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-[0px_0px_10px_0px_rgb(0,0,0,0.08)] h-full col-span-2">
            <div className="flex flex-row items-center gap-4 md:px-6 sm:px-4 md:py-4 sm:py-6">
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
            <div className="flex items-center justify-center">
            <table className="w-full">
                <thead>
                    <tr>
                    <th className="py-2 px-4 text-sm font-semibold text-white text-start">User Name</th>
                    <th className="py-2 px-4 text-sm font-semibold text-white text-start">Incomplete Task</th>
                    <th className="py-2 px-4 text-sm font-semibold text-white text-start">Pending</th>
                   
                    </tr>
                </thead>
                <tbody>
                    {userData.map(user => (
                    <tr key={user.id}>
                    <td className="py-1 px-4 text-sm font-regular text-white">{user.name}</td>
                    <td className="py-1 px-4 text-sm font-regular text-white">{user.incompleteTask}</td>
                    <td className="py-1 px-4 text-sm font-regular text-white">{user.pendingTask}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
            </div>
         </div>
    )
}

export default NewLeads;