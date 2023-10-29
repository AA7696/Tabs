import { useEffect, useState } from 'react'
import './App.css'
import Side from './components/Side'
import MainContent from './components/MainContent'

const url = 'https://course-api.com/react-tabs-project';

function App() {
  const[loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const[style, setStyle] = useState('title');
  const[value, setValue] = useState(0);

  const change = (company) => {
    if(jobs.company === company){
      setStyle('title2');
      return;
    }
  }
  

  const fetchData = async () => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      setLoading(false);
      setJobs(data);
      
    } catch (error) {
      console.log(error);

      
    }
    
  }

  useEffect(()=>{
    fetchData();
  }, []);


  if(loading){
    return (
      <div className="loader">
        <h1>Loading.....</h1>
      </div>
    )
  }
  return (
    <div className="tab-container">
          <div className='tabs'>
      <div className="side-tab">
        {jobs.map((job, index) =>{
          return <Side key={job.id} job={job} index={index} setValue={setValue}/>;
        })}

      </div>
      <div className="main-content">
      
         <MainContent key={jobs.id} jobs={jobs} value={value}/>;
    

      </div>
    </div>

    </div>
  )
}

export default App
