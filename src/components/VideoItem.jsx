import React from 'react';

const VideoItem = props => {
    const { snippet } = props.video;
    const publishDate = new Date(snippet.publishedAt).toLocaleDateString();

    return (
        <div className="item video-item" onClick={() => { props.onVideoSelected(props.video) }}>
            <div className="ui small image">
                <img src={snippet.thumbnails.default.url} alt={snippet.title} />
            </div>
            <div className="content">
                <div className="header">{snippet.title}</div>
                <div className="meta">
                    <span className="price">{snippet.channelTitle}</span>
                    <span className="stay">{publishDate}</span>
                </div>
            </div>
        </div>
    )
}

export default VideoItem;