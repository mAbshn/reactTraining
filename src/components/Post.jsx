import React from 'react';
import { useHistory } from 'react-router-dom';
import MyButton from './UI/button/MyButton';

const Post = (props) => {

    const router = useHistory();

    return (    
        <div className="post">
            <div className="post__text">
                <h4>{props.post.id}. {props.post.title}</h4>
                <p>{props.post.body}</p>
            </div>
            <div className="post__btn">
                <MyButton onClick={() => router.push(`/posts/${props.post.id}`)}>Открыть</MyButton>
                <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
            </div>
        </div>
    );
};

export default Post;