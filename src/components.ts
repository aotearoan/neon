import Vue, { VueConstructor } from 'vue';
import VueI18n from 'vue-i18n';

/* components */
import NeonActionMenu from './components/navigation/action-menu/NeonActionMenu.vue';
import NeonAlert from './components/feedback/alert/NeonAlert.vue';
import NeonBadge from './components/presentation/badge/NeonBadge.vue';
import NeonButton from './components/user-input/button/NeonButton.vue';
import NeonCard from './components/layout/card/NeonCard.vue';
import NeonCardBody from './components/layout/card/body/NeonCardBody.vue';
import NeonCardFooter from './components/layout/card/footer/NeonCardFooter.vue';
import NeonCardHeader from './components/layout/card/header/NeonCardHeader.vue';
import NeonDrawer from './components/layout/drawer/NeonDrawer.vue';
import NeonDropdown from './components/presentation/dropdown/NeonDropdown.vue';
import NeonDropdownMenu from './components/presentation/dropdown-menu/NeonDropdownMenu.vue';
import NeonDropZone from './components/user-input/drop-zone/NeonDropZone.vue';
import NeonExpansionIndicator from './components/presentation/expansion-indicator/NeonExpansionIndicator.vue';
import NeonFile from './components/user-input/file/NeonFile.vue';
import NeonFooter from './components/layout/footer/NeonFooter.vue';
import NeonGrid from './components/layout/grid/NeonGrid.vue';
import NeonGridArea from './components/layout/grid/grid-area/NeonGridArea.vue';
import NeonIcon from './components/design/icon/NeonIcon.vue';
import NeonInput from './components/user-input/input/NeonInput.vue';
import NeonLabel from './components/presentation/label/NeonLabel.vue';
import NeonLink from './components/navigation/link/NeonLink.vue';
import NeonLogo from './components/design/logo/NeonLogo.vue';
import NeonModal from './components/layout/modal/NeonModal.vue';
import NeonNote from './components/feedback/note/NeonNote.vue';
import NeonNotificationCounter from './components/presentation/notification-counter/NeonNotificationCounter.vue';
import NeonPage from './components/layout/page/NeonPage.vue';
import NeonPassword from './components/user-input/password/NeonPassword.vue';
import NeonSideNav from './components/layout/side-nav/NeonSideNav.vue';
import NeonSwitch from './components/user-input/switch/NeonSwitch.vue';
import NeonToggle from './components/user-input/toggle/NeonToggle.vue';
import NeonTopNav from './components/layout/top-nav/NeonTopNav.vue';
import NeonTreeMenu from './components/navigation/tree-menu/NeonTreeMenu.vue';
import NeonTreeMenuItem from './components/navigation/tree-menu/item/NeonTreeMenuItem.vue';

/* models and utils */
import { NeonActionMenuModel } from './common/models/NeonActionMenuModel';
import { NeonAlertService } from './components/feedback/alert/NeonAlert';
import { NeonAvailableSpace } from './common/models/NeonAvailableSpace';
import { NeonButtonStyle } from './common/enums/NeonButtonStyle';
import { NeonClosableUtils } from './common/utils/NeonClosableUtils';
import { NeonDateUtils } from './common/utils/NeonDateUtils';
import { NeonDropdownMenuItem } from './common/models/NeonDropdownMenuItem';
import { NeonDropdownPlacement } from './common/enums/NeonDropdownPlacement';
import { NeonDropdownPlacementObject } from './common/models/NeonDropdownPlacementObject';
import { NeonDropdownPlacementUtils } from './common/utils/NeonDropdownPlacementUtils';
import { NeonDropdownStyle } from './common/enums/NeonDropdownStyle';
import { NeonFormattedDate } from './common/models/NeonFormattedDate';
import { NeonFunctionalColor } from './common/enums/NeonFunctionalColor';
import { NeonGridModel } from './common/models/NeonGridModel';
import { NeonHorizontalPosition } from './common/enums/NeonHorizontalPosition';
import { NeonIconRegistry } from './common/utils/NeonIconRegistry';
import { NeonInputType } from './common/enums/NeonInputType';
import { NeonState } from './common/enums/NeonState';
import { NeonMode } from './common/enums/NeonMode';
import { NeonModeUtils } from './common/utils/NeonModeUtils';
import { NeonOrientation } from './common/enums/NeonOrientation';
import { NeonPlacement } from './common/enums/NeonPlacement';
import { NeonPlacementUtils } from './common/utils/NeonPlacementUtils';
import { NeonPosition } from './common/enums/NeonPosition';
import { NeonResponsive } from './common/enums/NeonResponsive';
import { NeonResponsiveUtils } from './common/utils/NeonResponsiveUtils';
import { NeonLabelSize } from './common/enums/NeonLabelSize';
import { NeonSize } from './common/enums/NeonSize';
import { NeonSwitchStyle } from './common/enums/NeonSwitchStyle';
import { NeonToggleModel } from './common/models/NeonToggleModel';
import { NeonToggleStyle } from './common/enums/NeonToggleStyle';
import { NeonTreeMenuModel } from './common/models/NeonTreeMenuModel';

