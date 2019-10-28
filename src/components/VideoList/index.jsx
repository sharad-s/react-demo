import React from 'react';

// CSS
import "./VideoItem.css"

// List Component
const VideoList = ({ videos, onVideoSelect }) => {

  const renderedList = videos.map(video => (
    <VideoItem
      video={video}
      onVideoSelect={onVideoSelect}
      key={video.id.VideoId}
    />
  ));

  return (
    <div className="ui list">
      {renderedList}
    </div>
  );
};

// Video Item SubComponent
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={()=> onVideoSelect(video)} className="video-item item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};


export default VideoList;
