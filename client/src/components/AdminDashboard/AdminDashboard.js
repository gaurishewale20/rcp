import React,{useState} from 'react';
import { Link } from 'react-router-dom';

import './admindashboard.css';

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
              <div className='options'>
              <button type="button" className="info-btn"><Link to="/pastrequests">Past Requests</Link></button>
              <button type="button" className="info-btn"><Link to="/pendingrequests">Pending Requests</Link></button>
              <button type="button" className="info-btn"><Link to="/studentsearch">Search via ID</Link></button>
              </div>
        </div>
    )

    }
    </>
  )
}

export default AdminDashboard;