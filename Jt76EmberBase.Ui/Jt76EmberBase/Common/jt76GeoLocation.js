
//var promise = Jt76EmberBase.Location.getDataPromise();
//return promise.then(function (geoLocation) { 
    //dostuff
//});

Jt76EmberBase.Jt76GeoLocation = Ember.Object.extend({
    init: function() {
        this._super();
        this.getLocation();
    },
    currentLocation: { "coords": { "latitude": 47.4886, "longitude": -117.5786 } },
    nWatchId: null,
    bLoaded: false,
    strCity: "",

    getDataPromise: function () {
        var self = this;
        //two .5 second promises or else this goes to the default value
        function resolveData() {
            if (self.get("bLoaded") === false) {
                Jt76EmberBase.Common.log("Unable to gather geolocation data for your device. Loading Cheney, WA values.", "Default Geolocation", "error", true);
                Ember.run.later(self, function () { self.resolve(self.get("currentLocation")); }, 500);
            } else {
                self.resolve(self.get("currentLocation"));
            }
        }

        return new Ember.RSVP.Promise(function (resolve, reject) {
            self.resolve = resolve;
            self.reject = reject;

            if (self.get("bLoaded") === false) {
                Ember.run.later(self, resolveData, 500);
            } else {
                resolve(self.get("currentLocation"));
            }
        });
    },

    getLocation: function () {
        var self = this;
        self.set("nWatchId", navigator.geolocation.watchPosition(setLocation, showError));

        function setLocation(data) {
            self.set("currentLocation", data);
            var strUrl = "http://maps.googleapis.com/maps/api/geocode/json?latlng="
                + data.coords.latitude + "," + data.coords.longitude
                + "&sensor=true";

            $.get(strUrl).then(function(googleLocationData) {
                Jt76EmberBase.Common.log("Location Pull.", googleLocationData, "info", false);
                self.set("strCity", googleLocationData["results"][2].formatted_address);
                self.set("bLoaded", true);
            });
        }

        function showError(error) {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    Jt76EmberBase.Common.log("You have denied the request for Geolocation. error.PERMISSION_DENIED", error, "error", true);
                    break;
                case error.POSITION_UNAVAILABLE:
                    Jt76EmberBase.Common.log("Unable to find location information for your device. error.POSITION_UNAVAILABLE", error, "error", true);
                    break;
                case error.TIMEOUT:
                    Jt76EmberBase.Common.log("The request to get your location timed out. error.TIMEOUT", error, "error", true);
                    break;
                case error.UNKNOWN_ERROR:
                    Jt76EmberBase.Common.log("Unable to find location information for your device. error.UNKNOWN_ERROR", error, "error", true);
                    break;
            }
        }
    }
});
