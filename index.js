
/**
 * Module dependencies.
 */

var Emitter = require('component-emitter');
var classes = require('component-classes');
var events = require('component-events');

/**
 * Expose `Input`.
 */

module.exports = Input;

/**
 * Initialize input with the given textarea `el`.
 *
 * @param {Element} el
 * @api public
 */

function Input(el) {
  if (!(this instanceof Input)) return new Input(el);
  this.classes = classes(el);
  this.events = events(el, this);
  this.events.bind('keydown');
  this.events.bind('keyup');
  this.el = el;
}

/**
 * Mixin Emitter.
 */

Emitter(Input.prototype);

/**
 * Handle keydown.
 */

Input.prototype.onkeydown = function(e){
  if (13 == e.keyCode && !e.shiftKey) {
    e.preventDefault();
  }
};

/**
 * Handle keyup.
 */

Input.prototype.onkeyup = function(e){
  var val = this.el.value;

  // TODO: more efficient
  var lines = val.split('\n').length;

  if (lines > 1) {
    this.classes.add('multiline');
  } else {
    this.classes.remove('multiline');
  }

  // textarea mode
  if (13 != e.keyCode) return;
  if (e.shiftKey) return;

  // input mode
  this.emit('input', val);
  this.clear();
  e.preventDefault();
  this.classes.remove('multiline');
};

/**
 * Clear input.
 */

Input.prototype.clear = function(){
  this.el.value = '';
};