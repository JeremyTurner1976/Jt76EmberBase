﻿Jt76EmberBase.IndexAdminLogMessageView = Jt76EmberBase.SlidingView.extend({
    templateName: "Modules/Admin/logMessage"
});

Jt76EmberBase.IndexAdminLogMessageRoute = Jt76EmberBase.SingleItemRoute.extend({
    strModel: "logMessage"
});

Jt76EmberBase.IndexAdminLogMessageController = Jt76EmberBase.SingleItemController.extend({
    strParentRoute: "index.admin.logMessages"
});