requirejs.config({
    urlArgs: 'bust=' + (new Date()).getTime(),
    appDir: '.',
    baseUrl: 'js',
    paths: {
        'React': 'https://unpkg.com/react@0.12.2/dist/react',
        'App': 'app/App',
        'Card': 'app/Card',
        'Packages': 'app/Packages'
    }
});

requirejs(['App'], function(App){
  App.render();
});
