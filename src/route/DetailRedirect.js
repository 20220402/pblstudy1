import React from "react";
import PostDetail from '../pages/PostDetail';
import { Navigate } from 'react-router-dom';

const DetailRedirect = ({auth}) => {
    return auth ? <PostDetail /> : <Navigate to="/login" />;
};

export default DetailRedirect;