import flask
import json
import os

from dateutil.parser import isoparse
from flask import request, logging
from flask_restplus import Resource, Api
from flask_restplus import reqparse
from sql_helper import *
from flask_cors import CORS, cross_origin
# from flask.ext.cors import cross_origin

app = flask.Flask(__name__)
# cors = CORS(app, resources={"/reports/*": {"origins": "*", "headers":"*", "methods":"*"}})
api = Api(app)
CORS(app)


demographic_args = reqparse.RequestParser()
demographic_args.add_argument('eventId', type=str, required=True)

@api.route("/reports/demographic")
class DemographicApi(Resource):
    @api.expect(demographic_args, validate=True)
    @api.response(200, 'Success')
    @api.response(500, 'INTERNAL_SERVER_ERROR')
    # @cross_origin(origin="*", headers=["*"])
    def get(self):
        eventId = demographic_args.parse_args()["eventId"]
        if not int(eventId):
            return 500
        return get_demographics(eventId)

organization_args = reqparse.RequestParser()
organization_args.add_argument('organizerName', type=str, required=True)

@api.route("/reports/organization")
class OrganizationApi(Resource):
    @api.expect(organization_args, validate=True)
    @api.response(200, 'Success')
    @api.response(500, 'Error: INTERNAL SERVER ERROR')
    def get(self):
        orgName = organization_args.parse_args()["organizerName"]
        return get_organizer(orgName)

historical_args = reqparse.RequestParser()
historical_args.add_argument('fromDate', type=str, required=False)
historical_args.add_argument('toDate', type=str, required=False)

@api.route("/reports/historical")
class HistoricalApi(Resource):
    @api.expect(historical_args, validate=True)
    @api.response(200, 'Success')
    @api.response(500, 'INTERNAL_SERVER_ERROR')
    def get(self):
        args = historical_args.parse_args()
        fromDate = args["fromDate"]
        toDate = args["toDate"]
        if (fromDate != None and not isoparse(fromDate)) or (toDate != None and not isoparse(toDate)):
            return 500
        return get_historic(fromDate, toDate)

user_historical_args = reqparse.RequestParser()
user_historical_args.add_argument('userId', type=str, required=True)
user_historical_args.add_argument('fromDate', type=str, required=False)
user_historical_args.add_argument('toDate', type=str, required=False)

@api.route("/reports/user-historical")
class UserHistoricalApi(Resource):
    @api.expect(user_historical_args, validate=True)
    @api.response(200, 'Success')
    @api.response(500, 'INTERNAL_SERVER_ERROR')
    def get(self):
        args = user_historical_args.parse_args()
        userId = args["userId"]
        fromDate = args["fromDate"]
        toDate = args["toDate"]
        if (fromDate != None and not isoparse(fromDate)) or (toDate != None and not isoparse(toDate)):
            return 500
        return get_historic_userid(userId, fromDate, toDate)

@app.after_request
def apply_headers(response):
    response.headers["Access-Control-Allow-Methods"] = "*"
    response.headers["Access-Control-Allow-Headers"] = "*"
    return response

if __name__ == '__main__':
   app.run(debug=True, host="0.0.0.0", port="5000")
