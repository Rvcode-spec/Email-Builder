import './App.css';
import Header from './component/Header'
import Main from './component/Main'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import TempBox from './templates/TempBox';
import Temp from './templates/Temp';
import apiClient from './services/apiClient';
import { useState,useEffect } from 'react';


// Component to fetch data from the backend
const FetchDataComponent = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState(null);

  const getDate = async () => {
    try {
      const resp = await apiClient.get("/getData");
      setData(resp.data);
    } catch (error) {
      setError("Failed to fetch data");
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getDate();
  }, []);

  return (
    <div>
      {error ? <p>{error}</p> : <p>{data.message || "Loading..."}</p>}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Temp" element={<Temp />} />
          <Route path="/TempBox" element={<TempBox />} />
          {/* <Route path="/Edit" element={<Edit />} /> */}
        </Routes>
      </Router>
      <FetchDataComponent />
    </div>
  );
}

export default App;
