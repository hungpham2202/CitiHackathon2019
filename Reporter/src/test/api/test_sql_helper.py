import unittest
import datetime

import mysql.connector as mc
from python.api.sql_helper import *


class TestSqlHelper(unittest.TestCase):
    def setUp(self):
        self.conn = mc.connect(user="admin", password="citihack191", host="db-team1.cif14ai3iiw6.ap-southeast-1.rds.amazonaws.com", database="CitiHack")
        self.cursor = self.conn.cursor(dictionary=True)
        query = "INSERT INTO Events_event (id, name) VALUES (123456, 'MockName')"
        self.cursor.execute(query)

    # def test_get_event(self):
    #     sample_dict = {'id': 123456, 'name': 'MockName', 'start_date_time': [], 'end_date_time': [], 'organizer_name': 'mock', 'status': 1, 'max_participants': 0, 'min_participants': 0,'descriptions': 'MockDescription'}
    #     print(get_event_by_org_name('MockName'))
    #     self.assertEqual(sample_dict, get_event(123456))

    def tearDown(self):
        query = f"DELETE FROM Events_event where name = 'MockName'"
        self.cursor.execute(query)
