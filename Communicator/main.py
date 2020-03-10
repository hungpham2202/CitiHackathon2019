from flask import Flask, render_template,request
import json
from em import send_email
from flask_restplus import Resource, Api, reqparse
import datetime
from flask_cors import CORS
from sqlalchemy import create_engine
from sqlalchemy.sql import text
import requests

#               __    This is Bob the Dino. Good fortune and
#              / _)   success will come to you but only if you
#       .-^^^-/ /     say "Thanks, Bob the Dino"
#   __/       /
#   <__.|_|-|_|


#Flask
app = Flask(__name__)
CORS(app)
engine = create_engine('mysql+pymysql://admin:citihack191@db-team1.cif14ai3iiw6.ap-southeast-1.rds.amazonaws.com:3306/citihack_communicator')
accountsEndpoint = "http://authenticator-team1.xmpknwihw4.ap-southeast-1.elasticbeanstalk.com/"
eventsEndpoint = "http://pythonflask.ap-southeast-1.elasticbeanstalk.com:4449"

#verifier
def check(req_data):
    if type(req_data['Name'])==(not str or ""):
        raise TypeError("Name must be in letters")
    if type(req_data['Event'])==(not str or ""):
        raise TypeError("Event Name must be a string")
    if req_data['Date']=="":
        raise TypeError('Empty Date')


#get JWT
def getJWT(authorization):
    # authorization = r.headers.get('authorization')
    return authorization[7:] # slice out the first 8 characters 'Bearer'


#get event info
def get_event(eventId):
    response = requests.get(eventsEndpoint + "/events?eventId={}".format(eventId))
    if response.status_code != 200:
        return {}, False
    json_data = json.loads(response.text)
    return json_data, True


#get user info
def get_user(userId):
    response = requests.get(accountsEndpoint + "/accounts?eventId={}".format(userId))
    print(accountsEndpoint + "/accounts?eventId={}".format(str(userId)))
    print(response)
    if response.status_code != 200:
        return {}, False
    json_data = json.loads(response.text)
    return json_data, True


#authorize user
def authorize_user(jwt):
    response = requests.post(url = accountsEndpoint + "/accounts?eventId={}".format(userId), headers = {"Authorization: Bearer {}".format(jwt)})
    if response.status_code != 200:
        return {}, False
    return response, True


@app.route('/', methods = ["GET"])
def root():
    return "status OK", 200, {"Content-Type":"text/plain"}


@app.route('/text')
def text():
    return render_template('index0.html', name = "sda", text1 = "Text1", text2="")


#Call for action
@app.route('/call-for-action', methods = ["POST"])
def CallForAction():
    try:
        eventId = request.args.get("eventId")
        userIds = [1,2,3,4]
        event, success = get_event(eventId)
        for userId in userIds:
            user, success = get_user(userId)
        Name = user["firstName"]
        email = user["emailAddress"]
        event_name = event['eventName']
        event_date = event['startDateTime']
        text1="Your event {} scheduled for {} has been fully suscribed!"
        text2 = ""
        send_email(email, "Event Fully Suscribed!", render_template('index.html', name = Name, text1 = text1.format(event_name,event_date), text2=text2))
        return "Completed", 200
    except Exception as e:
        print(e)
        return str(e), 500

#Fully subscribed
@app.route('/fullsub', methods = ["POST"])
def FullSub():
    try:
        userId = request.args.get("userId")
        eventId = request.args.get("eventId")
        email = request.args.get("email")
        # print(userId, eventId)
        print(userId)
        user, success = get_user(userId)
        print("got here" + str(userId))
        event, success = get_event(eventId)
        user, success = {"firstName":"janny"}, True
        event, success = {"eventName":"pick up dogs","startDateTime":"2019-10-10"}, True
        Name = user["firstName"]
        event_name = event['eventName']
        event_date = event['startDateTime']
        text1="Your event {} scheduled for {} has been fully suscribed!"
        text2 = ""
        if email != "":
            email = user["emailAddress"]
        send_email(email, "Event Fully Suscribed!", render_template('index.html', name = Name, text1 = text1.format(event_name,event_date), text2=text2))
        return "Completed", 200
    except Exception as e:
        return str(e), 500


