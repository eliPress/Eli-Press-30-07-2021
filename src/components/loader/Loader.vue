<template>
  <div class="loading">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  name: "Loader"
}
</script>

<style scoped>
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 40px;
  width: 40px;
  transform: translate(-50%, -50%) rotate(45deg) translate3d(0, 0, 0);
  animation: animate 1.2s ease-in-out infinite;
}

@keyframes animate {
  0%,
  10%,
  100% {
    height: 40px;
    width: 40px;
  }
  65% {
    height: 70px;
    width: 70px;
  }
}

span {
  position: absolute;
  display: block;
  width: 20px;
  height: 20px;
  animation: rotate 1.2s linear both infinite;
}

@keyframes rotate {
  0%,
  30% {
    transform: rotate(0);
  }
  65% {
    transform: rotate(-40deg);
  }
  100% {
    transform: rotate(-90deg);
  }
}

span:nth-child(1) {
  top: 0;
  left: 0;
  background: #55d462;
}

span:nth-child(2) {
  top: 0;
  right: 0;
  background: #8675e5;
}

span:nth-child(3) {
  bottom: 0;
  left: 0;
  background: #d84c77;
}

span:nth-child(4) {
  bottom: 0;
  right: 0;
  background: #fd9a3f;
}
</style>