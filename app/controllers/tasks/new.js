var defaultColor = 'navy';

var TasksNewController = Ember.Controller.extend({
  title: null,
  color: defaultColor,
  description: null,

  canCreateTask: function() {
    return !Ember.isEmpty(this.get('title'));
  }.property('title'),

  actions: {
    submitForm: function() {
      var title = this.get('title'),
          color = this.get('color'),
          description = this.get('description');

      if (!this.get('canCreateTask')) {
        return;
      }

      this.target.send('createTask', {
        title: title,
        color: color,
        description: description
      });
    },

    didSave: function() {
      this.resetForm();
    },

    didError: function(reason) {
      console.log('Error saving task:', reason);
    }
  },

  resetForm: function() {
    this.setProperties({
      title: null,
      color: defaultColor,
      description: null
    });
  }
});

export default TasksNewController;
