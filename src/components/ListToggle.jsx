import React from 'react';

let ListToggle = (props) => {

  const handleToggle = (event) => {
    props.handleWatchedToggle();
    event.preventDefault();
  };

  return (
  <div className='listToggle'>
    <button className={`toWatchButton ${!props.state.showWatched ? "activeButton" : ""}`} onClick={handleToggle}>
        To Watch
    </button>
    <button className={`watchedButton ${props.state.showWatched ? "activeButton" : ""}`} onClick={handleToggle}>
        Watched
    </button>
  </div>
  );

};

export default ListToggle;
