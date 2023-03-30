let usr = {
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    password: "123456",
    mobile: "1234567890",
    role: "user",
    profilePicture: "",
    tokens: [],
    createdAt: 1585739094181,
    isAuthenticated: true
};

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