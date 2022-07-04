import About from "../pages/About";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

export const privateRoutes = [
  { path: "/about", component: About, exact: true },
  { path: "/posts", component: Posts, exact: true },
  /* Указываем ":" для динамического поста */
  /* Добавляем exact для того, что бы посты оличались друг от друга */
  { path: "/posts/:id", component: PostIdPage, exact: true },
];

export const publicRoutes = [
  { path: "/login", component: Login, exact: true },
]