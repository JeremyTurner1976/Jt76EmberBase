Jt76EmberBase.CanvasSkyconComponent = Ember.Component.extend({
    didInsertElement: function(){
        var icons = new Skycons({ "color": "white" });
        var baseElement = this.$("#jt76-skycon")[0];
        icons.set(baseElement, this.get("strIcon"));
        icons.play();
    }
});
