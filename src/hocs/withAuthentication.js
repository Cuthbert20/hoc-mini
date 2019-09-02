import React from 'react'

//hocs are just functions, it is not an acutal component
//WrappedComponent is a user defined component. I am defining it, cause I am the user
function withAuthentication(WrappedComponent) {
    return function(props){
        if(props.isAuthenticated) return <WrappedComponent {...props} />
        return null;
    }
}

export default withAuthentication