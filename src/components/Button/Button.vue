<template>
  <button
    :class="cl(
            'o-button',
            type,
            size,
            sharp,
            disabled,
            bold,
        )"
    :disabled="disabled"
    :type="nativeType"
    ref="button"
    @click="$emit('click')"
  >
    <!--  -->
    <span class="o-button__text">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'WButton',
  props: {
    type: {
      validator(value) {
        return (
          ['default', 'primary', 'danger', 'brilliant', 'text'].indexOf(value) !== -1
        );
      },
      default: 'default',
    },
    size: {
      validator(value) {
        return ['default', 'large', 'small', 'mini'].indexOf(value) !== -1;
      },
      default: 'default',
    },
    sharp: Boolean,
    disabled: Boolean,
    bold: Boolean,
    nativeType: {
      validator(value) {
        return ['submit', 'button', 'reset'].indexOf(value) !== -1;
      },
      default: 'button',
    },
    hover: {
      type: String,
      default: '#3C9CE6',
    },
  },

  methods: {
    cl(block, type, size, sharp, disabled, bold) {
      const result = [block];
      if (type !== 'default') result.push(`${block}--${type}`);
      if (size !== 'default') result.push(`${block}--${size}`);
      if (bold) result.push(`${block}--bold`);
      if (sharp) result.push(`${block}--sharp`);
      if (disabled) result.push(`${block}--disabled`);
      return result.join(' ');
    },
    over() {
      this.$refs.button.style.color = this.hover;
    },
    out() {
      this.$refs.button.style.color = '#303030';
    },
  },
};
</script>

<style lang='less'>
@import "../../assets/css/variable";

.o-button {
  position: relative;
  display: inline-block;
  background: #ffffff;
  border: 1px solid @border-color;
  border-radius: 4px;
  box-sizing: border-box;
  text-align: center;
  user-select: none;
  outline: none;
  cursor: pointer;
  -webkit-appearance: none;
  padding: 8px 30px;
  margin: 0 5px;
  font-size: 14px;
  color: @default-color;
  transition: all 0.25s;

  &--primary {
    color: @button-primary-color;
    background-color: @button-primary-background-color;
    border: 1px solid @button-primary-border-color;
  }

  &--brilliant {
    color: @button-brilliant-color;
    background-color: @button-brilliant-background-color;
    border: 1px solid @button-brilliant-border-color;
  }

  &--text {
    color: @button-text-color;
    background-color: transparent;
    border: none;
    &::before {
      display: none;
    }
  }

  &--danger {
    color: @button-danger-color;
    background-color: @button-danger-background-color;
    border: 1px solid @button-danger-border-color;
  }

  &--large {
    width: 100%;
    height: 54px;
    font-size: 18px;
    line-height: 52px;
    border-radius: 12px;
  }

  &--mini {
    min-width: 56px;
    padding: 4px 10px;
    font-size: 12px;
    border-radius: 3px;
  }

  &--bold {
    font-weight: 500;
  }

  &--sharp {
    border-radius: 0;
  }

  &--disabled {
    color: @button-disabled-color;
    background-color: @button-disabled-background-color;
    border: 1px solid @button-disabled-border-color;
    &:active::before {
      opacity: 0;
    }
  }
}
</style>
