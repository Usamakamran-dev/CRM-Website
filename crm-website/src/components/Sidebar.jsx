import profileImg from './../assets/profile.jpg';
import { FaMapMarkerAlt, FaEnvelope ,FaPhone } from 'react-icons/fa';

function Sidebar(){

    return(
        <div className="rounded-lg shadow-[0px_0px_10px_0px_rgb(0,0,0,0.08)] md:col-span-2 p-5 flex flex-col items-start md:gap-12 gap-4 md:h-[80vh]">
            <div className="flex flex-row items-center gap-5">
                 <img src={profileImg} alt="Lead-Profile" width='70' height='auto' className='rounded-full border-solid border-2 border-gray-800'/>
                 <div className="flex flex-col items-start gap-1">
                    <h1 className="font-bold text-xl text-blue-400 m-0">USAMA KAMRAN</h1>
                    <label className="font-semibold text-sm text-gray-700 m-0">Data Scientist</label>
                 </div>
            </div>
            <div className='flex md:flex-col flex-row items-start gap-4'>
                <div className='flex flex-row items-center gap-4'>
                    <FaEnvelope  className='text-gray-700 text-sm'/>
                    <label className="font-medium text-sm text-gray-700 m-0">No Messages</label>
                </div>
                <div className='flex flex-row items-center gap-4'>
                    <FaPhone className='text-gray-700 text-sm'/>
                    <label className="font-medium text-sm text-gray-700 m-0">+92 3168822232</label>
                </div>
                <div className='flex flex-row items-center gap-4'>
                    <FaMapMarkerAlt  className='text-gray-700 text-base'/>
                    <label className="font-medium text-sm text-gray-700 m-0">Location</label>
                </div>
            </div>
            <div className='flex flex-col items-start gap-2 w-full'>
              <h1 className="font-bold text-base text-blue-400 m-0">Lead Details</h1>
              <div className='flex flex-col gap-3 w-full'>
                  <div className='flex flex-row items-center justify-between'>
                    <label className="font-medium text-sm text-gray-700 m-0">Owner</label>
                    <label className="font-bold italic text-sm text-gray-700 m-0">Usama Kamran</label>
                  </div>
                  <div className='flex flex-row items-center justify-between'>
                    <label className="font-medium text-sm text-gray-700 m-0">Campaign Name</label>
                    <label className="font-bold italic text-sm text-gray-700 m-0">Name</label>
                  </div>
                  <div className='flex flex-row items-center justify-between'>
                    <label className="font-medium text-sm text-gray-700 m-0">Lead Source</label>
                    <label className="font-bold italic text-sm text-gray-700 m-0">Dream Homes</label>
                  </div>
                  <div className='flex flex-row items-center justify-between'>
                    <label className="font-medium text-sm text-gray-700 m-0">Notes</label>
                    <label className="font-bold italic text-sm text-gray-700 m-0">Null</label>
                  </div>
              </div>
            </div>
        </div>
    )}

    export default Sidebar;