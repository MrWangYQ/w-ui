<template>
  <div class="wui">
    <button @click="open">弹框</button>
    <wui-dialog
      :visible.sync='visible'>
      <div slot="footer">
        <w-button @click="cancel" type='primary' >确 认</w-button>
        <w-button @click="cancel">取 消</w-button>
      </div>
    </wui-dialog>
  </div>
</template>

<script>
import WuiDialog from '@/components/WuiDialog';
import WButton from '@/components/Button/Button';

export default {
  name: 'index',
  data() {
    return {
      visible: true,
    };
  },
  components: {
    WuiDialog,
    WButton,
  },
  methods: {
    open() {
      this.visible = true;
    },
    cancel() {
      this.visible = false;
    },
  },
};
</script>

<style>

</style>
