import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Form1 from './Form1';
import Form2 from './Form2';



const TabbedForms = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div className='mb-2'>
      <Tabs value={activeTab} onChange={handleChange}>
        <Tab label="Budget" />
        <Tab label="Task" />
      </Tabs>
      {activeTab === 0 && <Form1/>}
      {activeTab === 1 && <Form2/>}
    </div>
  );
};

export default TabbedForms;
