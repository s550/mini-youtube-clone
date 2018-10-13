import React from 'react';
import VideoListItem from './video_list_item';
// components importing from components are in the same folder dont put the folder name.

const VidList = (props) => {
  const videoItems = props.videos.map(video => {
    return (
      <VideoListItem
      onVideoSelect={props.onVideoSelect}
      // takes the new property and passes it into videolistitem.js
      key={video.etag}
      video={video} />
    );
  });
// always use the extra { } in map just to be safe wont run without it.
  return(
    <ul className="col-md-4 list-group">
      {videoItems}

    </ul>
  );
};
// lists out the mapped items from the props argument above.
// list of data need id's for keys look for etags in this case always look for something specific to each item.
export default VidList;
