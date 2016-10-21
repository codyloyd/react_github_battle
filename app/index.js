var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var Raven = require('raven-js')

var sentryKey = '46a9b5e3d04b435e8a38be812d7285f5'
var sentryApp = '106595'
var sentryURL = 'https://' + sentryKey + '@app.getsentry.com/' + sentryApp

var _APP_INFO = {
  name: 'Github Battle',
  branch: '2',
  version: '1.0'
}

Raven.config(sentryURL, {
  release: _APP_INFO.version,
  tags: {
    branch: _APP_INFO.branch,
    penis: 'penis'
  }
}).install()

ReactDOM.render(
  routes,
  document.getElementById('app')
);
