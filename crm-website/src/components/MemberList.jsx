import { FaUser } from 'react-icons/fa';

function MemberList(props){

    return(
        <div className="rounded-lg shadow-[0px_0px_10px_0px_rgb(0,0,0,0.06)] flex flex-row items-center gap-8 px-8 py-2">
             <FaUser className='text-xs text-gray-500'/>
             <label className='font-regular text-gray-500 tracking-wide text-sm'> Lead imported on 
             <span className='font-bold'> {props.dateTime}</span> by 
             <span className='font-bold text-blue-400'> {props.name}</span></label>
        </div>
    )}

    export default MemberList;