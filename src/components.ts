import Vue, { VueConstructor } from 'vue';
import VueI18n from 'vue-i18n';

/* components */
import NeonActionMenu from './components/navigation/action-menu/NeonActionMenu.vue';
import NeonAlert from './components/feedback/alert/NeonAlert.vue';
import NeonAlertContainer from './components/feedback/alert/container/NeonAlertContainer.vue';
import NeonAnchor from './components/navigation/anchor/NeonAnchor.vue';
import NeonBadge from './components/presentation/badge/NeonBadge.vue';
import NeonButton from './components/user-input/button/NeonButton.vue';
import NeonCard from './components/layout/card/NeonCard.vue';
import NeonCardBody from './components/layout/card/body/NeonCardBody.vue';
import NeonCardFooter from './components/layout/card/footer/NeonCardFooter.vue';
import NeonCardHeader from './components/layout/card/header/NeonCardHeader.vue';
import NeonChip from './components/user-input/chip/NeonChip.vue';
import NeonDrawer from './components/layout/drawer/NeonDrawer.vue';
import NeonDropdown from './components/presentation/dropdown/NeonDropdown.vue';
import NeonDropdownMenu from './components/navigation/dropdown-menu/NeonDropdownMenu.vue';
import NeonDropZone from './components/user-input/drop-zone/NeonDropZone.vue';
import NeonExpansionIndicator from './components/presentation/expansion-indicator/NeonExpansionIndicator.vue';
import NeonExpansionPanel from './components/presentation/expansion-panel/NeonExpansionPanel.vue';
import NeonFieldGroup from './components/user-input/field-group/NeonFieldGroup.vue';
import NeonFile from './components/user-input/file/NeonFile.vue';
import NeonFooter from './components/layout/footer/NeonFooter.vue';
import NeonGrid from './components/layout/grid/NeonGrid.vue';
import NeonGridArea from './components/layout/grid/grid-area/NeonGridArea.vue';
import NeonIcon from './components/presentation/icon/NeonIcon.vue';
import NeonInput from './components/user-input/input/NeonInput.vue';
import NeonInputIndicator from './components/user-input/input-indicator/NeonInputIndicator.vue';
import NeonLabel from './components/presentation/label/NeonLabel.vue';
import NeonLink from './components/navigation/link/NeonLink.vue';
import NeonLogo from './components/presentation/logo/NeonLogo.vue';
import NeonModal from './components/layout/modal/NeonModal.vue';
import NeonNote from './components/feedback/note/NeonNote.vue';
import NeonNotificationCounter from './components/feedback/notification-counter/NeonNotificationCounter.vue';
import NeonPage from './components/layout/page/NeonPage.vue';
import NeonPassword from './components/user-input/password/NeonPassword.vue';
import NeonSideNav from './components/layout/side-nav/NeonSideNav.vue';
import NeonSkeletonLoader from './components/feedback/skeleton-loader/NeonSkeletonLoader.vue';
import NeonSwitch from './components/user-input/switch/NeonSwitch.vue';
import NeonTab from './components/presentation/tabs/tab/NeonTab.vue';
import NeonTabs from './components/presentation/tabs/NeonTabs.vue';
import NeonToggle from './components/user-input/toggle/NeonToggle.vue';
import NeonTopNav from './components/layout/top-nav/NeonTopNav.vue';
import NeonTreeMenu from './components/navigation/tree-menu/NeonTreeMenu.vue';

