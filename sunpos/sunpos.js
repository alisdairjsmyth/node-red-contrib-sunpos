/**
 * Copyright 2015 Alisdair Smyth
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/
module.exports = function(RED) {
    "use strict";
    var SunCalc = require('suncalc');

    function CalculateMillis(t) {
        return Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),t.getUTCHours(),t.getUTCMinutes());
    }

    function SunNode(n) {
        RED.nodes.createNode(this,n);
        this.lat = n.lat;
        this.lon = n.lon;
        this.start = n.start;
        this.end = n.end;
        var node = this;

        this.on("input", function(msg) {
            var now = new Date();
            var sunPosition = SunCalc.getPosition(now, node.lat, node.lon);
            var sunTimes = SunCalc.getTimes(now, node.lat, node.lon);
            var altitudeDegrees = 180/Math.PI*sunPosition.altitude;
            var azimuthDegrees = 180 + 180/Math.PI*sunPosition.azimuth;
            var sunInSky;

            var nowMillis = CalculateMillis(now);
            var startMillis = CalculateMillis(sunTimes[node.start]);
            var endMillis = CalculateMillis(sunTimes[node.end]);
            if ((nowMillis > startMillis) & (nowMillis < endMillis)) {
                sunInSky = 1;
                node.status({fill:"yellow",shape:"dot",text:"day"});
            } else {
                sunInSky = 0;
                node.status({fill:"blue",shape:"dot",text:"night"});
            }

            msg.topic = "sun";
            msg.payload = {
                sunInSky: sunInSky, 
                altitudeRadians: sunPosition.altitude, 
                altitudeDegrees: altitudeDegrees, 
                azimuthRadians: sunPosition.azimuth, 
                azimuthDegrees: azimuthDegrees
            };

            node.send(msg);
        });
    }

    RED.nodes.registerType("sunpos",SunNode);
}
