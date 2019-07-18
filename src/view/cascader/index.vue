<template>
  <div class="cascader">
    <div class="cascader-content">
      <div class="cascader-active">
        <span
          v-for="(item, index) in selectData"
          :key='index'>
          {{ item.label }}
          <i
            class="cursor-pointer"
            @click='delAccountData(item)'>×</i>
        </span>
      </div>
      <div class="cascader-btn">
        <w-button
          type="primary"
          @click="openCascader"
        >Cascader</w-button>
      </div>
    </div>
    <div
      v-if="resultListFlag"
      class="cascader-result">
      <p class="cascader-result-search">
        <input
          type="text"
          v-model="searchAddAccount"
          @change="funzyquery(searchAddAccount)">
      </p>
      <ul class="cascader-result-list">
        <li
          v-for="(item, index) in resultData"
          :key="index">
          <input
            :id='"checkbox" + index'
            type="checkbox"
            v-model="item.checked"
            @change="resultDataChange(item)">
          <label :for='"checkbox"+ index'>{{ item.label }}</label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import WButton from '@/components/Button/Button';

export default {
  name: 'cascader',
  data() {
    return {
      searchAddAccount: '',
      resultData: [],
      accountData: [],
      selectData: [],
      resultListFlag: false,
    };
  },
  components: {
    WButton,
  },
  methods: {
    openCascader() {
      const defaultData = [
        { label: '清风', value: 'qingfeng' },
        { label: '可乐', value: 'kele' },
        { label: '陆校长', value: 'luxiaozhang' },
        { label: '月儿', value: 'yueer' },
        { label: '麦子', value: 'maizi' },
        { label: '阳儿', value: 'yanger' },
        { label: '小子', value: 'xiaozi' },
        { label: '乐乐', value: 'lele' },
      ];
      this.resultListFlag = true;
      this.resultData = defaultData;
    },
    resultDataChange(val) {
      this.selectData = this.resultData.filter((item, index, arr) => {
        if (item.checked) {
          return item;
        }
        return '';
      });
    },
    funzyquery(account) {
      if (account) {
        this.resultData = this.resultData.filter((item, index) => {
          if (item.label === account) {
            return item;
          }
          return '';
        });
      }
      // console.log(account, 'account', this.resultData);
    },
    delAccountData(val) {
      this.selectData = this.selectData.filter((item, index) => {
        if (item.username !== val.username) {
          return item;
        }
        return '';
      });
    },
  },
};
</script>

<style lang='scss' scoped>
.cascader {
  position: relative;
  padding: 0px 20px;
  &-input {
    span {
      margin: 5px;
      padding: 5px 10px;
      border: 1px solid #ccc;
    }
    .add-acount {
      display: block;
    }
  }
  &-content {

  }
  &-active {
    min-height: 50px;
  }
  &-result {
    position: absolute;
    left: 20px;
    top: 40px;
    z-index: 10;
    padding: 10px;
    box-shadow: 0 0 5px #c9c9c9;
    background: #ffffff;
    &-search {
      margin: 5px 0px;
    }
    &-list {
      li {
        padding: 0px 5px;
        line-height: 40px;
        border-bottom: 1px solid #ccc;
        &:not(.avtive):hover {
          background: #eeeeee;
        }
      }
    }
  }
}
</style>
