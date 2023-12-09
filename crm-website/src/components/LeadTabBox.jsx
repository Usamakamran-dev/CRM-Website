

function LeadTabBox(props){
    return(
        <div className={`bg-gradient-to-r ${props.gradient} rounded-md flex flex-col items-center md:py-5 sm:py-2`}>
                <label className="text-white md:text-sm sm:text-xs font-medium m-0 text-center">
                    {props.label}
                </label>
                <h3 className="text-white md:text-2xl sm:text-xl font-semibold m-0">
                    {props.price}
                </h3>
        </div>
    )}
    export default LeadTabBox;