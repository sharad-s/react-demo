import React from 'react';

// Components
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    
  const renderedList = videos.map(video => (
    <VideoItem video={video} onVideoSelect={onVideoSelect} />
  ));

  return (
    <div role="list" className="ui list">
      {renderedList}
    </div>
  );
};

export default VideoList;
