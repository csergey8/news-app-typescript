import React from 'react'

class Account extends React.Component {


    public render() {
        return (
        <div>Account: { localStorage.getItem('authUser') }</div>
        )
    }
}