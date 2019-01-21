export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
    isBrowser() && window.localStorage.getItem("gatsbyUser") ?
    JSON.parse(window.localStorage.getItem("gatsbyUser")) :
    {}

const setUser = user =>
    window.localStorage.setItem("gatsbyUser", JSON.stringify(user))

export const handleLogin = ({
    username,
    password
}) => {
    if (username === `dhruv` && password === `dhruv007`) {
         setUser({
            username: `dhruv`,
            name: `Dhruv`,
            email: `itsdhruv97@gmail.com`,
        })
        console.log("Valid");
       return true
    }
    console.log("Invalid");
    return false
}

export const isLoggedIn = () => {
    const user = getUser()

    return !!user.username
}

export const logout = callback => {
    setUser({})
    callback()
}