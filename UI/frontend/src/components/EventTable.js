import React, { Component } from "react";
import { Button, Card, Table } from "react-bootstrap";

export class EventTable extends Component {
  render() {
    return (
            <tr>
              <td>{this.props.event.eventName}</td>
              <td>{this.props.event.organizerName}</td>
              <td>{this.props.event.startDateTime}</td>
              <td>{this.props.event.endDateTime}</td>
              <td>{this.props.event.numHours}</td>
              <td><a href={"/user/events/feedback/" + this.props.event.eventId}>Link</a></td>
            </tr>    
    );
  }
}

export default EventTable;
