var TasksRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('task');
  },

  actions: {
    createTask: function(properties) {
      var newTaskController = this.controllerFor('tasks.new');

      this.store.createRecord('task', properties).save().then(function() {
        newTaskController.send('didSave');
      }).fail(function(reason) {
        newTaskController.send('didError', reason);
      });
    },

    deleteTask: function(task) {
      this.store.deleteRecord(task);
    }
  }
});

export default TasksRoute;
