export const useAuthState = () => {
    
    const setUser = (user) => {
        localStorage.setItem('user', JSON.stringify(user))
    }

    const getUser = () => {
        const response = JSON.parse(localStorage.getItem('user'))
        console.log('response: ', response.user.daily_exercise);
        return response?.user || {}
    }

    const isAuthenticated = () => {
        const response = JSON.parse(localStorage.getItem('user'))
        return response?.success ?? false
    }

    return {
        setUser,
        getUser,
        isAuthenticated,
    }
}