#Cancelled
@app.route('/event_cancelled', methods = ["POST"])
def EventCancelled():
    try:
        eventId = request.args.get("eventId")
        event, success = get_event(eventId)
        event_name = event['eventName']
        event_date = event['startDateTime'][0:10]
        response = requests.get(eventsEndpoint+"/register?eventId="+eventId)
        json_data = json.loads(response.text)
        participants = []
        for i in json_data:
            participants.append(i["participant_id"])

        for i in participants:
            user,succes = get_user(i)
            if success:
                Name = user['firstName']
                email = user["emailAddress"]

                text1="Your event {} scheduled for {} has been cancelled!".format(event_name,event_date)
                text2 = ""
                template = render_template('index.html', name = Name, text1 = text1)
                send_email(email, "Event Fully Suscribed!", )
        return "Completed", 200
    except Exception as e:
        return str(e), 500


#Reminder
@app.route('/reminder', methods = ['POST'])
def reminder():
    try:
        results = engine.execute("SELECT eventId, userId FROM reminders WHERE send_date < CURDATE() + INTERVAL 1 DAY")
        data = []
        # for result in results:
        #     userId = result[0]
        #     eventId = result[1]
        #     event, success = get_event(eventId)
        #     user, success = get_user(userId)
        #     data.append({"user": user, "event": event})

        data = [{"user": {"firstName":"janny", "emailAddress":"bokwoon.c@gmail.com"}, "event": {"eventName":"pick up dogs","startDateTime":"2019-10-10"}}]

        for i in data:
            email = i["user"]["emailAddress"]
            Name = i["user"]["firstName"]
            event_name = i["event"]["eventName"]
            # email, Name, event_name
            text1="We just want to remind you that your event {} is happening tomorrow!.".format(event_name)
            text2="Thank you, and we hope to see you!"
            send_email(email, "Event Fully Suscribed!", render_template('index.html',name = Name, text1=text1.format(event_name), text2=text2))
        return "Completed", 200
    except Exception as e:
        print(e)
        return str(e), 500


def removeUsers(db, eventId, userId):
    results = engine.execute(text("DELETE FROM reminders WHERE userId = :userId"), userId = userId)

def addUsers(db, eventId, userId):
    results = engine.execute(text("INSERT INTO reminders () VALUES ()"))

def changeDate(db, eventId, userId):
    results = engine.execute(text(""))

#Update
@app.route('/update', methods = ['POST'])
def update():
    try:
        req_data = request.get_json()
        results = engine.execute(text("SELECT userId FROM reminders WHERE eventId = :eventId"), eventId = req_data['eventId'])
        #Whether they are updating date or the users
        type = req_data['type']
        eventId = req_data['eventId']
        #type can be users_rm, users_add, date_change
        if type == 'users_rm':
            userId = req_data['userId']
            removeUsers(db,eventId,userId)
        elif type == 'users_add':
            userId = req_data['userId']
            addUsers(db,eventId,userId)
        elif type == 'date_change':
            newDate = req_data['newDate']
            details = getEvent(db,eventId, newDate)
            changeDate(db,eventId, newDate)

            users = details["users"]
            event_name = details["event_name"]
            date1 = details["date"]
            new_date = newDate
            message1 = "{} on {} has been rescheduled to {}. We apologize for the inconvinience caused!".format(event_name,date1, new_date)
            message2 = ""

            userIds = engine.execute(text("SELECT userId FROM reminders WHERE eventId = :eventId"), eventId = req_data['eventId'])
            for userId in userIds:
                User = get_user(userId)
                User_Name = User["firstName"]
                User_email = User["emailAddress"]

                template = render_template('index.html',name = User_Name, text1=message1, text2=message1)
                send_email(User_email,"Date Of Event Changed!", template)
        return "Completed", 200
    except Exception as e:
        print(e)
        return str(e), 500

