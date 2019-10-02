import Home from '@/components/Home'
import Home2 from '@/components/Home2'
import PageNotFound from '@/components/PageNotFound'


const routerList = {
    mode: 'history',
    routes: [
    {
        path:'/',
        name: 'home',
        component: Home,
        alias: '/home',        
    },
    
    {
        path:'/home2',
        name: 'home2',
        component: Home2
    },
    { path: "*", component: PageNotFound }
    ]
}

export default routerList;
