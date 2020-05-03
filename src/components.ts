import Vue, { VueConstructor } from 'vue';
import NeonCard from './components/layout/card/NeonCard.vue';
import NeonCardBody from './components/layout/card/body/NeonCardBody.vue';
import NeonCardHeader from './components/layout/card/header/NeonCardHeader.vue';
import NeonFooter from './components/layout/footer/NeonFooter.vue';
import NeonGrid from './components/layout/grid/NeonGrid.vue';
import NeonGridArea from './components/layout/grid/grid-area/NeonGridArea.vue';
import NeonLogo from './components/design/logo/NeonLogo.vue';
import NeonPage from './components/layout/page/NeonPage.vue';
import NeonTopNav from './components/layout/top-nav/NeonTopNav.vue';

/* models */
import { NeonColor } from './components/common/NeonColor';
import { NeonColorUtils } from './components/common/NeonColorUtils';
import { NeonGridModel } from './components/layout/grid/NeonGridModel';
import { NeonOrientation } from './components/common/NeonOrientation';
import { NeonResponsive } from './components/layout/grid/NeonResponsive';

const components: { [s: string]: VueConstructor } = {
  NeonCard,
  NeonCardBody,
  NeonCardHeader,
  NeonFooter,
  NeonGrid,
  NeonGridArea,
  NeonLogo,
  NeonPage,
  NeonTopNav,
};

Object.keys(components).forEach(k => Vue.component(k, components[k]));

export {
  NeonCard,
  NeonCardBody,
  NeonCardHeader,
  NeonColor,
  NeonColorUtils,
  NeonFooter,
  NeonGrid,
  NeonGridArea,
  NeonGridModel,
  NeonLogo,
  NeonOrientation,
  NeonPage,
  NeonResponsive,
  NeonTopNav,
};
