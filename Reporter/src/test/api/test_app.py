import unittest
import datetime

from unittest.mock import patch
from python.api import app
from flask_restplus import Resource, Api


class TestDemographicApi(unittest.TestCase):
	@patch.object(app.demographic_args, {'eventId': 1})
	def testGet(self):
		demo_api = app.DemographicApi(Resource)
		sample_dict = {"eventId":1,"eventName":"Dog Shelter Cleaning","startDateTime":"2015-01-01T10:00:00Z","endDateTime":"2015-01-01T12:00:00Z","numParticipants":5,"organizerName":"SPCA","categoryId":1,"volunteers":[{"userId":1,"firstName":"Peter","lastName":"Johnson","gender":"19","DOB":"2019-01-30T00:00:00Z","accountType":"volunteer"},{"userId":2,"firstName":"Adam","lastName":"Steven","gender":"19","DOB":"2019-01-30T00:00:00Z","accountType":"volunteer"},{"userId":3,"firstName":"Crystal","lastName":"Sam","gender":"19","DOB":"2019-01-30T00:00:00Z","accountType":"volunteer"},{"userId":4,"firstName":"Kylie","lastName":"Jade","gender":"19","DOB":"2019-01-30T00:00:00Z","accountType":"volunteer"},{"userId":7,"firstName":"Deyson","lastName":"Quek","gender":"Male","DOB":"1994-01-01T00:00:00Z","accountType":"admin"}],"eventStatus":"closed"}
		return_dict = demo_api.get()
		self.assertEqual(sample_dict, return_dict)

# class TestOrganizationApi(unittest.TestCase):
# 	def testGet(self):
# 		org_api = app.OrganizationApi(Resource)
# 		sample_dict ={}
# 		return_dict = org_api.get()
# 		self.assertEqual(sample_dict, return_dict)

# class TestHistoricalApi(unittest.TestCase):
# 	def testGet(self):
# 		his_api = app.HistoricalApi(Resource)
# 		sample_dict ={}
# 		return_dict = his_api.get()
# 		self.assertEqual(sample_dict, return_dict)

# class TestUserHistoricalApi(unittest.TestCase):
# 	def testGet(self):
# 		user_his_api = app.UserHistoricalApi(Resource)
# 		sample_dict ={}
# 		return_dict = user_his_api.get()
# 		self.assertEqual(sample_dict, return_dict)
