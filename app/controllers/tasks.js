var TasksController = Ember.ArrayController.extend({
  sortProperties: ['id'],
  sortAscending: false,
  searchTerm: '',

  shouldShowClearSearch: function() {
    return !Ember.isEmpty(this.get('searchTerm'));
  }.property('searchTerm'),

  filteredContent: function() {
    var content = this.get('arrangedContent'),
        searchTerm = this.get('searchTerm');

    if (!content || Ember.isEmpty(searchTerm)) {
      return content;
    }

    return content.filter(function(item) {
      return item.get('color') === searchTerm;
    });
  }.property('@each.color', 'searchTerm'),

  actions: {
    clearSearch: function() {
      this.set('searchTerm', '');
    }
  }
});

export default TasksController;
