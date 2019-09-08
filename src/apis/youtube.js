import axios from 'axios';


export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet', // 定義要取得的資料範圍
        maxResults:5,// 預設為 5 。 可選 0～50。
        key:KEY
    }
});