# vue-instant-notification

> Instant notification based on awesome Vue

## Installation

``` bash
# yarn
yarn add vue-instant-notification

# npm
npm install --save vue-instant-nofication
```

## Example

#### Markup

``` html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>vue-instant-notification</title>
  </head>
  <body>
    <div id="app">
      <vue-instant-notification ref="Notification"></vue-instant-notification>
      <button @click="test()">Test</button>
    </div>
    <!-- your scripts -->
  </body>
</html>
```

#### Script

``` javascript
import Vue from 'vue'
import VueInstantNotification from '../'

new Vue({
  el: '#app',
  components: { VueInstantNotification },
  methods: {
    test: function () {
      this.$refs.Notification.success({
        title: 'Test',
        message: 'This is test'
      });
    }
  }
});
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
