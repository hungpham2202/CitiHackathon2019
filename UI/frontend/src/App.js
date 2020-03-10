import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import UserEvent from "./pages/user/UserEvent";
import UserEventDetails from "./pages/user/UserEventDetails";
import AdminEventDetails from "./pages/admin/AdminEventDetails";
import RegisteredEvents from "./pages/user/RegisteredEvents";
import UserProfile from "./pages/user/UserProfile";
import UserEdit from "./pages/user/UserEdit";
import AdminEvents from "./pages/admin/AdminEvents";
import AdminReport from "./pages/admin/AdminReport";
import CustomNavbar from "./components/CustomNavbar";
import BottomBar from "./components/BottomBar";
import ForgotPassword from "./pages/ForgotPassword";
import NotFound from "./pages/NotFound";
import LandingPage from "./pages/LandingPage";
import AddNewEvent from "./components/AddNewEvent";
import AdminProfile from "./pages/admin/AdminProfile";
import UserEventFeedback from "./pages/user/UserEventFeedback";
import EditPrevEvent from "./components/EditPrevEvent";
import MarkAttendance from "./components/MarkAttendance";
import Dashboard from "./pages/dashboard/Dashboard";

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <CustomNavbar />
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/login" exact component={Login} />
            <Route path="/passwordreset" exact component={ForgotPassword} />
            <ProtectedRoute path="/user/events" exact component={UserEvent} />
            <ProtectedRoute
              path="/user/profile"
              exact
              component={UserProfile}
            />
            <ProtectedRoute path="/user/edit" exact component={UserEdit} />
            <ProtectedRoute
              path="/admin/profile"
              exact
              component={AdminProfile}
            />
            <ProtectedRoute
              path="/admin/events"
              exact
              component={AdminEvents}
            />
            <ProtectedRoute
              path="/admin/report"
              exact
              component={AdminReport}
            />
            <ProtectedRoute
              path="/user/events/:eventId"
              exact
              component={UserEventDetails}
            />
            <ProtectedRoute
              path="/user/events/feedback/:eventId"
              exact
              component={UserEventFeedback}
            />
            <ProtectedRoute
              path="/admin/events/add"
              exact
              component={AddNewEvent}
            />
            <ProtectedRoute
              path="/user/my_events"
              exact
              component={RegisteredEvents}
            />
            <ProtectedRoute
              path="/admin/events/:eventId"
              exact
              component={AdminEventDetails}
            />
            <ProtectedRoute
              path="/admin/events/:eventID/edit"
              exact
              component={EditPrevEvent}
            />
            <ProtectedRoute
              path="/admin/events/:eventID/attendance"
              exact
              component={MarkAttendance}
            />
            {/* <ProtectedRoute
              path="/admin/dashboard"
              exact
              component={AdminDashboard}
            /> */}
            <Route path="/data/dashboard" exact component={Dashboard} />
            <Route component={NotFound} />
          </Switch>
        </Router>
        <BottomBar />
      </div>
    );
  }
}

export default App;
