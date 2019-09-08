import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos , onVideoSelect }) => {

    // 列表
    const renderedList = videos.map(video => {
        // 列表選單
        return < VideoItem onVideoSelect={onVideoSelect} video={video} />;
    });

    return <div>{renderedList}</div>;

};


export default VideoList;