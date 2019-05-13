import React from 'react';

const VideoItem = ({video}) => {
    const publishDate = new Date(video.snippet.publishedAt).toLocaleDateString();

    return (
    <div className="item">
        <div className="ui small image">
            <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
        </div>
        <div className="content">
            <div className="header">{video.snippet.title}</div>
            <div className="meta">
                <span className="price">{video.snippet.channelTitle}</span>
                <span className="stay">{publishDate}</span>
            </div>
            <div className="description">
                <p>{video.snippet.description}</p>
            </div>
        </div>
    </div>
    )
}

export default VideoItem;