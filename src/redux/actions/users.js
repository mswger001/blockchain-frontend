
let usr = {
    username: "gerald",
    password: "password"
}
export const setUser = (user) => {
    return {
        type: 'SET_USER',
        usr
    }
}

export const removeUser = (user) => {
    return {
        type: 'REMOVE_USER',
        user
    }
} 