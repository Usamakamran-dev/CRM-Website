import { FaFileAlt } from 'react-icons/fa';
import { Button } from "@material-tailwind/react";

function DocumentLead(){

    return(
      <div className='flex flex-col items-center gap-5 py-10'>
        <FaFileAlt className='text-9xl text-gray-500'/>
        <h1 className='font-bold text-gray-500 text-xl'>No Records Found</h1>
        <Button variant="gradient" color="blue">+ Add Document</Button>
      </div>
    )}
export default DocumentLead;