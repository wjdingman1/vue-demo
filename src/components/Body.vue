<template>
  <div>
    <transition name="fade"><router-view /></transition>
  </div>
</template>

<script>
export default {
  name: "Body"
};
</script>

<style scoped>
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Internet Explorer */
@-ms-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-enter-active {
  transition: opacity 1.5s;
}
.fade-enter/* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.fade-leave-active {
  transition: opacity 0s;
}
.fade-leave-to {
  opacity: 0;
}
</style>