/* register default provided icons */
import { RegisterIcons } from './common/utils/RegisterIcons';
RegisterIcons.register();

Vue.use(VueI18n);

const components: { [s: string]: VueConstructor } = {
  NeonActionMenu,
  NeonAlert,
  NeonBadge,
  NeonButton,
  NeonCard,
  NeonCardBody,
  NeonCardFooter,
  NeonCardHeader,
  NeonDrawer,
  NeonDropdown,
  NeonDropdownMenu,
  NeonDropZone,
  NeonExpansionIndicator,
  NeonFile,
  NeonFooter,
  NeonGrid,
  NeonGridArea,
  NeonIcon,
  NeonInput,
  NeonLabel,
  NeonLink,
  NeonLogo,
  NeonModal,
  NeonNote,
  NeonNotificationCounter,
  NeonPage,
  NeonPassword,
  NeonSideNav,
  NeonSwitch,
  NeonToggle,
  NeonTopNav,
  NeonTreeMenu,
  NeonTreeMenuItem,
};

Object.keys(components).forEach((k) => Vue.component(k, components[k]));

export {
  NeonActionMenu,
  NeonActionMenuModel,
  NeonAlert,
  NeonAlertService,
  NeonAvailableSpace,
  NeonBadge,
  NeonButton,
  NeonButtonStyle,
  NeonCard,
  NeonCardBody,
  NeonCardFooter,
  NeonCardHeader,
  NeonClosableUtils,
  NeonDateUtils,
  NeonDrawer,
  NeonDropdown,
  NeonDropdownMenu,
  NeonDropdownMenuItem,
  NeonDropdownPlacement,
  NeonDropdownPlacementObject,
  NeonDropdownPlacementUtils,
  NeonDropdownStyle,
  NeonDropZone,
  NeonExpansionIndicator,
  NeonFile,
  NeonFormattedDate,
  NeonFooter,
  NeonFunctionalColor,
  NeonGrid,
  NeonGridArea,
  NeonGridModel,
  NeonIcon,
  NeonInput,
  NeonInputType,
  NeonHorizontalPosition,
  NeonIconRegistry,
  NeonLabel,
  NeonLabelSize,
  NeonLink,
  NeonLogo,
  NeonModal,
  NeonMode,
  NeonModeUtils,
  NeonNote,
  NeonNotificationCounter,
  NeonOrientation,
  NeonPage,
  NeonPassword,
  NeonPlacement,
  NeonPlacementUtils,
  NeonPosition,
  NeonResponsive,
  NeonResponsiveUtils,
  NeonSideNav,
  NeonSize,
  NeonState,
  NeonSwitch,
  NeonSwitchStyle,
  NeonToggle,
  NeonToggleModel,
  NeonToggleStyle,
  NeonTopNav,
  NeonTreeMenu,
  NeonTreeMenuItem,
  NeonTreeMenuModel,
};
