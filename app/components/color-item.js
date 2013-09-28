var ColorItemComponent = Ember.Component.extend({
  tagName: 'a',
  classNames: ['color'],
  attributeBindings: ['style', 'href'],
  href: '#',

  value: 'black',

  style: function() {
    return 'background-color:' + this.get('value');
  }.property('value'),

  click: function(event) {
    event.preventDefault();
    this.sendAction('didSelect', this.get('value'));
  }
});

export default ColorItemComponent;
