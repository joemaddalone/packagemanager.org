requirejs.config({
    urlArgs: 'bust=' + (new Date()).getTime(),
    appDir: '.',
    baseUrl: 'js',
    paths: {
        'React': 'http://fb.me/react-0.11.1.min',
        'App': 'app/App',
        'Card': 'app/Card',
        'Packages': 'app/Packages'
    }
});

requirejs(['App'], function(App){
  App.render();
});
