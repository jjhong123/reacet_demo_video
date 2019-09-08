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

        this.setState({
            videos: response.data.items,
            selectedVideo:response.data.items[0]
        });

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
                <div className="ui grid">
                    <div className="ui row">
                        <div className="sixteen wide mobile eleven wide computer column">
                            <VideoDetail
                                video={this.state.selectedVideo}
                            />
                        </div>
                        <div className="sixteen wide mobile five wide computer column">
                            <VideoList
                                onVideoSelect={this.onVideoSelect} // 選擇視頻觸發
                                videos={this.state.videos} // 傳遞Youtube api .
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default App;
