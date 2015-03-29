Jt76EmberBase.ModalController = Ember.ObjectController.extend({
    actions: {
        close: function () {
            return this.send("closeModal");
        }
    }
});