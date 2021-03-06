# node-red-contrib-sunpos
[![npm version](https://badge.fury.io/js/node-red-contrib-sunpos.svg)](https://badge.fury.io/js/node-red-contrib-sunpos)

A <a href="http://nodered.org" target="_new">Node-RED</a> node to calculate the position of the sun at a given location.

## Install

Run the following command in the root directory of your Node-RED install

    npm install node-red-contrib-sunpos

## Usage

This node calculates the position of the sun at a given location.  It is configured with the following properties:
* <b>lat</b>: latitude of the location
* <b>lon</b>: longitude of the location
* <b>start</b>: time of day that constitutes the start of daylight hours
* <b>startOffset</b>: offset to be applied for start of daylight hours, a negative value brings the start forward, a positive value delays
* <b>end</b>: time of day that constitutes the end of daylight hours
* <b>endOffset</b>: offset to be applied for end of daylight hours

This node can optionally receive a time via an input message containing **msg.time** conforming to Javascript Date object, otherwise it will use the current time.

This node emits a <b>msg.payload</b> with the following properties:
* <b>startTime</b>: time of day that constitutes the start of daylight hours (inclusive of offset)
* <b>endTime</b>: time of day that constitutes the end of daylight hours (inclusive of offset)
* <b>sunInSky</b>: boolean value indicating whether it is currently considered daylight hours
* <b>altitude</b>: altitude of the sun above the horizon in degrees
* <b>azimuth</b>: azimuth of the sun in degrees, where 0 is North
* <b>altitudeRadians</b>: altitude of the sun above the horizon in radians
* <b>azimuthRadians</b>: azimuth of the sun in radians, where 0 is South, a positive value is in the west and negative value in the east

The node also sets the following <b>msg</b> properties:
* <b>location</b>: with the coordinates of the location
* <b>sunTimes</b>: an object containing various sunlight times
* <b>topic</b>: to "sun"

All times in <b>msg.payload</b> are milliseconds since midnight Jan 1 1970.

The node also reports its status within the Node-RED flow editor, using colour to indicate whether it is currently considered daylight hours.

## Credit

This Node is based on, and has used code from, another node-RED Node called <a href="https://www.npmjs.com/package/node-red-node-suncalc">suncalc</a> published by <a href="https://www.npmjs.com/~dceejay">dceejay</a>
