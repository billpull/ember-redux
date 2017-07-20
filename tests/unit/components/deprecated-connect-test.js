import connect from 'ember-redux/components/connect';
import Component from '@ember/component';
import { module, test } from 'qunit';
import Ember from 'ember';

const originalWarn = Ember.warn;
let warnings;

module('unit: deprecated connect test', {
  beforeEach() {
    warnings = [];
    Ember.warn = (...args) => warnings.push(args);
  },

  afterEach() {
    Ember.warn = originalWarn;
  }
});

test('it logs a deprecation message', function(assert) {
  connect()(Component);

  assert.equal(warnings.length, 1, 'warns on usage');
  assert.equal(warnings[0][2].id, 'ember-redux.connect-import');
});