/* models and utils */
import { NeonActionMenuModel } from './common/models/NeonActionMenuModel';
import { NeonAlertAction } from './common/models/NeonAlertAction';
import { NeonAlertMessage } from './common/models/NeonAlertMessage';
import { NeonAlertModel } from './components/feedback/alert/NeonAlertModel';
import { NeonAlertLevel } from './common/enums/NeonAlertLevel';
import { NeonAlertPlacement } from './common/enums/NeonAlertPlacement';
import { NeonAlertService } from './common/utils/NeonAlertService';
import { NeonAvailableSpace } from './common/models/NeonAvailableSpace';
import { NeonButtonSize } from './common/enums/NeonButtonSize';
import { NeonButtonStyle } from './common/enums/NeonButtonStyle';
import { NeonChipAction } from './common/enums/NeonChipAction';
import { NeonClipboardService, NeonClipboardSupport } from './common/utils/NeonClipboardService';
import { NeonClosableUtils } from './common/utils/NeonClosableUtils';
import { NeonDateUtils } from './common/utils/NeonDateUtils';
import { NeonDropdownMenuItem } from './common/models/NeonDropdownMenuItem';
import { NeonDropdownPlacement } from './common/enums/NeonDropdownPlacement';
import { NeonDropdownPlacementObject } from './common/models/NeonDropdownPlacementObject';
import { NeonDropdownPlacementUtils } from './common/utils/NeonDropdownPlacementUtils';
import { NeonDropdownStyle } from './common/enums/NeonDropdownStyle';
import { NeonEventBus } from './common/utils/NeonEventBus';
import { NeonFormattedDate } from './common/models/NeonFormattedDate';
import { NeonFunctionalColor } from './common/enums/NeonFunctionalColor';
import { NeonGridModel } from './common/models/NeonGridModel';
import { NeonHorizontalPosition } from './common/enums/NeonHorizontalPosition';
import { NeonIconRegistry } from './common/utils/NeonIconRegistry';
import { NeonInputType } from './common/enums/NeonInputType';
import { NeonLabelSize } from './common/enums/NeonLabelSize';
import { NeonMode } from './common/enums/NeonMode';
import { NeonModeUtils } from './common/utils/NeonModeUtils';
import { NeonOrientation } from './common/enums/NeonOrientation';
import { NeonPlacement } from './common/enums/NeonPlacement';
import { NeonPlacementUtils } from './common/utils/NeonPlacementUtils';
import { NeonPosition } from './common/enums/NeonPosition';
import { NeonResponsive } from './common/enums/NeonResponsive';
import { NeonResponsiveUtils } from './common/utils/NeonResponsiveUtils';
import { NeonSize } from './common/enums/NeonSize';
import { NeonState } from './common/enums/NeonState';
import { NeonSwitchStyle } from './common/enums/NeonSwitchStyle';
import { NeonTabModel } from './common/models/NeonTabModel';
import { NeonToggleModel } from './common/models/NeonToggleModel';
import { NeonToggleStyle } from './common/enums/NeonToggleStyle';
import { NeonTreeMenuLinkModel, NeonTreeMenuSectionModel } from './common/models/NeonTreeMenuModel';
import { NeonVerticalPosition } from './common/enums/NeonVerticalPosition';

/* register default provided icons */
import { RegisterIcons } from './common/utils/RegisterIcons';
RegisterIcons.register();

Vue.use(VueI18n);

const components: { [s: string]: VueConstructor } = {
  NeonActionMenu,
  NeonAlert,
  NeonAlertContainer,
  NeonAnchor,
  NeonBadge,
  NeonButton,
  NeonCard,
  NeonCardBody,
  NeonCardFooter,
  NeonCardHeader,
  NeonChip,
  NeonDrawer,
  NeonDropdown,
  NeonDropdownMenu,
  NeonDropZone,
  NeonExpansionIndicator,
  NeonExpansionPanel,
  NeonFieldGroup,
  NeonFile,
  NeonFooter,
  NeonGrid,
  NeonGridArea,
  NeonIcon,
  NeonInput,
  NeonInputIndicator,
  NeonLabel,
  NeonLink,
  NeonLogo,
  NeonModal,
  NeonNote,
  NeonNotificationCounter,
  NeonPage,
  NeonPassword,
  NeonSideNav,
  NeonSkeletonLoader,
  NeonSwitch,
  NeonTab,
  NeonTabs,
  NeonToggle,
  NeonTopNav,
  NeonTreeMenu,
};

Object.keys(components).forEach((k) => Vue.component(k, components[k]));

export {
  NeonActionMenu,
  NeonActionMenuModel,
  NeonAlert,
  NeonAlertAction,
  NeonAlertContainer,
  NeonAlertLevel,
  NeonAlertMessage,
  NeonAlertModel,
  NeonAlertPlacement,
  NeonAlertService,
  NeonAnchor,
  NeonAvailableSpace,
  NeonBadge,
  NeonButton,
  NeonButtonSize,
  NeonButtonStyle,
  NeonCard,
  NeonCardBody,
  NeonCardFooter,
  NeonCardHeader,
  NeonChip,
  NeonChipAction,
  NeonClipboardService,
  NeonClipboardSupport,
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
  NeonEventBus,
  NeonExpansionIndicator,
  NeonExpansionPanel,
  NeonFieldGroup,
  NeonFile,
  NeonFormattedDate,
  NeonFooter,
  NeonFunctionalColor,
  NeonGrid,
  NeonGridArea,
  NeonGridModel,
  NeonIcon,
  NeonInput,
  NeonInputIndicator,
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
  NeonSkeletonLoader,
  NeonState,
  NeonSwitch,
  NeonSwitchStyle,
  NeonTab,
  NeonTabModel,
  NeonTabs,
  NeonToggle,
  NeonToggleModel,
  NeonToggleStyle,
  NeonTopNav,
  NeonTreeMenu,
  NeonTreeMenuLinkModel,
  NeonTreeMenuSectionModel,
  NeonVerticalPosition,
};
