import React, { Component } from 'react'

export class NotFound extends Component {
    render() {
        return (
            <div className="login-bg" style={{ height: "80vh" }}>
                <div className="container" style={{ display: "center", justifyContent: "center", alignItems: "center" }}>
                    <h1 style={{ verticalAlign: "center", textAlign: "center", color: "white", paddingTop: "300px" }}>Not Found</h1>
                </div>
            </div>
        )
    }
}

export default NotFound
