Jt76EmberBase.IndexDashboardView = Jt76EmberBase.SlidingView.extend({
    templateName: "Modules/Dashboard/dashboard"
});

Jt76EmberBase.IndexDashboardRoute = Jt76EmberBase.ArrayRoute.extend({
    strModel: "weatherService"
});

Jt76EmberBase.IndexDashboardController = Jt76EmberBase.ArrayController.extend({
    strPageTitle: "Dashboard",
    strSubHeader: "Welcome Back, <strong>Jeremy Turner</strong> , <i class='fa fa-map-marker text-danger'></i> Cheney",
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
        }
        model.dailyWeather = dailyWeather;
        return model;
    }.property("model")
});