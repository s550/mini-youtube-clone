import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  // putting the variable as an arguement is equal to this const video = props.video
  // const onVideoSelect = props.onVideoSelect
  // on videolist the video items component gave the actual video properties
  // the key of video so hence props.video
  return(
      <li onClick={() => onVideoSelect(video)} className="list-group-item">

        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={imageUrl} />
          </div>
          <div className="media-body">
            <div className="media-heading">{video.snippet.title}</div>
          </div>
      </div>
    </li>
    );
};

export default VideoListItem;
// passing callbacks like that is rare to go more than two levels deep.
// putting js inside the tag takes property and says when it gets clicked call the function with the video i was passed
