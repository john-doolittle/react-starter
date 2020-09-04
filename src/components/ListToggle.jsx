import React from 'react';

let ListToggle = (props) => (
  <div className='listToggle'>
    <button className={`toWatchButton ${!props.state.showWatched ? "activeButton" : ""}`}>
        To Watch
    </button>
    <button className={`watchedButton ${props.state.showWatched ? "activeButton" : ""}`}>
        Watched
    </button>
  </div>
);

export default ListToggle;
