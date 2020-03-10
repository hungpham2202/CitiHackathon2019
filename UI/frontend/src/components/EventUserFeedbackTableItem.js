import React, { Component } from "react";

export class EventUserFeedbackTableItem extends Component {

  render() {
    return (
            <tr>
                <td>{this.props.user.feedbackId}</td>
                <td>{this.props.user.userId}</td>
                <td>{this.props.user.eventId}</td>
                <td>{this.props.user.userFeedback}</td>
            </tr>    
    );
  }
}

export default EventUserFeedbackTableItem;
