#!/usr/local/bin/python3

from flask import Flask
from flask import jsonify
from flask_cors import cross_origin

app = Flask(__name__)


@app.route('/')
@cross_origin()
def test():
    return jsonify(
        username="Test User",
        email="test@test.com",
        id="01"
    )


if __name__ == '__main__':
    app.run(host='0.0.0.0')
