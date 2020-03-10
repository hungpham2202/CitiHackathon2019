import React, { Component } from "react";
import { Form } from "react-bootstrap";

export class EventTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isChecked: this.props.event.emailSubscriptionStatus,
    };
  }

  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  }

  render() {
    return (
            <tr>
                <td>{this.props.event.eventName}</td>
                <td>{this.props.event.organizerName}</td>
                <td>{this.props.event.startDateTime}</td>
                <td>{this.props.event.endDateTime}</td>
                <td>{this.props.event.numHours}</td>
                <td>{this.props.event.emailSubscriptionStatus ? 
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" checked={this.state.isChecked} 
                    onChange={this.toggleChange} label="Check me out" />
                </Form.Group> : 
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" checked={this.state.isChecked} 
                    onChange={this.toggleChange} label="Check me out" />
                </Form.Group>
                }</td>
            </tr>    
    );
  }
}

export default EventTable;
