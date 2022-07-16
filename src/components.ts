import Vue, { VueConstructor } from 'vue';
import VueI18n from 'vue-i18n';

/* components */
import NeonActionMenu from './components/navigation/action-menu/NeonActionMenu.vue';
import NeonAlert from './components/feedback/alert/NeonAlert.vue';
import NeonAlertContainer from './components/feedback/alert/container/NeonAlertContainer.vue';
import NeonToastContainer from './components/feedback/alert/container/NeonToastContainer.vue';
import NeonAnchor from './components/navigation/anchor/NeonAnchor.vue';
import NeonBadge from './components/presentation/badge/NeonBadge.vue';
import NeonButton from './components/user-input/button/NeonButton.vue';
import NeonCard from './components/layout/card/NeonCard.vue';
import NeonCardBody from './components/layout/card/body/NeonCardBody.vue';
import NeonCardFooter from './components/layout/card/footer/NeonCardFooter.vue';
import NeonCardHeader from './components/layout/card/header/NeonCardHeader.vue';
import NeonChip from './components/user-input/chip/NeonChip.vue';
import NeonColor from './components/user-input/color/NeonColor.vue';
import NeonDialog from './components/feedback/dialog/NeonDialog.vue';
import NeonDrawer from './components/layout/drawer/NeonDrawer.vue';
import NeonDropdown from './components/presentation/dropdown/NeonDropdown.vue';
import NeonDropdownMenu from './components/navigation/dropdown-menu/NeonDropdownMenu.vue';
import NeonDropZone from './components/user-input/drop-zone/NeonDropZone.vue';
import NeonExpansionIndicator from './components/presentation/expansion-indicator/NeonExpansionIndicator.vue';
import NeonExpansionPanel from './components/presentation/expansion-panel/NeonExpansionPanel.vue';
import NeonFieldGroup from './components/user-input/field-group/NeonFieldGroup.vue';
import NeonFile from './components/user-input/file/NeonFile.vue';
import NeonFilterList from './components/user-input/filter-list/NeonFilterList.vue';
import NeonFooter from './components/layout/footer/NeonFooter.vue';
import NeonGrid from './components/layout/grid/NeonGrid.vue';
import NeonGridArea from './components/layout/grid/grid-area/NeonGridArea.vue';
import NeonIcon from './components/presentation/icon/NeonIcon.vue';
import NeonInput from './components/user-input/input/NeonInput.vue';
import NeonInputIndicator from './components/user-input/input-indicator/NeonInputIndicator.vue';
import NeonLabel from './components/presentation/label/NeonLabel.vue';
import NeonLink from './components/navigation/link/NeonLink.vue';
import NeonList from './components/user-input/list/NeonList.vue';
import NeonLogo from './components/presentation/logo/NeonLogo.vue';
import NeonMenu from './components/navigation/menu/NeonMenu.vue';
import NeonModal from './components/layout/modal/NeonModal.vue';
import NeonNote from './components/feedback/note/NeonNote.vue';
import NeonNotificationCounter from './components/feedback/notification-counter/NeonNotificationCounter.vue';
import NeonNumber from './components/user-input/number/NeonNumber.vue';
import NeonPage from './components/layout/page/NeonPage.vue';
import NeonPassword from './components/user-input/password/NeonPassword.vue';
import NeonLinearProgress from './components/feedback/linear-progress/NeonLinearProgress.vue';
import NeonRangeSlider from './components/user-input/range-slider/NeonRangeSlider.vue';
import NeonSideNav from './components/layout/side-nav/NeonSideNav.vue';
import NeonSearch from './components/user-input/search/NeonSearch.vue';
import NeonSelect from './components/user-input/select/NeonSelect.vue';
import NeonSkeletonLoader from './components/feedback/skeleton-loader/NeonSkeletonLoader.vue';
import NeonSlider from './components/user-input/slider/NeonSlider.vue';
import NeonSplashLoader from './components/feedback/splash-loader/NeonSplashLoader.vue';
import NeonSwitch from './components/user-input/switch/NeonSwitch.vue';
import NeonTab from './components/presentation/tabs/tab/NeonTab.vue';
import NeonTabs from './components/presentation/tabs/NeonTabs.vue';
import NeonToggle from './components/user-input/toggle/NeonToggle.vue';
import NeonToggleChip from './components/user-input/toggle-chip/NeonToggleChip.vue';
import NeonTooltip from './components/feedback/tooltip/NeonTooltip.vue';
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
import { NeonFilterListItem } from './common/models/NeonFilterListItem';
import { NeonFormattedDate } from './common/models/NeonFormattedDate';
import { NeonFunctionalColor } from './common/enums/NeonFunctionalColor';
import { NeonGridModel } from './common/models/NeonGridModel';
import { NeonHorizontalPosition } from './common/enums/NeonHorizontalPosition';
import { NeonIconRegistry } from './common/utils/NeonIconRegistry';
import { NeonInputMode } from './common/enums/NeonInputMode';
import { NeonInputType } from './common/enums/NeonInputType';
import { NeonLabelSize } from './common/enums/NeonLabelSize';
import { NeonListItem } from './common/models/NeonListItem';
import { NeonMenuItem } from './common/models/NeonMenuItem';
import { NeonMenuModel } from './common/models/NeonMenuModel';
import { NeonMode } from './common/enums/NeonMode';
import { NeonModeUtils } from './common/utils/NeonModeUtils';
import { NeonNumberFormatOptions } from './common/models/NeonNumberFormatOptions';
import { NeonNumberUtils } from './common/utils/NeonNumberUtils';
import { NeonOrientation } from './common/enums/NeonOrientation';
import { NeonOutlineStyle } from './common/enums/NeonOutlineStyle';
import { NeonPlacement } from './common/enums/NeonPlacement';
import { NeonPlacementUtils } from './common/utils/NeonPlacementUtils';
import { NeonPosition } from './common/enums/NeonPosition';
import { NeonPriorityMenuItem } from './components/navigation/menu/NeonPriorityMenuItem';
import { NeonResponsive } from './common/enums/NeonResponsive';
import { NeonResponsiveUtils } from './common/utils/NeonResponsiveUtils';
import { NeonSearchOption } from './common/models/NeonSearchOption';
import { NeonScrollUtils } from './common/utils/NeonScrollUtils';
import { NeonSelectGroup } from './common/models/NeonSelectGroup';
import { NeonSelectOption } from './common/models/NeonSelectOption';
import { NeonSize } from './common/enums/NeonSize';
import { NeonSplashLoaderSize } from './common/enums/NeonSplashLoaderSize';
import { NeonState } from './common/enums/NeonState';
import { NeonSwitchStyle } from './common/enums/NeonSwitchStyle';
import { NeonTabModel } from './common/models/NeonTabModel';
import { NeonTheme } from './common/enums/NeonTheme';
import { NeonToastMessage } from './common/models/NeonToastMessage';
import { NeonToastModel } from './components/feedback/alert/NeonToastModel';
import { NeonToastService } from './common/utils/NeonToastService';
import { NeonToggleModel } from './common/models/NeonToggleModel';
import { NeonToggleStyle } from './common/enums/NeonToggleStyle';
import { NeonTooltipPlacementUtils } from './common/utils/NeonTooltipPlacementUtils';
import { NeonTooltipStyle } from './common/enums/NeonTooltipStyle';
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
  NeonColor,
  NeonDialog,
  NeonDrawer,
  NeonDropdown,
  NeonDropdownMenu,
  NeonDropZone,
  NeonExpansionIndicator,
  NeonExpansionPanel,
  NeonFieldGroup,
  NeonFile,
  NeonFilterList,
  NeonFooter,
  NeonGrid,
  NeonGridArea,
  NeonIcon,
  NeonInput,
  NeonInputIndicator,
  NeonLabel,
  NeonLinearProgress,
  NeonLink,
  NeonList,
  NeonLogo,
  NeonMenu,
  NeonModal,
  NeonNote,
  NeonNotificationCounter,
  NeonNumber,
  NeonPage,
  NeonPassword,
  NeonRangeSlider,
  NeonSearch,
  NeonSelect,
  NeonSideNav,
  NeonSkeletonLoader,
  NeonSlider,
  NeonSplashLoader,
  NeonSwitch,
  NeonTab,
  NeonTabs,
  NeonToastContainer,
  NeonToggle,
  NeonToggleChip,
  NeonTooltip,
  NeonTopNav,
  NeonTreeMenu,
};

