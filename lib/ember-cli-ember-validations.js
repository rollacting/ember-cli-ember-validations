'use strict';

var path = require('path'),
    fs = require('fs');


function unwatchedTree(dir) {
  return {
    read:    function() { return dir; },
    cleanup: function() { }
  };
}

function EmberCLIEmberValidations(project) {
    this.project = project;
    this.name = 'Ember CLI EmberValidations Addon';
}


EmberCLIEmberValidations.prototype.treeFor = function treeFor(name){

  var treePath =  path.join(this.project.root, name);

  if (fs.existsSync(treePath)) {
    return unwatchedTree(treePath);
  }

};


EmberCLIEmberValidations.prototype.included = function included(app) {
  this.app = app;

  this.app.import('vendor/ember-validations/dist/ember-validations.js');
};

module.exports = EmberCLIEmberValidations;
