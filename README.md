node-red-node-pos
=====================

A <a href="http://nodered.org" target="_new">Node-RED</a> node to calculate the position of the sun at a given location.

Install
-------

Run the following command in the root directory of your Node-RED install

    npm install node-red-node-sunpos


Usage
-----

Uses the <i><a href = "https://github.com/mourner/suncalc" target="_new">suncalc</a></i> npm to generate an output with the position of the sun at a given location.

The Node emits a <b>msg.payload</b> with the following properties:
* <b>sunInSky</b>: boolean indicating whether sun is above the horizon
* <b>altitudeRadians</b>: sun altitude above the horizon in radians
* <b>altitudeDegrees</b>: sun altitude above the horizon in degrees
* <b>azimuthRadians</b>: sun azimuth in radians, where 0 is South, a positive value is in the west and negative value in the east
* <b>azimuthDegrees</b>: sun azimuth in degrees, where 0 is North
