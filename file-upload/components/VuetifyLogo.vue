<template>
  <img
    class="vuetify-logo"
    alt="Vuetify Logo"
    src="/vuetify-logo.svg"
  >
</template>

<style>
.vuetify-logo {
  height: 180px;
  width: 180px;
  transform: rotateY(560deg);
  animation: turn 3.5s ease-out forwards 1s;
}
.flexImgBox {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}
.imagGrid {
  width: calc(33.33% - 15px);
  margin-top: 0px;
  border: solid 5px #7598ff;
  border-radius: 13px;
  overflow: hidden;
}
.upload-main{
  padding: 40px;
  padding-top: 15px;
}
.upload-form {
    margin: 25px 0px;
}
.upload-form input{
  border: solid 1px #7598ff;
  padding: 8px 10px;
  border-radius: 10px;
  margin-right: 8px;
}
.upload-main h1{
  color: #3b63d9;
}
.upload-form button {
    background: #3b63d9;
    padding: 11px 22px;
    border-radius: 5px;
    color: #fff;
}
.upload-form button:hover {
    background: #3b63d9;
}
.heading-box{
  background-color: #7598ff;
  padding: 5px 10px;
  color: #fff;
  text-align: center;
}
.heading-box h2{
  font-size: 14px;
  font-weight: 400;
  padding: 4px 5px;
}
@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
