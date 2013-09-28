var attr = DS.attr;

var Task = DS.Model.extend({
  title: attr('string'),
  color: attr('string'),
  description: attr('string'),
  isDone: attr('boolean')
});

export default Task;
