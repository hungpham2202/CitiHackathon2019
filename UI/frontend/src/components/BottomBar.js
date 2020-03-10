import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

export class BottomBar extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "#333333" }}>
                <div className="container pb-4">
                    <div className="p-4" style={{ display: "flex", justifyContent: "flex-end" }}>
                        <div style={{ flex: 1 }}>
                            <img src={require('../assets/citi-logo.png')} style={{ height: "5vh" }} />
                        </div>
                        <div style={{ flex: 1, textAlign: "end" }}>
                            <FontAwesomeIcon icon={faFacebookF} style={{ color: "white" }} className="m-2" />
                            <FontAwesomeIcon icon={faTwitter} style={{ color: "white" }} className="m-2" />
                            <FontAwesomeIcon icon={faYoutube} style={{ color: "white" }} className="m-2" />
                        </div>

                    </div>
                    <div style={{ borderTop: "1px solid white", borderBottom: "1px solid white", display: "flex", justifyContent: "flex-start" }} className="pt-2 pl-2 pr-2">
                        <p style={{ color: "white", fontWeight: "100", paddingRight: 10 }}>(c) 2019 Citigroup Inc.</p>
                        <p style={{ color: "white", fontWeight: "100", paddingRight: 10 }}>Terms and Conditions</p>
                        <p style={{ color: "white", fontWeight: "100", paddingRight: 10 }}>Privacy</p>
                        <p style={{ color: "white", fontWeight: "100" }}>Accessibility</p>
                    </div>
                </div>
            </div >
        )
    }
}

export default BottomBar
