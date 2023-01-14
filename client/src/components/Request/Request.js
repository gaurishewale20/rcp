import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Button } from "react-bootstrap";
import { approveRequest, denyRequest } from "../../actions/requests";
import './Request.css';



const Request = () => {
  const { requests, isLoading } = useSelector((state) => state.requests);
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

 

  if (!requests.length && !isLoading) return "No Requests";
  const approve = (request) => {
    dispatch(approveRequest(request));
  }

  const deny = (request) => {
    dispatch(denyRequest(request));
  }

  return (<>
    {user?.result.email!="railwayconcessionstaff@vjti.ac.in" ? (<> <div className='container'>
       <h2 className='pass_heading text-center new_heading'>Access Denied!</h2>
      </div></>):(<>
  <table>
             <th>Status</th>
             <th>Start Date</th>
             <th>End Date</th>
             <th>Start Station</th>
             <th>End Station</th>
          <div>
            {requests.map((request) => (
              <tr>
               {console.log(request)}
               <td>{request?.status}</td>
               <td><a href={`/userprofile/${request?.user}`} target='_blank'>{request?.user}</a></td>
               <td>{new Date(request?.StartDateCurr).toString().split(" ").slice(1,4).join(" ")}</td>
               <td>{new Date(request?.EndDateCurr).toString().split(" ").slice(1,4).join(" ")}</td>
               <td>{request?.StartStationCurr}</td>
               <td>{request?.EndStationCurr}</td>
               <td>{request?.period}</td>
               <td>{request?.class}</td>
               <td> <button type="submit" className="sub" onClick={()=>approve(request)}>Approve</button></td>
               <td> <button type="submit" className="sub" onClick={()=>deny(request)}>Deny</button></td>
               </tr>
       ))}
       </div>
       </table>
  </>)}
    </>)
  

  // return (
  //   <table>
  //     <>
  //           <th>Status</th>
  //           <th>Start Date</th>
  //           <th>End Date</th>
  //           <th>Start Station</th>
  //           <th>End Station</th>

  //       {requests.map((request) => (
  //         <tr>
  //           {console.log(request)}
  //           <td>{request?.status}</td>
  //           <td>
  //             {new Date(request?.StartDateCurr)
  //               .toString()
  //               .split(" ")
  //               .slice(1, 4)
  //               .join(" ")}
  //           </td>
  //           <td>
  //             {new Date(request?.EndDateCurr)
  //               .toString()
  //               .split(" ")
  //               .slice(1, 4)
  //               .join(" ")}
  //           </td>
  //           <td>{request?.StartStationCurr}</td>
  //           <td>{request?.EndStationCurr}</td>
  //           <td>{request?.period}</td>
  //           <td>{request?.class}</td>
  //           <td> <button type="submit" className="sub" onClick={()=>approve(request)}>Approve</button></td>
  //           <td> <button type="submit" className="sub" onClick={()=>deny(request)}>Deny</button></td>
  //           {/* <td><Button size="small" color="secondary" onClick={()=>approve(request)}>Approve</Button></td> */}
  //           {/* <td><Button size="small" color="secondary" onClick={()=>deny(request)}>Deny</Button></td> */}
        
  //           </tr>
  //   ))}
  //   </>
  //   </table>
  // );
};

export default Request;
