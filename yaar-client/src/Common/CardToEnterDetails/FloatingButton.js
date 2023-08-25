import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Details from './Details';

const FloatingButton = () => {
  const [showCard, setShowCard] = useState(false);

  return (
    <div className="absolute mt-[70vh] ml-[55vw] md:mt-[67vh] md:ml-[43vw] z-[10000]">
    <Fab color="secondary" onClick={()=>setShowCard(!showCard)}>
      <AddIcon />
    </Fab>
    {showCard && <Details onClose={()=>setShowCard(!showCard)} />}
    </div>
  );
};

export default FloatingButton;
