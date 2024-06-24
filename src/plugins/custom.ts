import { h } from 'vue';
import type { IconSet, IconAliases, IconProps } from 'vuetify';

const aliases = {
  radioOn: 'ph-check-circle',
  radioOff: 'ph-circle',
  collapse: '...',
  complete: '...',
  cancel: 'ph-x',
  close: 'ph-x',
  delete: '...',
  clear: '...',
  success: '...',
  info: '...',
  warning: 'ph-warning-circle',
  error: 'ph-x-circle',
  prev: '...',
  next: '...',
  checkboxOn: '...',
  checkboxOff: '...',
  checkboxIndeterminate: '...',
  delimiter: 'ph-dot',
  sort: '...',
  expand: '...',
  menu: '...',
  subgroup: '...',
  dropdown: '...',
  edit: '...',
  ratingEmpty: '...',
  ratingFull: '...',
  ratingHalf: '...',
  loading: '...',
  first: '...',
  last: '...',
  unfold: '...',
  file: '...',
  plus: '...',
  minus: '...',
}

const phospor: IconSet = {
  component: (props: IconProps) => h(props.tag, { class: ['ph-fill', props.icon] }),
};

export { aliases, phospor };
