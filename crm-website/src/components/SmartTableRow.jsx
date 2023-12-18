
function SmartTableRow(props){
    return(
        <tr key={props.key} className="border-b-[1px] hover:bg-gray-50">
                <td className="font-normal sm:text-xs text-[10px] text-blue-950 sm:px-4 px-2 py-3 cursor-default">
                    {props.No}
                </td>
                <td className="font-normal sm:text-xs text-[10px] text-blue-950 sm:px-6 px-2 py-3 cursor-default">
                    {props.name}
                </td>
                <td className="font-normal sm:text-xs text-[10px] text-blue-950 py-3 cursor-default">
                    {props.score}
                </td>
                <td className="font-normal sm:text-xs text-[10px] text-blue-950 sm:px-6 px-2 py-3 cursor-default">
                    {props.stage}
                </td>
                <td className="font-normal sm:text-xs text-[10px] text-blue-950 py-3 cursor-default">
                    {props.owner}
                </td>
                <td className="font-normal sm:text-xs text-[10px] text-blue-950 sm:px-4 px-2 py-3 cursor-default">
                    {props.modifiedon}
                </td>
        </tr>
    )}
    export default SmartTableRow;