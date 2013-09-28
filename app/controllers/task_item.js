var TaskItemController = Ember.ObjectController.extend({
  style: function() {
    return 'background-color: ' + this.get('color');
  }.property('color'),

  actions: {
    toggleDone: function() {
      this.toggleProperty('isDone');
    }
  }
});

export default TaskItemController;