@app.route("/events/fullSubscription", methods = ["GET"])
def fullSubscriptionGet():
    try:
        userId = request.args['userId']
        eventId = request.args['eventId']
        if userId == "" or eventId == "":
            return "false", 400
        event_name = event
        results = engine.execute(text("SELECT 1 FROM full_subscription WHERE eventId = :eventId AND userId = :userId"), eventId = eventId, userId = userId)
        if results.rowcount <= 0:
            return str(e), 200
        return "true", 200
    except Exception as e:
        print(e)
        return str(e), 500

@app.route("/events/fullSubscription", methods = ["POST"])
def fullSubscriptionPost():
    try:
        userId = request.args['userId']
        eventId = request.args['eventId']
        if userId == "" or eventId == "":
            return str(e), 400
        results = engine.execute(text("INSERT INTO full_subscription (userId, eventId) VALUES (:userId, :eventId)"), eventId = eventId, userId = userId)
        if results.rowcount <= 0:
            return str(e), 200
        return "true", 200
    except Exception as e:
        print(e)
        return str(e), 500

@app.route("/events/fullSubscription", methods = ["DELETE"])
def fullSubscriptionDelete():
    try:
        userId = request.args['userId']
        eventId = request.args['eventId']
        if userId == "" or eventId == "":
            return str(e), 400
        results = engine.execute(text("DELETE FROM full_subscription (userId, eventId) VALUES (:userId, :eventId)"), eventId = eventId, userId = userId)
        if results.rowcount <= 0:
            return str(e), 200
        return "true", 200
    except Exception as e:
        print(e)
        return str(e), 500

@app.route("/events/upcomingEventsSubscription", methods = ["GET"])
def upcomingEventsSubscriptionGet():
    try:
        userId = request.args['userId']
        eventId = request.args['eventId']
        if userId == "" or eventId == "":
            return str(e), 400
        results = engine.execute(text("SELECT 1 FROM reminders WHERE eventId = :eventId AND userId = :userId"), eventId = eventId, userId = userId)
        if results.rowcount <= 0:
            return str(e), 200
        return "true", 200
    except Exception as e:
        print(e)
        return str(e), 500

@app.route("/events/upcomingEventsSubscription", methods = ["POST"])
def upcomingEventsSubscriptionPost():
    try:
        userId = request.args['userId']
        eventId = request.args['eventId']
        if userId == "" or eventId == "":
            return str(e), 400
        event, success = get_event(eventId)
        start_date = event['startDateTime']
        results = engine.execute(text("INSERT INTO reminders (userId, eventId, start_date) VALUES (:userId, :eventId, :start_date)"), eventId = eventId, userId = userId, start_date = start_date)
        if results.rowcount <= 0:
            return str(e), 200
        return "true", 200
    except Exception as e:
        print(e)
        return str(e), 500

@app.route("/events/upcomingEventsSubscription", methods = ["DELETE"])
def upcomingEventsSubscriptionDelete():
    try:
        userId = request.args['userId']
        eventId = request.args['eventId']
        if userId == "" or eventId == "":
            return str(e), 400
        results = engine.execute(text("DELETE FROM event_updates WHERE userId = :userId, eventId = :eventId"), eventId = eventId, userId = userId)
        if results.rowcount <= 0:
            return str(e), 200
        return "true", 200
    except Exception as e:
        print(e)
        return str(e), 500

@app.after_request
def apply_headers(response):
    response.headers["Allow-Control-Allow-Methods"] = "*"
    response.headers["Allow-Control-Allow-Headers"] = "*"
    return response

if __name__ == '__main__':
    app.run(host="0.0.0.0" , port="5050", debug = True)
