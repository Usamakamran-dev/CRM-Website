import SingleActivity from "./SingleActivity";
import {FaFileAlt, FaHeart,FaEnvelope,FaPhone} from 'react-icons/fa';

function SummaryLead(){
    return(
      <div className="w-full flex flex-col gap-6">
          <h1 className="font-bold text-lg text-blue-400">Summary</h1>
          <div className="flex flex-col items-start gap-5">
            <SingleActivity text='0 email Campaigns sent'
            img={<FaEnvelope className='text-white text-md'></FaEnvelope>}/>
            <SingleActivity text='0 Landing Pages Visits'
            img={<FaHeart className='text-white text-md'></FaHeart>}/>
            <SingleActivity text='0 Webpage Visits'
            img={<FaFileAlt className='text-white text-md'></FaFileAlt>}/>
            <SingleActivity text='Last Phone Call Activity was on 10/11/23'
            img={<FaPhone className='text-white text-md'></FaPhone>}/>
          </div>
    </div>
    )}
    export default SummaryLead;