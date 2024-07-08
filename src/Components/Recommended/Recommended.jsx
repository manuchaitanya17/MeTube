import React, { useEffect, useState } from 'react'
import './Recommended.css'
import { API_KEY, value_converter } from '../../data'
import { Link } from 'react-router-dom'

const Recommended = ({ categoryId }) => {

    const [apiData, setApiData] = useState([]);
    const relatedVideo_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=46&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;

    useEffect(() => {
        fetch(relatedVideo_API).then(res => res.json()).then(data => setApiData(data.items))
    }, [])

    return (
        <div className="recommended">
            {apiData.map((item,index) => {
                return (
                    <div key={index} className="side-video-list">
                        <Link to={`/video/${item.snippet.categoryId}/${item.id}`} onClick={()=>window.scrollTo(0,0)} className="small-thumbnail">
                            <img src={item.snippet.thumbnails.medium.url} alt="" /></Link>
                        <div className="vid-info">
                            <h4>{item.snippet.title}</h4>
                            <p>{item.snippet.channelTitle}</p>
                            <p className='recommended-views'>{value_converter(item.statistics.viewCount)} Views</p>
                        </div>
                    </div>)
        })}
        </div>
    )
}

export default Recommended
