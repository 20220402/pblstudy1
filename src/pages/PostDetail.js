import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import '../components/Total.css';
import ReactHtmlParser from 'html-react-parser';


const PostDetail = () => {
    let {id} = useParams();
    const [post,setPost] = useState(null)
    const navigate = useNavigate();

    const getDetailData = async() => {
        let url = `http://localhost:5005/posts/${id}`;
        let res = await fetch(url);
        let data = await res.json();
        console.log(data)
        setPost(data)
    }

    const deleteClick = () => {
        fetch(`http://localhost:5005/posts/${id}`, {
          method: "DELETE",
        }).then(() => {
          navigate('/')	
          alert("삭제완료")
        });
      };

    useEffect(()=>{
        getDetailData();
    },[])
    return(
        <div>
            <div className="detail-post">
                    <h2 className="in">{post?post.title:null}</h2>
                    <p className="in">{post?ReactHtmlParser(post.body):null}</p>
            </div>
            <div className="detail-btn">
            <button className="detail-btn1">수정하기</button>
            <button className="detail-btn2" onClick={deleteClick}>삭제하기</button>
            </div>
        </div>
        
    );
};

export default PostDetail;