import About from "../pages/About";
import Login from "../pages/Login";
import PostIdPages from "../pages/PostIdPages";
import Posts from "../pages/Posts";

export const privatRoutes = [
    {path:'/about', component: About, exact: true},
    {path:'/posts', component: Posts, exact: true},
    {path:'/posts/:id', component: PostIdPages, exact: true},
]

export const publicRoutes = [
    {path:'/login', component: Login, exact: true},
]