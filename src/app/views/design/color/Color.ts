import { defineComponent } from 'vue';
import { NeonAnchor, NeonCard, NeonCardBody, NeonCardHeader, NeonNote, NeonStack } from '@/neon';
import Editor from '@/app/components/editor/Editor.vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Color',
  components: {
    NeonAnchor,
    NeonCard,
    NeonCardHeader,
    NeonCardBody,
    NeonNote,
    NeonStack,
    Editor,
  },
  setup() {
    const example = `<div class="neon-color-text">This is the default text color</div>
<div class="color-example-inverse-bg neon-color-inverse">This is the inverse text color</div>
<div class="neon-color-brand">This is the brand text color</div>
<div class="neon-color-primary">This is the primary text color</div>
<div class="neon-color-info">This is the info text color</div>
<div class="neon-color-success">This is the success text color</div>
<div class="neon-color-warn">This is the warn text color</div>
<div class="neon-color-error">This is the error text color</div>
<div class="neon-color-neutral">This is the neutral text color</div>
<div class="neon-color-high-contrast">This is the high-contrast text color</div>
<div class="neon-color-low-contrast">This is the low-contrast text color</div>`;

    const colorPalette = `  --neon-rgb-brand-l5: 251, 240, 255; // #fbf0ff
  --neon-color-brand-l5: rgb(var(--neon-rgb-brand-l5));
  --neon-rgb-brand-l4: 250, 206, 255; // #faceff
  --neon-color-brand-l4: rgb(var(--neon-rgb-brand-l4));
  --neon-rgb-brand-l3: 244, 172, 255; // #f4acff
  --neon-color-brand-l3: rgb(var(--neon-rgb-brand-l3));
  --neon-rgb-brand-l2: 233, 137, 255; // #e989ff
  --neon-color-brand-l2: rgb(var(--neon-rgb-brand-l2));
  --neon-rgb-brand-l1: 218, 100, 255; // #da64ff
  --neon-color-brand-l1: rgb(var(--neon-rgb-brand-l1));
  --neon-rgb-brand-d1: 141, 7, 237; // #8d07ed
  --neon-color-brand-d1: rgb(var(--neon-rgb-brand-d1));
  --neon-rgb-brand-d2: 120, 29, 193; // #781dc1
  --neon-color-brand-d2: rgb(var(--neon-rgb-brand-d2));
  --neon-rgb-brand-d3: 90, 29, 140; // #5a1d8c
  --neon-color-brand-d3: rgb(var(--neon-rgb-brand-d3));
  --neon-rgb-brand-d4: 58, 26, 83; // #3a1a53
  --neon-color-brand-d4: rgb(var(--neon-rgb-brand-d4));
  --neon-rgb-brand-d5: 32, 25, 37; // #201925
  --neon-color-brand-d5: rgb(var(--neon-rgb-brand-d5));
`;

    return {
      example,
      colorPalette,
    };
  },
});
