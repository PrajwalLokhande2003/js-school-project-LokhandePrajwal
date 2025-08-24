import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Timeline from './components/Timeline';
import EventData from './components/EventData';

function App() {


  const [data, setData] = useState<EventData[]>();


  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const response = await fetch('./data.json');
      if (response.ok) {
        const result = await response.json();
        setData(result);
      }
    };
    fetchData();

  }, []);
  return (
    <div className="App bg-body-secondary">
      <Header />
      <Timeline data={data} currIndex={0} />
    </div>
  );
}

export default App;