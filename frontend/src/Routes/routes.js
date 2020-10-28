import Login from '../Auth/Login'
import Register from '../Auth/Register'
import Main from '../Main/Main'
import NotFound from '../partials/NotFound'
export default [
    {
        path: '/auth/login',
        component : Login
    },
    {
        path: '/auth/register',
        component : Register
    },
    {
        path : '/dashboard',
        component : Main
    },
    {
        component : NotFound
    }
]