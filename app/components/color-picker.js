var ColorPickerComponent = Ember.Component.extend({
  classNames: ['color-picker'],

  colors: [
    'navy', 'pink', 'green',
    'red', 'orange', 'gray',
    'brown', 'aqua', 'purple'
  ],

  value: null,
  isExplanded: false,
  style: function() {
    return 'background-color:' + this.get('value');
  },

  actions: {
    didSelect: function(color) {
      this.set('isExpanded', false);
      this.set('value', color);
    },

    toggleChooser: function() {
      this.toggleProperty('isExpanded');
    }
  }
});

export default ColorPickerComponent;
