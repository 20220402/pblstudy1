import React, {useEffect, useState} from "react";
import "../components/Total.css";
import PostItem from '../components/Post';
import { Link } from "react-router-dom";
import Write from "./Write";

const PostList = (props) => {
    const [posts,setPosts] = useState([]);

    const dataPosts = async() => {
        try{
        let url = `http://localhost:5005/posts`
        let res = await fetch(url);
        let dataValue = await res.json();
        setPosts(dataValue)
        } catch(err){
            console.log(err);
        }
    }
    useEffect(() => {
        dataPosts();
    },[])
    return (
        <section className="post-list">
            <h2 className="post-list-title">게시글 목록</h2>
            <table className="table">
            <thead>
                <tr>
                    <th className="first-th">제목</th>
                    <th className="second-th">작성일</th>
                    <th className="third-th">작성자</th>
                    <th className="fourth-th">조회수</th>
                </tr>
            </thead>
            </table>
            <div className="product-item-container">
                {
                    posts.map((item)=><PostItem auth={props.auth} item={item} key={item.id} view={props.view} setView={props.setView}/>)
                }
            </div>
            <Link to='/write'>
                <button>글쓰기</button>
            </Link>
        </section>
    );
};

export default PostList;