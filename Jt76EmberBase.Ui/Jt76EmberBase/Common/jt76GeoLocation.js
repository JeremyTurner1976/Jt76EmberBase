Jt76EmberBase.Jt76GeoLocation = Ember.Object.extend({
    init: function () {
        this._super();
        this.getLocation();
    },
    currentLocation: null,
    nWatchId: null,
    bLoaded: false,
    isGeoLocationEnabled: function () {
        return (navigator && navigator.geolocation) || false;
    },
    getLocation: function () {
        var self = this;
        if (this.get("isGeoLocationEnabled")) {
            function setLocation(data) {
                self.set("currentLocation", data);
                self.set("bLoaded", true);
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
            self.set("nWatchId", navigator.geolocation.watchPosition(setLocation, showError));
        } else {
            //TODO base geolocation object
            self.set("currentLocation", {});
            self.set("bLoaded", true);
        }
    },
    displayLocation: function (location) {
        if (!this.get("bLoaded"))
            this.get("getLocationWatcher");

        var position = this.get("currentLocation");
        var latlon = position.coords.latitude + "," + position.coords.longitude;
        var mapUrl = "http://maps.googleapis.com/maps/api/staticmap?center=" + latlon + "&zoom=14&size=400x300&sensor=false";

        //TODO have this open up in a popup
        //document.getElementById("mapholder").innerHTML = "<img src='" + mapUrl + "'>";
    }
});
