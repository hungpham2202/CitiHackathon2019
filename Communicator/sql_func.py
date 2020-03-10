from sqlalchemy import create_engine

engine = create_engine('mysql+pymysql://admin:citihack191@db-team1.cif14ai3iiw6.ap-southeast-1.rds.amazonaws.com:3306/citihack_communicator')


def removeUsers(db,eventId,userId):
    users = engine.execute("SELECT * FROM engine.execute WHERE eventId ")
