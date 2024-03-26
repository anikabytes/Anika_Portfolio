import MyProfile from "./screens/Profile";
import Navbar from "./components/Navbar";
import Skills from "./screens/Skills";
import Experiences from "./screens/Experiences";
import Education from "./screens/Education";
import Achievements from "./screens/Achievements";
import Projects from "./screens/Projects";


import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

const App = () => {
  return (

    <div>

      <div className="bg-slate-900">
        <Navbar />
        <MyProfile />
      
      </div>

       <div>

      <BrowserRouter>
        <Routes>

          
          <Route path='/skills' element={<Skills />}/>
          <Route path='/experiences' element={<Experiences />}/>
          <Route path='/education' element={<Education />}/>
          <Route path='/achievements' element={<Achievements />}/>
          <Route path='/projects' element={<Projects />}/>
          

        </Routes>
      </BrowserRouter>
      
      </div> 
      
    </div>
    

  )
}

export default App
