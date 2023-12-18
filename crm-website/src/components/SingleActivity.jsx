
function SingleActivity(props){

    return(
       <div className="flex flex-row items-center gap-4">
          <div className='w-11 h-11 bg-blue-600 hover:bg-blue-500 flex items-center justify-center rounded-full'>
              {props.img}
          </div>
          {
          (props.date=='true' &&  <div className="flex flex-col items-center gap-1">
             <label className="text-md font-bold text-gray-700">10 Nov</label>
             <p className="text-xs font-medium text-gray-600 cursor-pointer">04:45 PM</p>
          </div>)
          }
          <p className="text-sm font-semibold text-gray-700 pl-6 cursor-pointer">
          {props.text}</p>
       </div>
    )}

export default SingleActivity;