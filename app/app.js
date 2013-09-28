import Resolver from 'resolver';
import router from 'appkit/router';
import Task from 'appkit/models/task';

var App = Ember.Application.extend({
  LOG_ACTIVE_GENERATION: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'appkit', // TODO: loaded via config
  Resolver: Resolver,
  Router: Ember.Router.extend({
    router: router
  })
});

Ember.TextField.reopen({
  attributeBindings: ['autofocus']
});

import TaskFixtures from 'appkit/fixtures/task';
Task.FIXTURES = TaskFixtures;

export default App;
