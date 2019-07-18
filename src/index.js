import WuiDialog from './components/WuiDialog/WuiDialog';
import WButton from './components/Button/Button';
// ...如果还有的话继续添加

const components = [
  WuiDialog,
  WButton,
  // ...如果还有的话继续添加
];

const install = function (Vue, opts = {}) {
  components.map((component) => {
    Vue.component(component.name, component);
    return component.name;
  });
};

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  WuiDialog,
  WButton,
  // ...如果还有的话继续添加
};
