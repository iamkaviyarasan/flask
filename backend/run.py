from main import create_app
from config import DevConfig


if __name__ == '__main__':
    app = create_app(DevConfig)
    app.run(port=5000,host='0.0.0.0')