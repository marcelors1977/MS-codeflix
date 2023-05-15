import { RouteProps } from "react-router-dom"
import VideosByCategory from "../pages/VideosByCategory"
import Home from "../pages/Home"



export interface MyRouteProps extends RouteProps{
    name : string
    label: string
}

const routes: MyRouteProps[] = [
    {
        name: 'home',
        label: 'Início',
        path: '/',
        component: Home,
        exact: true
    },
    {
        name: 'video.by-category',
        label: 'Vídeos por categoria',
        path: '/categories/:id',
        component: VideosByCategory,
        exact: true
    },
]

export default routes