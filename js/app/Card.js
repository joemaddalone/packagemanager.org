define( function( require ){
  'use strict';
  var React = require('React');

  var Card =
    React.createClass( {
      render:function(){
        return (
          React.DOM.div({className: 'col-lg-3 col-md-4 col-sm-6 col-xs-12'},
          React.DOM.div({className: 'Card thumbnail'},
            React.DOM.a({href: this.props.pm.url},
              React.DOM.img({
                src: 'images/logos/' + this.props.pm.img, alt: 'thumbnail'
              })),
              React.DOM.div({className: 'caption'},
                React.DOM.h2(null, this.props.pm.title),
                React.DOM.p({
                  className: 'description'
                }, this.props.pm.description),
                React.DOM.hr(null),
                React.DOM.p(null,
                  React.DOM.a({
                    href: this.props.pm.url,
                    className: 'btn btn-primary'
                  }, 'GO→'))
              )
            )
          )
        );
      }
    } );

  return Card;

});
