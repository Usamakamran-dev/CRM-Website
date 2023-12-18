import MemberList from "./MemberList";

function MemberLead(){
 const memberList=[
  { name:'Usama Kamran' , date: '23 October 2023  19:89:09 PM'},
  { name:'Usama Kamran' , date: '23 October 2023  19:89:09 PM'},
  { name:'Usama Kamran' , date: '23 October 2023  19:89:09 PM'},
  { name:'Usama Kamran' , date: '23 October 2023  19:89:09 PM'},
  { name:'Usama Kamran' , date: '23 October 2023  19:89:09 PM'},
  { name:'Usama Kamran' , date: '23 October 2023  19:89:09 PM'}
]
    return(
      <div className="flex flex-col items-center gap-4">
        <h1 className="font-bold text-lg text-blue-400">Member List</h1>
        <div className="flex flex-col items-center gap-3">
           {memberList.map((list, index)=>(
              <MemberList key={index} dateTime={list.date} name={list.name}></MemberList>
           ))}
        </div>
      </div>
    )}
export default MemberLead;