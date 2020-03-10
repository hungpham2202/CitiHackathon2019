import React, { Component } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap';
import CitibankReportingHandler from 'citibank_reporting'
import { applyAuthenticationHeaders } from '../config/config';
import axios from 'axios'
import CsvDownload from "react-json-to-csv";
export class DownloadReportCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null,
            org: "",
            data: {},
            errors: {
                startDate: "",
                endDate: ""
            }
        }
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state)
    }

    async handleSubmit() {
        // let reportAPI = applyAuthenticationHeaders(CitibankReportingHandler.DefaultApi);
        // // let opts = { fromDate: this.state.startDate || "2014-01-01", toDate: this.state.endDate || "20016-01-01" }
        // let fromDate = this.state.startDate || "2014-01-01"
        // let toDate = this.state.endDate || "2016-01-01"
        // let responseObject = await new Promise((resolve, reject) => reportAPI.getHistoricalApi({ fromDate, toDate }, (error, data, response) => {
        //     if (error) {
        //         reject(error)
        //         alert("Could not fetch data")
        //     } else {
        //         resolve(data)
        //     }
        // }))
        // console.log(responseObject)
        // http://pythonflask.ap-southeast-1.elasticbeanstalk.com:5000/reports/historical?fromDate=2014-01-01&toDate=2016-01-01
        let url = "http://pythonflask.ap-southeast-1.elasticbeanstalk.com:5000/reports/historical"
        let fromDate = this.state.startDate || "2014-01-01"
        let toDate = this.state.endDate || "2016-01-01"
        url = url + "?fromDate=" + fromDate + "&toDate=" + toDate
        axios.get(url)
            .then((res) => {
                this.setState({ data: res.data.events })
                alert(JSON.stringify(res.data.events))


            }).catch(err => {
                alert(err)
            })

    }

    async handleSubmitEvent() {
        let url = "http://pythonflask.ap-southeast-1.elasticbeanstalk.com:5000/reports/organization"
        let org = this.state.org || "SPCA"
        url = url + "?organizerName=" + org
        axios.get(url)
            .then((res) => {
                this.setState({ data: res.data.events })
                console.log(res.data)
                alert(JSON.stringify(res.data))
            }).catch(err => {
                alert(err)
            })
    }

    rendercsvbutton() {
        if (this.state.data) {
            return (
                <CsvDownload
                    data={this.state.data}
                    filename="report.csv"
                    className="mt-2"
                    style={{
                        //pass other props, like styles
                        // backgroundColor: "#c123de",
                        // borderRadius: "6px",
                        // border: "1px solid #a511c0",
                        // display: "inline-block",
                        // cursor: "pointer",
                        // color: "#ffffff",
                        // fontSize: "15px",
                        // fontWeight: "bold",
                        // padding: "6px 24px",
                        // textDecoration: "none",
                        // textShadow: "0px 1px 0px #9b14b3"
                        backgroundColor: "transparent",
                        border: "none"
                    }}
                >
                    <Button>Report Ready!</Button>
                </CsvDownload>
            )
        }
    }

    render() {
        return (
            <div>
                <div className="container mt-4 mb-4 p-4" style={{ backgroundColor: "white", boxShadow: "0px 3px 5px #888" }}>
                    <h4>Download Report by date</h4>
                    <Row>
                        <Col md={5}>
                            <Form.Group style={{ flex: 1 }} className="pr-2 pl-2">
                                <Form.Label>Start Date</Form.Label>
                                <Form.Control
                                    name="startDate"
                                    type="date"
                                    placeholder="Enter email"
                                    defaultValue={Date(90, 1)}
                                    isInvalid={this.state.errors.startDate}
                                    onChange={this.handleChange.bind(this)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {this.state.errors.startDate}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={5}>
                            <Form.Group style={{ flex: 1 }} className="pr-2 pl-2">
                                <Form.Label>End Date</Form.Label>
                                <Form.Control
                                    name="endDate"
                                    type="date"
                                    placeholder="Enter email"
                                    defaultValue={Date.now()}
                                    isInvalid={this.state.errors.endDate}
                                    onChange={this.handleChange.bind(this)}
                                />

                                <Form.Control.Feedback type="invalid">
                                    {this.state.errors.endDate}
                                </Form.Control.Feedback>
                            </Form.Group>

                        </Col>

                        <Col md={2} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Button
                                onClick={this.handleSubmit.bind(this)}
                            >Download Report</Button>
                        </Col>
                    </Row>
                </div>
                <div className="container mt-4 mb-4 p-4" style={{ backgroundColor: "white", boxShadow: "0px 3px 5px #888" }}>
                    <h4>Download Report by Organization</h4>
                    <Row>
                        <Col md={10}>
                            <Form.Group style={{ flex: 1 }} className="pr-2 pl-2">
                                <Form.Label>Organization Name</Form.Label>
                                <Form.Control
                                    name="orgName"
                                    type="name"
                                    placeholder="Enter organization name"
                                    isInvalid={this.state.errors.eventName}
                                    onChange={this.handleChange.bind(this)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {this.state.errors.eventName}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        <Col md={2} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Button
                                onClick={this.handleSubmitEvent.bind(this)}
                            >Download Report</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default DownloadReportCard
