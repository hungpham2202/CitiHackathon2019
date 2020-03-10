import React, { PureComponent } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Navbar, Dropdown, Nav } from 'react-bootstrap';
import CsvDownload from 'react-json-to-csv';

const buttonStyle = {
    backgroundColor: '#EAEBED',
    border: 'none',
    color: 'black',
};
export class AdminEventCard extends PureComponent {
    componentDidMount() {
        console.log(this.props.event);
    }
    renderButton() {
        const events = {
            numEvents: 3,
            totalHours: 9,
            fromDate: '2014-01-01',
            endDate: '2016-01-01',
            events: [
                {
                    eventId: 1,
                    eventName: 'Dog Shelter Cleaning',
                    startDateTime: '2015-01-01T10:00:00Z',
                    endDateTime: '2015-01-01T12:00:00Z',
                    numHours: 2,
                    numParticipants: 4,
                    organizerName: 'SPCA',
                    categoryId: 1,
                    eventStatus: 'closed',
                },
                {
                    eventId: 2,
                    eventName: 'Beach Cleaning',
                    startDateTime: '2017-01-01T10:00:00Z',
                    endDateTime: '2017-01-01T13:00:00Z',
                    numHours: 3,
                    numParticipants: 4,
                    organizerName: 'NEA',
                    categoryId: 2,
                    eventStatus: 'confirmed',
                },
            ],
        };
        return (
            <div>
                <CsvDownload
                    data={events.events}
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
                        backgroundColor: 'transparent',
                        border: 'none',
                    }}
                >
                    <Button>Download Report</Button>
                </CsvDownload>
            </div>
        );
    }

    render() {
        return (
            <div className="container text-center mt-4">
                <Navbar style={{ backgroundColor: '#EAEBED' }}>
                    <div className="container">
                        <Nav className="ml-auto">
                            <Button style={buttonStyle} href={`/admin/events/${this.props.event.id}/attendance`}>
                                Attendance
                            </Button>
                            <Button style={buttonStyle} href={`/admin/events/${this.props.event.id}/edit`}>
                                Edit
                            </Button>
                            <Button style={buttonStyle} onClick={this.props.onDeleteEvent}>
                                Delete
                            </Button>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic" style={buttonStyle}>
                                    More
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Send me an email when my events is fully subscribed</Dropdown.Item>
                                    <Dropdown.Item>
                                        Send me an email reminder for events that are one day prior for this event
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        Notifying my volunteers for event updates or cancellation
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </div>
                </Navbar>
                <Card style={{}}>
                    <Card.Img variant="top" src={'https://source.unsplash.com/random/600x300?' + this.props.event.id} />
                    <Card.Body>
                        <Card.Title>{this.props.event.name}</Card.Title>
                        <Card.Text>{'Organizer: ' + this.props.event.organizer_name}</Card.Text>
                        <Button variant="primary" href={`/user/events/${this.props.event.id}`}>
                            More about this event
                        </Button>
                        {this.renderButton()}
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default AdminEventCard;
