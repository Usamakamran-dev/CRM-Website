import { Button } from "@material-tailwind/react";
import AddActivityForm from "./AddActivityForm";
import EditActivityForm from "./EditActivityForm";
import SingleActivity from "./SingleActivity";
import {FaFileAlt} from 'react-icons/fa';
import { useState } from "react";

function ActivitiesLead(){
    const [formOpening,setFormOpening]=useState({
      add: false,
      edit:false
    })
    return(
      <div className="w-full flex flex-col gap-6">
          <div className="w-full flex flex-row items-center">
            <h1 className="font-bold text-lg text-blue-400">Activities</h1>
            <div className="flex flex-row justify-end items-end gap-2 w-full">
                <Button onClick={()=> setFormOpening((prev)=> ({...prev , add:true}))}
                className="rounded-full" color='blue' variant="gradient" size="sm">Add Activity</Button>
                <Button onClick={()=> setFormOpening((prev)=> ({...prev , edit:true}))}
                className="rounded-full" variant="outlined" size="sm">Edit Activity</Button>
            </div>
        </div>
        <div className="flex flex-col items-start gap-5">
           <SingleActivity date='true' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
           img={<FaFileAlt className='text-white text-md'></FaFileAlt>}/>
           <SingleActivity date='true' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
           img={<FaFileAlt className='text-white text-md'></FaFileAlt>}/>
           <SingleActivity date='true' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
           img={<FaFileAlt className='text-white text-md'></FaFileAlt>}/>
        </div>
        {formOpening.add && <AddActivityForm onCancel={()=> setFormOpening((prev)=> ({...prev , add:false}))}/>}
        {formOpening.edit && <EditActivityForm onCancel={()=> setFormOpening((prev)=> ({...prev , edit:false}))}/>}
    </div>
    )}
    export default ActivitiesLead;