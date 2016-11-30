<template>
    <!-- container -->
    <div id="ini-notification-container">
        <div class="ini-notification"
             v-for="(notification, index) in notificationList"
             @click="forceClose(notification)"
             v-bind:style="{ top: (10 + (80*index)) + 'px' }"
             v-bind:class="[
        { 'force-killed': notification.forceKilled },
        { killed: notification.killed },
        { clickable: !notification.killed && !notification.forceKilled },
        notification.type
      ]">
            <h3>{{ notification.title }}</h3>
            <div class="message">{{ notification.message }}</div>
        </div>
    </div>
</template>

<script>
export default {
  mounted () {
    // console.log('IniNotification ready!');
  },
  data () {
    var list = []
    return {
      notificationList: list
    }
  },
  methods: {
    sweep: function () {
      for (var i=0; i<this.notificationList.length; i++) {
        if (this.notificationList[i].killed === true || this.notificationList[i].forceKilled === true) {
          this.notificationList.splice(i, 1)
          // i--
        }
      }
    },
    forceClose: function (notification) {
      notification.forceKilled = true
      this.sweep()
    },
    showNotification: function (type, notification) {
      this.sweep()
      notification.id = (new Date()).getTime()
      notification.type = type
      notification.forceKilled = false
      notification.killed = true
      notification.top = 10 - 80
      var delay = 2500
      if (notification.delay !== undefined) {
        delay = notification.delay
      }
      else {
        notification.delay = delay
      }
      this.notificationList.splice(0, 0, notification)
      setTimeout(function () {
        notification.killed = false
        setTimeout(function () {
          notification.killed = true
        }, delay)
      }.bind(this), 200)
    },
    success: function (notification) {
      this.showNotification('success', notification)
    },
    warning: function (notification) {
      this.showNotification('warning', notification)
    },
    info: function (notification) {
      this.showNotification('info', notification)
    },
    error: function (notification) {
      this.showNotification('error', notification)
    },
    toggle: function () {
      this.isShow = !this.isShow
    }
  },
  filters: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  }
}
</script>
<style>
.ini-notification {
  position: fixed;
  z-index: 9999;
  width: 300px;
  -webkit-transition: all ease-out .3s;
  -o-transition: all ease-out .3s;
  transition: all ease-out .3s;
  color: #fff;
  border-radius: 0;
  background: #337ab7;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, .3);
  top: -100px;
  right: 10px;
}

.ini-notification.clickable {
  cursor: pointer;
}

.ini-notification.clickable:hover {
  opacity: .7;
}

.ini-notification.force-killed {
  -webkit-transition: all ease-out 0.2s;
  -o-transition: all ease-out 0.2s;
  transition: all ease-out 0.2s;
  opacity: 0;
}

.ini-notification.killed {
  -webkit-transition: all ease-out 0.6s;
  -o-transition: all ease-out 0.6s;
  transition: all ease-out 0.6s;
  opacity: 0;
}

.ini-notification > h3 {
  font-size: 14px;
  font-weight: bold;
  display: block;
  margin: 10px 10px 0 10px;
  padding: 0 0 5px 0;
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, .3);
}

.ini-notification a {
  color: #fff;
}

.ini-notification a:hover {
  text-decoration: underline;
}

.ini-notification > .message {
  margin: 10px 10px 10px 10px;
}

.ini-notification.warning {
  color: #fff;
  background: #f0ad4e;
}

.ini-notification.error {
  color: #fff;
  background: #d9534f;
}

.ini-notification.success {
  color: #fff;
  background: #5cb85c;
}

.ini-notification.info {
  color: #fff;
  background: #5bc0de;
}
</style>
