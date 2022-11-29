import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/Total.css';
import {Button} from 'antd';
import moment from 'moment';

function Write(props) {
    const navigate = useNavigate();
    const nowTime = moment().format('YYYY-MM-DD');

    const [content, setContent] = useState({
        title: '',
        content: ''
    })
    const getValue = e => {
        const {name, value} = e.target;
        setContent({
            ...content,
            [name]: value
        })
    }

    const enterClick = () => {
        fetch("http://localhost:5005/posts", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: content.title,
              body: content.content,
              time: nowTime,
              views: 0
            }),
          }).then((res) => {
            if(res.ok){
              alert("작성 완료");
              navigate('/')
            }
          });
      };

    return(
        <div className='total-write'>
            <div className='form-wrapper'>
                <input className="title-input" type='text' name = 'title' placeholder=' 제목을 입력해 주세요.' onChange={getValue} />
                <CKEditor
                    editor={ClassicEditor}
                    data="<p></p>"
                    onReady={editor => {
                    console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ event, editor, data });
                        setContent({
                          ...content,
                          content: data
                        })
                        console.log(content);
                      }}
                    onBlur={(event, editor) => {
                    console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                    console.log('Focus.', editor);
                     }}
                />
            </div>
            <Button className="submit-button" 
            type='primary'
            onClick={enterClick}
            >입력</Button>
        </div>
    )
}

export default Write;