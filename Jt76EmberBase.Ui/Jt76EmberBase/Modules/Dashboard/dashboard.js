Jt76EmberBase.IndexDashboardView = Jt76EmberBase.SlidingView.extend({
    templateName: "Modules/Dashboard/dashboard"
});

Jt76EmberBase.IndexDashboardRoute = Jt76EmberBase.ArrayRoute.extend({
    strModel: "weatherItem"
});

Jt76EmberBase.IndexDashboardController = Jt76EmberBase.ArrayController.extend({
    init: function() {
        this._super();
        var newGeoLocation = Jt76EmberBase.Jt76GeoLocation.create();
        this.set("geoLocation", newGeoLocation);
    },
    strPageTitle: "Dashboard",
    strSubHeader: function () {
        return "Welcome Back, <strong>Jeremy Turner</strong> , <i class='fa fa-map-marker text-danger'></i> " + this.get("strLocation");
    }.property("strLocation"),
    locationWatcher: function () {
        var self = this;
        var geoLocation = this.get("geoLocation").get("currentLocation")
        var strUrl = "http://maps.googleapis.com/maps/api/geocode/json?latlng=" + geoLocation.coords.latitude + "," + geoLocation.coords.longitude + "&sensor=true";
        return $.get(strUrl).then(function (data) {
            self.set("strLocation", data["results"][1].address_components[0].long_name);
        });
    }.observes("geoLocation.bLoaded"),
    strLocation: "Loading",
    geoLocation: {},
    mappedModel: function () {
        var self = this;
        var model = self.get("model")[0];
        var dailyWeather = model.get("dailyWeather");
        var dtToday = moment().format("dddd");
        for (var i = 0; i < dailyWeather.length; i++) {
            dailyWeather[i].strClass = "panel-body text-white " + getBackgroundColor(i);

            var localMaxValue = moment.unix(dailyWeather[i].temperatureMaxTime);
            dailyWeather[i].dtLocalMax = moment(localMaxValue).format("h a");

            var localMinValue = moment.unix(dailyWeather[i].temperatureMinTime);
            dailyWeather[i].dtLocalMin = moment(localMinValue).format("h a");

            dailyWeather[i].dtLocalDay = moment(localMaxValue).format("dddd");
            if (dailyWeather[i].dtLocalDay === dtToday && i !== 7)
                dailyWeather[i].dtLocalDay = "Today";

            dailyWeather[i].temperatureMax = Math.floor(dailyWeather[i].temperatureMax);
            dailyWeather[i].temperatureMin = Math.floor(dailyWeather[i].temperatureMin);
        }
        model.dailyWeather = dailyWeather;
        return model;

        function getBackgroundColor(index) {
            switch (index) {
                case 0:
                    return "bg-primary";
                case 1:
                    return "bg-blue";
                case 2:
                    return "bg-light-green";
                case 3:
                    return "bg-success";
                case 4:
                    return "bg-purple";
                case 5:
                    return "bg-info";
                case 6:
                    return "bg-dark-green";
                case 7:
                    return "bg-green";
                case 8:
                    return "bg-dark-blue";
                default:
                    return "bg-success";
            }
        }
    }.property("model")
});