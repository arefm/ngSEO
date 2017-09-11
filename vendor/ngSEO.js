/**
 * @author Aref Mirhosseini <code@arefmirhosseini.com> (http://arefmirhosseini.com)
 */

'use strict'

angular.module('ngSEO', [])
  .service('SEO', [function() {

      var Fn = function() {
          this.keys = {};
          return this;
      };

      // Set/Update New Meta Key
      Fn.prototype.set = function(key, value) {
          this.keys[key] = value;
          return this;
      }

      // Get Meta Key (if not set empty value will be returned)
      Fn.prototype.get = function(key) {
          var result = (Object.keys(this.keys).indexOf(key) > -1) ? this.keys[key] : "";
          return result;
      }

      // Get All Meta Keys
      Fn.prototype.getAll = function() {
          return this.keys;
      }

      // Reset All Meta Keys
      Fn.prototype.reset = function() {
          this.keys = {};
          return this;
      }

      return new Fn();
  }]);
