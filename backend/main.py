from flask import Flask,request,jsonify
from flask_jwt_extended import JWTManager
from flask_restx import Api
from models import Recipe,User
from exts import db

app=Flask(__name__)
from recipes import recipe_ns
from auth import auth_ns
from flask_migrate import Migrate
from flask_cors import CORS



def create_app(config):
    app=Flask(__name__)
    app.config.from_object(config)

    CORS(app)
    
    db.init_app(app)    

    migrate=Migrate(app,db)
    jwt=JWTManager(app)

    api=Api(app,doc='/docs')
    api.add_namespace(recipe_ns)
    api.add_namespace(auth_ns)

#model (serializer)
    @app.shell_context_processor
    def make_shell_context():
        return {"db":db,  "Recipe":Recipe,"user":User}
    


    return app




    
