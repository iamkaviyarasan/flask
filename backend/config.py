from decouple import config
import os

# Reading configuration variables from .env file
BAS_DIR=os.path.dirname(os.path.realpath(__file__))
class Config:
    SECRET_KEY=config('SECRET_KEY')
    SQLALCHEMY_TRACK_MODIFICATIONS=config('SQLALCHEMY_TRACK_MODIFICATIONS',cast=bool)


class DevConfig(Config):
    SQLALCHEMY_DATABASE_URI="sqlite:///"+os.path.join(BAS_DIR,'dev.db')
    DEBUG=True
    SqLALCHEMY_ECHO=True

class ProdConfig(Config):
    pass

class TestConfig(Config):
    SQLALCHEMY_DATABASE_URI='sqlite:///test.db'
    SQLALCHEMY_ECHO=True
    TESTING=True