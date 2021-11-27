<template>
  <div id="home">
    <div id="jjal">
      <img class="background" src="@/assets/jjal.png">
      <div class="top text">{{topText}}</div>
      <div class="bottom text">{{botText}}</div>
    </div>
    <div class="editor">
      <div>
        <span class="label">말풍선1</span>
        <input type="text" v-model="topText">
      </div>
      <div>
        <span class="label">말풍선2</span>
        <input type="text" v-model="botText">
      </div>
    </div>
    <div class="button" @click="click">다운로드</div>
  </div>
</template>

<script>
import {Vue, Component} from 'vue-property-decorator'
import html2canvas from 'html2canvas'

@Component
export default class Home extends Vue {
  topText = '여자가⋯'
  botText = '말대꾸⁈'

  click() {
    html2canvas(document.querySelector("#jjal")).then(canvas => {
      let link = document.createElement('a');
      link.download = '짤방.png';
      link.href = canvas.toDataURL()
      link.click();
    });
  }
}
</script>

<style lang="scss" scoped>
#home {
  #jjal {
    width: 450px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  .background {
    height: 700px;
  }

  .editor {
    width: 450px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 16px;

    & > div {
      height: 50px;

      .label {
        line-height: 50px;
        display: inline-block;
        width: 65px;
        margin-right: 5px;
        font-weight: bold;
      }

      input {
        height: 30px;
        width: 100px;
        border: none;
        font-size: 16px;
        margin-right: 10px;
      }
    }
  }

  .text {
    width: 280px;
    height: 78px;
    line-height: 78px;
    font-size: 58px;
    font-weight: bold;
    text-align: center;
  }

  .top {
    position: absolute;
    top: 87px;
    left: 95px;
  }

  .bottom {
    position: absolute;
    top: 543px;
    left: 95px;
  }

  .button {
    height: 50px;
    width: 450px;
    text-align: center;
    border-radius: 10px;
    border: solid 1px black;
    line-height: 50px;
    font-size: 30px;
    cursor: pointer;

    &:hover {
      background-color: lightgray;
    }
  }
}
</style>
