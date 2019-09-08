import React from 'react';
import VideoItem from './VideoItem';
import './VideoList.css';

const VideoList = ({ videos, onVideoSelect }) => {

    // 列表
    const renderedList = videos.map(video => {
        // 列表選單
        return (
            <VideoItem
                key={video.id.videoId}
                onVideoSelect={onVideoSelect}
                video={video}
            />
        );
    });

    return <div className="playlist ui relaxed divided list">{renderedList}</div>;

};


export default VideoList;