import mysql.connector as mc

def get_event(eventId):
    conn = mc.connect(user="admin", password="citihack191", host="db-team1.cif14ai3iiw6.ap-southeast-1.rds.amazonaws.com", database="CitiHack")
    cursor = conn.cursor(dictionary=True)
    query = f"select * from Events_event where id={eventId}"
    cursor.execute(query)
    for i in cursor:
        return i

def get_event_by_org_name(orgName):
    conn = mc.connect(user="admin", password="citihack191", host="db-team1.cif14ai3iiw6.ap-southeast-1.rds.amazonaws.com", database="CitiHack")
    cursor = conn.cursor(dictionary=True)
    query = f"select * from Events_event where organizer_name='{orgName}'"
    cursor.execute(query)
    for i in cursor:
        return i

def parse_datetime(datetime):
    return datetime.strftime("%Y-%m-%dT%H:%M:%SZ")

def get_participants_by_event(eventID):
    conn = mc.connect(user="admin", password="citihack191", host="db-team1.cif14ai3iiw6.ap-southeast-1.rds.amazonaws.com", database="CitiHack")
    cursor = conn.cursor(dictionary=True)
    query = f"SELECT * FROM accounts;"
    cursor.execute(query)
    data = []
    for i in cursor:
        data.append(i)
    all_volunteers = []
    for person in data:
        all_volunteers.append({'userId': person['id'], 'firstName': person['first_name'], 'lastName': person['last_name'], 'gender': person['gender'], 'DOB': parse_datetime(person['date_of_birth']), 'accountType': person['account_type']})
    return all_volunteers

def get_category_id(eventId):
    conn = mc.connect(user="admin", password="citihack191", host="db-team1.cif14ai3iiw6.ap-southeast-1.rds.amazonaws.com", database="CitiHack")
    cursor = conn.cursor()
    query = f"select category_id from Events_event_category where event_id={eventId}"
    cursor.execute(query)
    for i in cursor:
        return i[0]

def get_demographics(eventId):
	try:
	    event = get_event(eventId)
	    participants = get_participants_by_event(eventId)
	    category_id = get_category_id(eventId)
	    return {
	        "eventId":event["id"],
	        "eventName":event["name"],
	        "startDateTime":parse_datetime(event["start_date_time"]),
	        "endDateTime":parse_datetime(event["end_date_time"]),
	        "numParticipants":len(participants),
	        "organizerName":event["organizer_name"],
	        "categoryId":category_id,
	        "volunteers":participants,
	        "eventStatus":{0:"closed",1:"open"}[event["status"]]
	    }
	except:
		assert False


def get_organizer(orgName):
	try:
	    event = get_event_by_org_name(orgName)
	    participants = get_participants_by_event(event["id"])
	    category_id = get_category_id(event["id"])
	    return {
	        "eventId":event["id"],
	        "eventName":event["name"],
	        "startDateTime":parse_datetime(event["start_date_time"]),
	        "endDateTime":parse_datetime(event["end_date_time"]),
	        "numParticipants":len(participants),
	        "organizerName":event["organizer_name"],
	        "categoryId":category_id,
	        "volunteers":participants,
	        "eventStatus":{0:"closed",1:"open"}[event["status"]]
	    }
	except:
		assert False


def get_time_difference(eventid):
    conn = mc.connect(user="admin", password="citihack191", host="db-team1.cif14ai3iiw6.ap-southeast-1.rds.amazonaws.com", database="CitiHack")
    cursor = conn.cursor()
    query = f"select timediff(end_date_time, start_date_time) from Events_event where id=" + str(eventid) +";"
    cursor.execute(query)
    for i in cursor:
        return int(str(i[0]).split(":")[0])


def get_historic(fromDate, toDate):
    try:
        if fromDate is None:
            fromDate = "1970-01-01"
        if toDate is None:
            toDate = "2099-01-01"

        conn = mc.connect(user="admin", password="citihack191", host="db-team1.cif14ai3iiw6.ap-southeast-1.rds.amazonaws.com", database="CitiHack")
        cursor = conn.cursor(dictionary=True)
        query = f"select * from Events_event where start_date_time > str_to_date('{fromDate}','%Y-%m-%d') and str_to_date('{toDate}','%Y-%m-%d') > end_date_time"
        cursor.execute(query)
        data = {'events': []}
        for i in cursor:
            event = get_event(i['id'])
            participants = get_participants_by_event(i['id'])
            category_id = get_category_id(i['id'])
            data['events'].append({
            "eventId":event["id"],
            "eventName":event["name"],
            "startDateTime":parse_datetime(event["start_date_time"]),
            "endDateTime":parse_datetime(event["end_date_time"]),
            "numParticipants":len(participants),
            "organizerName":event["organizer_name"],
            "categoryId":category_id,
            "volunteers":participants,
            "eventStatus":{0:"closed",1:"open"}[event["status"]]
        })
        return data
    except:
        assert False

def get_events_userid(userid = None):
    conn = mc.connect(user="admin", password="citihack191", host="db-team1.cif14ai3iiw6.ap-southeast-1.rds.amazonaws.com", database="CitiHack")
    cursor = conn.cursor(dictionary=True)
    query = f"select event_id_id as event_id from Events_register where participant_id={userid}"
    cursor.execute(query)
    events_participated = []
    for i in cursor:
        events_participated.append(i['event_id'])
    return events_participated

def get_historic_userid(userid = None,fromDate = '1970-01-01', toDate = '2099-01-01'):
    try:
        data = {'numEvents': 0, 'totalHours': 0, 'fromDate': '', 'endDate': '', "events": []}
        if fromDate != '1970-01-01':
            data['fromDate'] = fromDate
        if toDate != '2099-01-01':
            data['endDate'] = toDate
        events = get_events_userid(userid)

        historic_events = get_historic(fromDate, toDate)
        pulled_events = []
        for event in historic_events['events']:
            pulled_events.append(event['eventId'])
        historic_by_userid = list(set(events) & set(pulled_events))
        data['numEvents'] = len(historic_by_userid)
        for i in historic_by_userid:
            data['totalHours'] += get_time_difference(i)
            event = get_event(i)
            participants = get_participants_by_event(i)
            category_id = get_category_id(i)
            data['events'].append({
            "eventId":event["id"],
            "eventName":event["name"],
            "startDateTime":parse_datetime(event["start_date_time"]),
            "endDateTime":parse_datetime(event["end_date_time"]),
            "numHours": get_time_difference(i),
            "numParticipants": len(participants),
            "organizerName":event["organizer_name"],
            "categoryId":category_id,
            "eventStatus":{0:"closed",1:"confirmed"}[event["status"]]
        })
        return data
    except:
        assert False

