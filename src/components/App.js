import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
class App extends React.Component {

    state = { videos: [], selectedVideo: null };

    // 搜尋
    onTermSubmit = async term => {

        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({ videos: response.data.items })

    };

    // 選擇視頻
    onVideoSelect = video => {
        console.log('From the App!', video);
        this.setState({ selectedVideo: video });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar
                    onFormSubmit={this.onTermSubmit} // 搜尋觸發
                />
                <VideoDetail
                    video={this.state.selectedVideo}
                />
                <VideoList
                    onVideoSelect={this.onVideoSelect} // 選擇視頻觸發
                    videos={this.state.videos} // 傳遞Youtube api .
                />
            </div>
        );
    }
}


export default App;
