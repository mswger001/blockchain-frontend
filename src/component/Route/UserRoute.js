import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

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

const UserRoute = (props) => {

    const { component: Component, ...rest } = props
    // console.log('pro', props)
    const { user } = usr
    return (

        <Route {...rest} render={(props) => (

            !user.isAuthenticated ?
                <><Redirect to='/user/login' /></>
                :

                (user.isAuthenticated && user.user.role === 'user')
                    ? <Component {...props} />
                    :
                    <>
                        <Redirect to='/notfound' />
                    </>

        )} />

    )
}
const mapStateToProps = (state) => {
    return {
        user: state.users
    }
}


export default connect(mapStateToProps)(UserRoute)
