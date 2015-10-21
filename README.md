node-red-contrib-sunpos
=====================

A <a href="http://nodered.org" target="_new">Node-RED</a> node to calculate the position of the sun at a given location.

Install
-------

Run the following command in the root directory of your Node-RED install

    npm install node-red-contrib-sunpos

Usage
-----

Uses the <i><a href = "https://github.com/mourner/suncalc" target="_new">suncalc</a></i> npm to generate an output with the position of the sun at a given location.

The Node emits a <b>msg.payload</b> with the following properties:
* <b>sunInSky</b>: boolean indicating whether sun is above the horizon
* <b>altitudeRadians</b>: sun altitude above the horizon in radians
* <b>altitudeDegrees</b>: sun altitude above the horizon in degrees
* <b>azimuthRadians</b>: sun azimuth in radians, where 0 is South, a positive value is in the west and negative value in the east
* <b>azimuthDegrees</b>: sun azimuth in degrees, where 0 is North

Properties
----------

The Node has the following required configurable properties:
* <b>Latitude</b>: geospatial coordinate for the location
* <b>Longitude</b>: geospatial coordinate for the location
* <b>Start</b>: sunlight time property, as defined by the suncalc module, which defines the start of daylight hours.  By default this is set to "sunrise"
* <b>End</b>: sunlight time property, as defined by the suncalc module, which defines the end of daylight hours.  By default this is set to "sunset"

Credit
------

This Node is based on, and has used code from, another node-RED Node called <a href="https://www.npmjs.com/package/node-red-node-suncalc">suncalc</a> published by <a href="https://www.npmjs.com/~dceejay">dceejay</a>
