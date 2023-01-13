import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {Table, Button} from 'react-bootstrap';
import {approveRequest, denyRequest} from '../../actions/requests';


const Request = () => {
  const { requests, isLoading }= useSelector((state) => state.requests);
  const dispatch = useDispatch();

  if(!requests.length && !isLoading) return 'No Requests';
  const approve=(request)=>{
    dispatch(approveRequest(request));
  }

  const deny=(request)=>{
    dispatch(denyRequest(request));
  }

  return (
    <Table striped bordered hover>
    <>
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
            <td><Button size="small" color="secondary" onClick={()=>approve(request)}>Approve</Button></td>
            <td><Button size="small" color="secondary" onClick={()=>deny(request)}>Deny</Button></td>
        
            </tr>
    ))}
    </>
    </Table>
  )
}

export default Request