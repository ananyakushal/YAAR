import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Details from './Details';

const FloatingButton = () => {
  const [showCard, setShowCard] = useState(false);

  return (
    <div className="fixed m-7 bottom-0 right-4 z-[10000]">
    <Fab color="secondary" onClick={()=>setShowCard(!showCard)}>
      <AddIcon />
    </Fab>
    {showCard && <Details onClose={()=>setShowCard(!showCard)} />}
    </div>
  );
};

export default FloatingButton;
