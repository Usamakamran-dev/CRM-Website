import { FaTimes } from 'react-icons/fa';
import { Button } from '@material-tailwind/react';

function EditActivityForm(props){

    return(
         <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black bg-opacity-70 transition-opacity duration-700 ease-in-out">
            <form className="bg-white px-5 py-5 rounded-md w-2/5 flex flex-col items-center gap-7">
                <div className='flex flex-col items-start gap-2'>
                    <div className='flex flex-row items-center justify-between w-full'>
                      <h1 className="text-xl text-blue-400 font-bold">Edit Activity</h1>
                      <FaTimes className='text-lg text-gray-700 hover:text-gray-900' onClick={props.onCancel}/>
                    </div>
                    <p className="text-xs text-gray-700 font-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies eros cursus, hendrerit felis at, ullamcorper velit</p>
                </div>
                <div className='flex flex-col gap-4 w-full'>
                        <div className="relative">
                            <select className="appearance-none text-xs font-medium border-gray-400 w-full 
                            border py-3 px-4 pr-8 rounded-lg focus:outline-none focus:border-blue-500 focus:ring
                            focus:ring-blue-200"
                            >
                                    <option value="Activity Type" disabled>
                                    Activity Type
                                    </option>
                                    <option value="option1" 
                                    className='text-xs font-medium border-gray-700 p-2'>
                                    Option 1
                                    </option>
                                    <option value="option2" 
                                    className='text-xs font-medium border-gray-700 p-2'>
                                    Option 2
                                    </option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12L5 7l1.5-1.5L10 9l3.5-3.5L15 7z"/></svg>
                            </div>
                        </div>
                        <input type="date"
                         className='py-3 px-4 text-xs font-medium w-full border
                         border-gray-400 rounded-lg focus:outline-none focus:ring-1
                         focus:ring-blue-500 focus:ring-offset-0' 
                         />
                         <textarea rows='5' placeholder='Enter Notes' 
                         className='placeholder:text-gray-900 py-3 px-4 text-xs 
                         font-medium w-full border border-gray-400 rounded-lg focus:outline-none 
                         focus:ring-1 focus:ring-blue-500 focus:ring-offset-0' 
                         />
                        <div className="relative">
                            <select className="appearance-none text-xs font-medium border-gray-400 w-full 
                            border py-3 px-4 pr-8 rounded-lg focus:outline-none focus:border-blue-500 
                            focus:ring focus:ring-blue-200"
                            >
                                <option value="" disabled hidden>
                                Select Meeting Type
                                </option>
                                <option value="option1" 
                                className='text-xs font-medium border-gray-700 p-2'>
                                Option 1
                                </option>
                                <option value="option2" 
                                className='text-xs font-medium border-gray-700 p-2'>
                                Option 2
                                </option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12L5 7l1.5-1.5L10 9l3.5-3.5L15 7z"/></svg>
                            </div>
                        </div>
                        <div className="relative">
                            <select className="appearance-none text-xs font-medium border-gray-400 w-full 
                            border py-3 px-4 pr-8 rounded-lg focus:outline-none focus:border-blue-500 
                            focus:ring focus:ring-blue-200"
                            >
                                <option value="" disabled hidden>
                                Phone Call Outcome
                                </option>
                                <option value="option1" 
                                className='text-xs font-medium border-gray-700 p-2'>
                                Option 1
                                </option>
                                <option value="option2" 
                                className='text-xs font-medium border-gray-700 p-2'>
                                Option 2
                                </option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12L5 7l1.5-1.5L10 9l3.5-3.5L15 7z"/></svg>
                            </div>
                        </div>
                        <input type="date"
                        className='py-3 px-4 text-xs font-medium w-full border border-gray-400 
                        rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-0' 
                        />
                </div>
                <Button variant='gradient' color='blue' className='px-10'>Edit Now</Button>
            </form>
         </div>
     )}
     export default EditActivityForm;