/**
 * register all components.
 */
function registerComponents() {
  Object.keys(components).forEach((k) => Vue.component(k, components[k]));
}

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
  NeonColor,
  NeonDateUtils,
  NeonDialog,
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
  NeonFilterList,
  NeonFilterListItem,
  NeonFormattedDate,
  NeonFooter,
  NeonFunctionalColor,
  NeonGrid,
  NeonGridArea,
  NeonGridModel,
  NeonIcon,
  NeonInput,
  NeonInputIndicator,
  NeonInputMode,
  NeonInputType,
  NeonHorizontalPosition,
  NeonIconRegistry,
  NeonLabel,
  NeonLabelSize,
  NeonLinearProgress,
  NeonLink,
  NeonList,
  NeonListItem,
  NeonLogo,
  NeonMenu,
  NeonMenuItem,
  NeonMenuModel,
  NeonModal,
  NeonMode,
  NeonModeUtils,
  NeonNote,
  NeonNotificationCounter,
  NeonNumber,
  NeonNumberFormatOptions,
  NeonNumberUtils,
  NeonOrientation,
  NeonOutlineStyle,
  NeonPage,
  NeonPassword,
  NeonPlacement,
  NeonPlacementUtils,
  NeonPosition,
  NeonPriorityMenuItem,
  NeonRangeSlider,
  NeonResponsive,
  NeonResponsiveUtils,
  NeonScrollUtils,
  NeonSearch,
  NeonSearchOption,
  NeonSelect,
  NeonSelectGroup,
  NeonSelectOption,
  NeonSideNav,
  NeonSize,
  NeonSkeletonLoader,
  NeonSlider,
  NeonSplashLoader,
  NeonSplashLoaderSize,
  NeonState,
  NeonSwitch,
  NeonSwitchStyle,
  NeonTab,
  NeonTabModel,
  NeonTabs,
  NeonTheme,
  NeonToastMessage,
  NeonToastModel,
  NeonToastService,
  NeonToggle,
  NeonToggleChip,
  NeonToggleModel,
  NeonToggleStyle,
  NeonTooltip,
  NeonTooltipPlacementUtils,
  NeonTooltipStyle,
  NeonTopNav,
  NeonTreeMenu,
  NeonTreeMenuLinkModel,
  NeonTreeMenuSectionModel,
  NeonVerticalPosition,
  registerComponents,
};
