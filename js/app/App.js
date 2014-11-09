define( function( require ){
  'use strict';
  var React = require('React');
  var Card = require('Card');
  var Packages = require('Packages');
  var APP =
    React.createClass({
      getInitialState:function(){
        return {packagemanagers: Packages};
      },
      render:function(){
        this.items = this.state.packagemanagers
        .sort(function(a, b){
          var aTitle= a.title.toLowerCase(), bTitle=b.title.toLowerCase();
          if (aTitle > bTitle) {return 1;}
          if (aTitle < bTitle) {return -1;}
          return 0;
        })
        .map(function(item, i){
          return new React.createFactory(Card)({key:i, pm:item});
        });

        return React.DOM.div(null, this.items);
      }
    });

  APP.render = function(){
    React.render(React.createFactory(APP)(), document.body);
  };

  return APP;

});
