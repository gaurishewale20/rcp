import React,{useEffect, useState} from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import {Button, Table} from 'react-bootstrap';




const AdminDashboard = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  return (
    <>
    {/* user?.result.email!="railwayconcessionstaff@vjti.ac.in" */}
    {  1==0 ? (
        <div className='container'>
        <h2>Access Denied</h2>
        </div>
    ):(
        <div className='container'>
            <h2>Admin Page</h2>
            <Link to="/pastrequests">Past Requests</Link>
            <Link to="/pendingrequests">Pending Requests</Link>
            <Link to="/studentsearch">Search via ID</Link>
        </div>
    )

    }
    </>
  )
}

export default AdminDashboard;