import React, { Component } from "react";
import { Form } from "react-bootstrap";

export class MarkAttendanceTableItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
      isAdminChecked: false,
      isAttendanceChecked: false,
    };
  }

  toggleAttendanceChange = () => {
    this.setState({
      isAttendanceChecked: !this.state.isAttendanceChecked,
    });
  }
  
  toggleAdminChange = () => {
    this.setState({
      isAdminChecked: !this.state.isAdminChecked,
    })
  }

  render() {
    return (
            <tr>
                <td>{this.props.user.userFirstName}</td>
                <td>{this.props.user.userLastName}</td>
                <td>{this.props.user.userGender}</td>
                <td>{this.props.user.userDOB}</td>
                <td>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" checked={this.state.isAttendanceChecked} 
                    onChange={this.toggleAttendanceChange} label="" />
                </Form.Group>
                </td>
                <td>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" checked={this.state.isAdminChecked} 
                    onChange={this.toggleAdminChange} label="" />
                </Form.Group>
                </td>
            </tr>    
    );
  }
}

export default MarkAttendanceTableItem;
