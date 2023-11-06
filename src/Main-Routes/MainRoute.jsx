import React from 'react'
import { Routes,Route } from 'react-router-dom';
import StudentDashboard from '../components/Student-Dashboard/StudentDashboard';
import CourseDetails from '../components/CourseDetails';
const MainRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<StudentDashboard/>}/>
      <Route path='/details' element={<CourseDetails/>}/>
    </Routes>
  )
}

export default MainRoute;
