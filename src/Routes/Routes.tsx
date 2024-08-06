import { createBrowserRouter } from "react-router-dom";

import { App } from "../App";

import { Home } from "../Pages/Home";
import { Post } from "../Pages/Post";

export const Router = createBrowserRouter([{
    path: '/',
    element: <App />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/post/:postId',
            element: <Post />
        }
    ]
}]);