<template>
  <div class="toggle-measurement-temperature">
    <span>{{temperature ? '°C' : 'Light' }}</span>
    <span class="MuiSwitch-root" @click="toggle()" :class="{'flipped': toggleButton}" >
      <span class="MuiButtonBase-root MuiIconButton-root jss7 MuiSwitch-switchBase" >
        <span class="MuiIconButton-label"><input class="jss10 MuiSwitch-input" type="checkbox" value="">
          <span class="MuiSwitch-thumb"></span></span><span class="MuiTouchRipple-root"></span></span>
      <span class="MuiSwitch-track"></span></span>
    <span>{{temperature ? '°F' : 'Dark' }}</span>
  </div>
</template>

<script>
export default {
  name: "Toggle",

  props:{
    temperature:{
      type:Boolean
    }
  },

  data(){
    return{
      toggleButton:false,
    }
  },

  methods:{

    toggle(){
        this.toggleButton = !this.toggleButton;
      if(this.temperature) {
        this.$store.dispatch("getTemperature", !this.toggleButton);
      }else {
        this.$store.dispatch("changeTheme", !this.toggleButton);
      }
    }

  }

}
</script>

<style scoped>
.toggle-measurement-temperature{
  display: contents;
}
.MuiSwitch-root{
  width: 58px;
  top: -5px;
  height: 38px;
  display: inline-flex;
  padding: 12px;
  z-index: 0;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  flex-shrink: 0;
  vertical-align: middle;
}
.MuiSwitch-root:hover{
  cursor: pointer;
}
.MuiSwitch-switchBase {
  top: 8px;
  left: 10px;
  color: #fafafa;
  z-index: 1;
  position: absolute;
  transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}

.flipped{
  transform: scaleX(-1);
}
.flipped .MuiSwitch-track{
  background-color: red !important;
}

.MuiIconButton-label {
  width: 100%;
  display: flex;
  align-items: inherit;
  justify-content: inherit;
}
.MuiSwitch-thumb {
  width: 20px;
  height: 20px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  border-radius: 50%;
  background-color: currentColor;
}
.MuiTouchRipple-root {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
}
.MuiSwitch-track {
  width: 100%;
  height: 100%;
  opacity: 0.38;
  z-index: -1;
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 7px;
  background-color: #000;
}
.jss10 {
  top: 0;
  left: 0;
  width: 100%;
  cursor: inherit;
  height: 100%;
  margin: 0;
  opacity: 0;
  padding: 0;
  z-index: 1;
  position: absolute;
}
.MuiSwitch-input {
  left: -100%;
  width: 300%;
}
</style>