#!/usr/local/bin/python3

import os
from flask import Flask
from flask import request
from flask_cors import cross_origin
from pyzomato import Pyzomato

app = Flask(__name__)

p = Pyzomato(os.environ.get('RESTAURANT_API_KEY'))

@app.route('/nearby_restaurants')
@cross_origin()
def nearby_restaurants():
    lat = request.args.get('lat')
    lon = request.args.get('lon')
    result = p.getByGeocode(lat, lon)['nearby_restaurants']
    list_of_restaurants = list(map(lambda x: x['restaurant']['name'], result))
    return list_of_restaurants


if __name__ == '__main__':
    app.run(host='0.0.0.0')
