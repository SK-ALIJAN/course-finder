import React from 'react'
import { Routes,Route } from 'react-router-dom';
import StudentDashboard from '../components/Student-Dashboard/StudentDashboard';
const MainRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<StudentDashboard/>}/>
    </Routes>
  )
}

export default MainRoute;
