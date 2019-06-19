<template>
  <div class="vui-dialog__content" v-if="visible" @click.prevent="closeModalDialog">
    <section class="vui-dialog" @click.stop :style="{ width: clientWidth }">
      <div class="vui-dialog__header vui-dialog-pd" :style="Header_footer_center">
        <span class="vui-dialog__title">{{ title }}</span>
        <button v-show="closeBtn" @click="closeDialog">
          <i></i>
        </button>
      </div>
      <div class="vui-dialog__body vui-dialog-pd">
        <slot></slot>
      </div>
      <div class="vui-dialog__footer vui-dialog-pd" :style="Header_footer_center">
        <slot name="footer"></slot>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "VuiDialog",
  props: {
    // 操作 展示隐藏
    visible: {
      type: Boolean,
      default: false
    },
    // title 展示
    title: {
      type: String,
      default: "自定义弹框"
    },
    // 控制 首部、尾部 是否居中
    center: {
      type: String,
      default: "false"
    },
    // 弹框宽度
    width: {
      type: String,
      default: "25%"
    },
    // 关闭之前的回调
    beforeClose: {
      type: Function,
      required: false
    },
    // 是否展示关闭图标 （X 叉号）
    showClose: {
      type: Boolean,
      default: false
    },
    // 是否 点击遮罩层 关闭
    closeClickModal: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      DialogFlag: false
    };
  },
  watch: {
    /*    visible(newVal, oldVal) {
            console.log(newVal, oldVal);
            if (newVal) {
                this.DialogFlag = false;
            } else {
                this.DialogFlag = true;
            }
            if (newVal && this.DialogFlag) {
                if (this.DialogFlag) {
                    this.DialogFlag = !newVal;
                } else {
                    this.DialogFlag = !this.DialogFlag;
                }
            } else {
                if (!this.DialogFlag) {
                    this.DialogFlag = !this.DialogFlag;
                } else {
                    this.DialogFlag = !this.DialogFlag;
                }
            }
        },*/
    visible(newVal, oldVal) {
      if (newVal) {
        this.$emit("open");
      } else {
        this.$emit("close");
      }
    }
  },
  computed: {
    // 定义首尾是否高度
    Header_footer_center() {
      return this.$props.center == "false" ? "" : "textAlign:center";
    },
    // 定义宽度
    clientWidth() {
      return this.width;
    },
    // 是否叉号展示
    closeBtn() {
      return this.showClose ? true : false;
    }
  },
  mounted() {},
  methods: {
    //  关闭前回调
    closeDialog() {
      console.log("叉号关闭");
      if (typeof this.beforeClose == "function") {
        // 是函数触发 关闭前的回调
        this.beforeClose(this.hideDialog);
      } else {
        // 不是函数直接关闭
        this.hideDialog();
      }
    },
    // 点击遮罩层 弹框关闭 方法
    closeModalDialog() {
      console.log("遮罩层入口");
      if (!this.closeClickModal) return;
      this.hideDialog();
    },
    // 触发关闭 更新状态
    hideDialog(cancel) {
      if (cancel !== false) {
        // 更新 弹框 状态
        this.$emit("update:visible", false);
      }
    },
    // 提交
    postFromData() {
      this.DialogFlag = false;
      this.hideDialog();
    }
  }
};
</script>

<style scoped lang='less'>
.vui-dialog__content {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(161, 163, 169, 0.3);
}
.vui-dialog {
  min-width: 341px;
  min-height: 130px;
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  margin: 5% auto;
  &__header {
    position: relative;
    font-size: 20px;
    button {
      position: absolute;
      right: 10px;
      border: 0px;
      padding: 0px;
      background: #ffffff;
      outline: none;
      cursor: pointer;
    }
    i {
      position: relative;
      display: inline-block;
      width: 14px;
      height: 14px;
      &::after {
        position: absolute;
        content: " ";
        width: 1px;
        height: 14px;
        background: red;
        transform: rotate(45deg);
      }
      &::before {
        position: absolute;
        content: " ";
        width: 1px;
        height: 14px;
        background: red;
        transform: rotate(-45deg);
      }
    }
  }
  // &__title {

  // }
  // &__body {

  // }
  &__footer {
    text-align: right;
    button:first-child {
      margin-right: 10px;
    }
    button:last-child {
      margin-left: 10px;
    }
  }
}
.vui-dialog-pd {
  padding: 10px 20px;
}
</style>
