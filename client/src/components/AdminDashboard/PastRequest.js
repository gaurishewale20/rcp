import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
//import {Table} from 'react-bootstrap';
import {approveRequest, denyRequest} from '../../actions/requests';
import "../Request/Request.css";


const Request = () => {
  const { requests, isLoading }= useSelector((state) => state.requests);
  const dispatch = useDispatch();
 
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  
 

  if (!requests.length && !isLoading) return "No Past Requests";

  return (<>
  { user?.result.email!="railwayconcessionstaff@vjti.ac.in" ? (<>
  <div className='container'>
     <h2 className='pass_heading text-center new_heading'>Access Denied!</h2>
    </div></>):(<>
<table>
           <th>Status</th>
           <th>Start Date</th>
           <th>End Date</th>
           <th>Start Station</th>
           <th>End Station</th>
           <th>Period</th>
           <th>Class</th>
        <div>
          {requests.map((request) => (
            <tr>
             {console.log(request)}
             <td>{request?.status}</td>
             <td>{new Date(request?.StartDateCurr).toString().split(" ").slice(1,4).join(" ")}</td>
             <td>{new Date(request?.EndDateCurr).toString().split(" ").slice(1,4).join(" ")}</td>
             <td>{request?.StartStationCurr}</td>
             <td>{request?.EndStationCurr}</td>
             <td>{request?.period}</td>
             <td>{request?.class}</td>
             </tr>
     ))}
     </div>
     </table>
</>)}
  </>)

//   return 
//   (
//     <>
//   { user?.result.email != "railwayconcessionstaff@vjti.ac.in" ? (
//     <div className='container'>
//     <h2 className='pass_heading text-center new_heading'>Access Denied!</h2>
//     </div>):(
//     <table>
//             <th>Status</th>
//             <th>Start Date</th>
//             <th>End Date</th>
//             <th>Start Station</th>
//             <th>End Station</th>
//             <th>Period</th>
//             <th>Class</th>
//     <div>
//         {requests.map((request) => (
//             <tr>
//             {console.log(request)}
//             <td>{request?.status}</td>
//             <td>{new Date(request?.StartDateCurr).toString().split(" ").slice(1,4).join(" ")}</td>
//             <td>{new Date(request?.EndDateCurr).toString().split(" ").slice(1,4).join(" ")}</td>
//             <td>{request?.StartStationCurr}</td>
//             <td>{request?.EndStationCurr}</td>
//             <td>{request?.period}</td>
//             <td>{request?.class}</td>
//             </tr>

//     ))}
//     </div>
//     </table>
//   )}
//  </>
//   )
 
}

export default Request