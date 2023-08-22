import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import Details from './Details';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const FloatingButton = () => {
  const classes = useStyles();
  const [showCard, setShowCard] = useState(false);
  const handleCardOpen = () => {
    setShowCard(true);
  };

  const handleCardClose = () => {
    setShowCard(false);
  };

  return (
    <>
    <Fab className={classes.fab} color="secondary" onClick={handleCardOpen}>
      <AddIcon />
    </Fab>
    {showCard && <Details onClose={handleCardClose} />}
    </>
  );
};

export default FloatingButton;
