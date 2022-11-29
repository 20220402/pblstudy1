import React from "react";
import {useNavigate} from "react-router-dom";
import "./Total.css";

const PostItem = (props) => {
    const navigate = useNavigate();

    const enterClick = (id) => {
        fetch(`http://localhost:5005/posts/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: props.item.title,
              body: props.item.body,
              time: props.item.time,
              views: props.item.views+1
            }),
          }).then((res) => {
            if(res.ok){
                props.auth? navigate(`/posts/${id}`) : navigate('/login');
            }
          });
      };

    return(
        <table className="table">
            <tbody>
                <tr>
                <td className="first-td" onClick={()=>enterClick(props.item.id)}>{props.item.title}</td>
                <td className="second-td">{props.item.time}</td>
                <td className="third-td">{props.item.writer}</td>
                <td className="fourth-td">{props.item.views}</td>
                </tr>
            </tbody>
        </table>
    );
};

export default PostItem;

