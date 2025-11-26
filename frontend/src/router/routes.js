import Home from '@/pages/home.vue'
import LoginPage from '@/pages/auth/login.vue'
import AuthPage from '@/pages/auth/auth-page.vue'
import RegisterPage from '@/pages/auth/register.vue'

const routes = [
    {
        path: '/', 
        component: Home,
        name: 'home',
        meta: { requiresAuth: true }
    },
    { 
        path: '/auth-page', 
        component: AuthPage,
        name: 'auth-page',
        meta: { requiresAuth: false }
    }
]

export default routes