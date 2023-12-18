import { FaTasks } from 'react-icons/fa';
import { Button } from "@material-tailwind/react";

function TaskLead(){

    return(
      <div className='flex flex-col items-center gap-5 py-10'>
      <FaTasks className='text-9xl text-gray-500'/>
      <h1 className='font-bold text-gray-500 text-xl'>Add Task To Manage Your Lead</h1>
      <Button variant="gradient" color="blue">+ Add Task</Button>
    </div>
    )}
export default TaskLead;