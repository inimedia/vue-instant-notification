import Vue from 'vue'
import VueInstantNotification from '../'

/* eslint-disable no-new */
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
