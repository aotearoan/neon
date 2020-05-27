import Vue, { VueConstructor } from 'vue';
import VueI18n from 'vue-i18n';

/* components */
import NeonActionMenu from './components/navigation/action-menu/NeonActionMenu.vue';
import NeonBadge from './components/presentation/badge/NeonBadge.vue';
import NeonButton from './components/user-input/button/NeonButton.vue';
import NeonCard from './components/layout/card/NeonCard.vue';
import NeonCardBody from './components/layout/card/body/NeonCardBody.vue';
import NeonCardHeader from './components/layout/card/header/NeonCardHeader.vue';
import NeonCheckbox from './components/user-input/checkbox/NeonCheckbox.vue';
import NeonFooter from './components/layout/footer/NeonFooter.vue';
import NeonGrid from './components/layout/grid/NeonGrid.vue';
import NeonGridArea from './components/layout/grid/grid-area/NeonGridArea.vue';
import NeonIcon from './components/design/icon/NeonIcon.vue';
import NeonTreeMenu from './components/navigation/tree-menu/NeonTreeMenu.vue';
import NeonTreeMenuItem from './components/navigation/tree-menu/item/NeonTreeMenuItem.vue';
import NeonLabel from './components/presentation/label/NeonLabel.vue';
import NeonLink from './components/navigation/link/NeonLink.vue';
import NeonLogo from './components/design/logo/NeonLogo.vue';
import NeonNote from './components/feedback/note/NeonNote.vue';
import NeonPage from './components/layout/page/NeonPage.vue';
import NeonSideNav from './components/layout/side-nav/NeonSideNav.vue';
import NeonSwitch from './components/user-input/switch/NeonSwitch.vue';
import NeonTopNav from './components/layout/top-nav/NeonTopNav.vue';

/* models and utils */
import { NeonActionMenuModel } from './components/navigation/action-menu/NeonActionMenuModel';
import { NeonButtonStyle } from './components/user-input/button/NeonButtonStyle';
import { NeonCheckboxStyle } from './components/user-input/checkbox/NeonCheckboxStyle';
import { NeonDateUtils } from './components/common/NeonDateUtils';
import { NeonFormattedDate } from './components/common/NeonFormattedDate';
import { NeonFunctionalColor } from './components/common/NeonFunctionalColor';
import { NeonGridModel } from './components/layout/grid/NeonGridModel';
import { NeonIconPosition } from './components/design/icon/NeonIconPosition';
import { NeonIconRegistry } from './components/design/icon/NeonIconRegistry';
import { NeonTreeMenuModel } from './components/navigation/tree-menu/NeonTreeMenuModel';
import { NeonMode } from './components/common/NeonMode';
import { NeonOrientation } from './components/common/NeonOrientation';
import { NeonResponsive } from './components/layout/grid/NeonResponsive';
import { NeonLabelSize } from './components/presentation/label/NeonLabelSize';
import { NeonSize } from './components/common/NeonSize';

/* register default provided icons */
import { RegisterIcons } from './components/design/icon/RegisterIcons';
RegisterIcons.register();

Vue.use(VueI18n);

const components: { [s: string]: VueConstructor } = {
  NeonActionMenu,
  NeonBadge,
  NeonButton,
  NeonCard,
  NeonCardBody,
  NeonCardHeader,
  NeonCheckbox,
  NeonFooter,
  NeonGrid,
  NeonGridArea,
  NeonIcon,
  NeonTreeMenu,
  NeonTreeMenuItem,
  NeonLabel,
  NeonLink,
  NeonLogo,
  NeonNote,
  NeonPage,
  NeonSideNav,
  NeonSwitch,
  NeonTopNav,
};

Object.keys(components).forEach((k) => Vue.component(k, components[k]));

export {
  NeonActionMenu,
  NeonActionMenuModel,
  NeonBadge,
  NeonButton,
  NeonButtonStyle,
  NeonCard,
  NeonCardBody,
  NeonCardHeader,
  NeonCheckbox,
  NeonCheckboxStyle,
  NeonDateUtils,
  NeonFormattedDate,
  NeonFooter,
  NeonFunctionalColor,
  NeonGrid,
  NeonGridArea,
  NeonGridModel,
  NeonIcon,
  NeonIconPosition,
  NeonIconRegistry,
  NeonTreeMenu,
  NeonTreeMenuItem,
  NeonTreeMenuModel,
  NeonLabel,
  NeonLabelSize,
  NeonLink,
  NeonLogo,
  NeonMode,
  NeonNote,
  NeonOrientation,
  NeonPage,
  NeonResponsive,
  NeonSideNav,
  NeonSize,
  NeonSwitch,
  NeonTopNav,
};
