export class AuthHandler {
    static getAuthToken = () => {
        return localStorage.getItem("authToken")
    }
    static setAuthToken = (token) => {
        localStorage.setItem("authToken", token)
    }
    static clearToken = () => {
        localStorage.setItem("authToken", false)
        localStorage.setItem("_LOGO_","")
        localStorage.setItem("clinicInfo","")
        localStorage.setItem("TOKEN_EXPIRY","")
        AuthHandler.clearUserName()
    }
    static clearUserName = () => {
        localStorage.setItem("__USER__", false)
    }
    static setUserName = (user) => {
        localStorage.setItem("__USER__", JSON.stringify(user))
    }
    static getUser = () => {
        const userCoalescing = { username: false, password: false }
        let userFromStorage = localStorage.getItem("__USER__")
        try {
            const user = JSON.parse(userFromStorage)
            return user !== null ? user : userCoalescing
        } catch (error) {
            return userCoalescing
        }
    }
}