import { computed, defineComponent, ref } from 'vue';
import {
  NeonActionMenu,
  NeonBadge,
  NeonButton,
  NeonCard,
  NeonCardBody,
  NeonCardHeader,
  NeonChip,
  NeonColor,
  NeonDatePicker,
  NeonDropZone,
  NeonField,
  NeonFieldGroup,
  NeonFile,
  NeonFilterList,
  NeonFunctionalColor,
  NeonInput,
  NeonInputIndicator,
  NeonLabel,
  NeonLinearProgress,
  NeonLink,
  NeonMenu,
  NeonNote,
  NeonNotificationCounter,
  NeonNumber,
  NeonRangeSlider,
  NeonSearch,
  type NeonSearchOption,
  NeonSelect,
  NeonSelectableCard,
  type NeonSelectOption,
  NeonSlider,
  NeonStepper,
  NeonSwitch,
  NeonTabs,
  NeonToggle,
  NeonToggleChip,
  type NeonToggleModel,
  NeonTreeMenu,
} from '@/neon';

export default defineComponent({
  name: 'KitchenSink',
  components: {
    NeonActionMenu,
    NeonBadge,
    NeonButton,
    NeonCard,
    NeonCardHeader,
    NeonCardBody,
    NeonChip,
    NeonColor,
    NeonDatePicker,
    NeonDropZone,
    NeonField,
    NeonFieldGroup,
    NeonFile,
    NeonFilterList,
    NeonInput,
    NeonInputIndicator,
    NeonLabel,
    NeonLinearProgress,
    NeonLink,
    NeonMenu,
    NeonNote,
    NeonNotificationCounter,
    NeonNumber,
    NeonRangeSlider,
    NeonSearch,
    NeonSelect,
    NeonSelectableCard,
    NeonSlider,
    NeonStepper,
    NeonSwitch,
    NeonTabs,
    NeonToggle,
    NeonToggleChip,
    NeonTreeMenu,
  },
  setup() {
    const disabled = ref<boolean>(false);
    const selectedPalette = ref<NeonFunctionalColor>(NeonFunctionalColor.LowContrast);
    const paletteOptions: Array<NeonSelectOption> = Object.entries(NeonFunctionalColor).map(([label, key]) => ({
      key,
      label: label === 'LowContrast' ? 'Low contrast' : label === 'HighContrast' ? 'High contrast' : label,
    }));

    const toggleModel: Array<NeonToggleModel> = [
      {
        key: 'opt-1',
        icon: 'align-left',
      },
      {
        key: 'opt-2',
        icon: 'align-center',
      },
      {
        key: 'opt-3',
        icon: 'align-right',
      },
    ];

    const radioButtonModel: Array<NeonToggleModel> = [
      {
        key: 'opt-1',
        label: 'Option 1',
      },
      {
        key: 'opt-2',
        label: 'Option 2',
      },
      {
        key: 'opt-3',
        label: 'Option 3',
      },
    ];

    const filterListItems = [
      {
        key: 'key1',
        label: 'Item 1',
        count: 5837,
      },
      {
        key: 'key2',
        label: 'Item 2',
        count: 433,
      },
      {
        key: 'key3',
        label: 'Item 3',
        count: 327,
      },
      {
        key: 'key4',
        label: 'Item 4',
        count: 100,
      },
      {
        key: 'key5',
        label: 'Item 5',
        count: 5837,
      },
      {
        key: 'key6',
        label: 'Item 6',
        count: 433,
      },
      {
        key: 'key7',
        label: 'Item 7',
        count: 327,
      },
      {
        key: 'key8',
        label: 'Item 8',
        count: 100,
      },
    ];

    const selectOptions = [
      {
        key: 'k1',
        label: 'Item 1',
        separatorBefore: true,
      },
      {
        key: 'k2',
        label: 'Item 2',
        separatorBefore: true,
      },
      {
        key: 'k3',
        label: 'Item 3',
        separatorBefore: true,
      },
      {
        key: 'k4',
        label: 'Item 4',
        separatorBefore: true,
      },
      {
        key: 'k5',
        label: 'Item 5',
        separatorBefore: true,
      },
      {
        key: 'k6',
        label: 'Item 6',
        disabled: true,
        separatorBefore: true,
      },
    ];

    const searchOptions = computed(() => [
      {
        key: 'k1',
        label: 'Item 1',
        separatorBefore: true,
        chipColor: selectedPalette.value,
      },
      {
        key: 'k2',
        label: 'Item 2',
        separatorBefore: true,
        chipColor: selectedPalette.value,
      },
      {
        key: 'k3',
        label: 'Item 3',
        separatorBefore: true,
        chipColor: selectedPalette.value,
      },
      {
        key: 'k4',
        label: 'Item 4',
        separatorBefore: true,
        chipColor: selectedPalette.value,
      },
      {
        key: 'k5',
        label: 'Item 5',
        separatorBefore: true,
        chipColor: selectedPalette.value,
      },
      {
        key: 'k6',
        label: 'Item 6',
        separatorBefore: true,
        chipColor: selectedPalette.value,
      },
    ]);

    const tabs = [
      {
        key: 'tab1',
        icon: 'user',
        label: 'Tab one',
      },
      {
        key: 'tab2',
        label: 'Tab two',
      },
      {
        key: 'tab3',
        label: 'Tab three',
      },
    ];

    const actionMenuModel = [
      {
        label: 'Option 1',
        key: 'option-1',
        count: 4322,
      },
      {
        label: 'Option 2',
        key: 'option-2',
        count: 42,
      },
      {
        label: 'Option 3',
        key: 'option-3',
        disabled: true,
        count: 911,
      },
    ];

    const testMenu = [
      {
        key: 'action-menu',
        label: 'Action Menu',
        href: '/navigation/action-menu',
      },
      {
        key: 'link',
        label: 'Link',
        href: '/navigation/link',
      },
      {
        key: 'menu',
        label: 'Menu',
        href: '/navigation/menu',
      },
      {
        key: 'click-link',
        icon: 'contrast',
        label: 'Click link',
      },
      {
        key: 'disabled',
        label: 'Disabled',
        disabled: true,
      },
      {
        key: 'tree-menu',
        label: 'Tree Menu',
        href: '/navigation/tree-menu',
        children: [
          {
            key: 'tree-menu-description',
            label: 'Description',
            href: '/navigation/tree-menu#description',
          },
          {
            key: 'tree-menu-api',
            label: 'API',
            href: '/navigation/tree-menu#api',
          },
          {
            key: 'tree-menu-examples',
            label: 'Examples',
            href: '/navigation/tree-menu#examples',
          },
        ],
      },
    ];

    const testTreeMenu = [
      {
        key: 'feedback',
        label: 'Feedback',
        expanded: false,
        children: [
          {
            key: 'alert',
            label: 'Alert',
            href: '/feedback/alert',
            anchors: ['Description', 'API', 'Examples'],
          },
          {
            key: 'note',
            label: 'Note',
            href: '/feedback/note',
            anchors: ['Description', 'API', 'Examples'],
          },
          {
            key: 'notification-counter',
            label: 'Notification Counter',
            href: '/feedback/notification-counter',
            anchors: ['Description', 'API', 'Examples'],
          },
        ],
      },
      {
        key: 'navigation',
        label: 'Navigation',
        expanded: true,
        children: [
          {
            key: 'action-menu',
            label: 'Action Menu',
            href: '/navigation/action-menu',
            anchors: ['Description', 'API', 'Examples'],
          },
          {
            key: 'dropdown-menu',
            label: 'Dropdown Menu',
            href: '/navigation/dropdown-menu',
            anchors: ['Description', 'API', 'Examples'],
          },
          {
            key: 'link',
            label: 'Link',
            href: '/navigation/link',
            anchors: ['Description', 'API', 'Examples'],
          },
          {
            key: 'tree-menu',
            label: 'Tree Menu',
            href: '/navigation/tree-menu',
            anchors: ['Description', 'API', 'Examples'],
          },
        ],
      },
    ];

    const selectedActionMenu = ref('option-1');

    const onPalette = (palette: NeonFunctionalColor) => {
      testSearch.value = testSearch.value.map((value) => ({ ...value, chipColor: palette }));
    };

    const filteredSearchOptions = computed(() =>
      searchOptions.value
        .filter((option) => !testSearch.value.includes(option))
        .filter((option) => option.label.toLowerCase().indexOf(searchFilter.value.toLowerCase()) >= 0),
    );

    const testNumber = ref<number>(42);
    const testRangeSlider = ref<Array<number>>([22, 86]);
    const testSlider = ref<number>(42);
    const testProgress = ref<number>(0.42);
    const testSelect = ref<string>('');
    const testSwitch = ref<boolean>(true);
    const testSelectableCard = ref<boolean>(true);
    const testSearch = ref<Array<NeonSearchOption>>([searchOptions.value[0]]);
    const searchFilter = ref<string>('');

    const testToggleChip = ref<boolean>(true);
    const testCheckbox = ref<boolean>(true);
    const testColor = ref<string>('#BADA55');
    const testInput = ref<string>('');
    const testIndicators = ref<string>('');
    const testTextarea = ref<string>('');
    const testDatePicker = ref<string>('2023-03-16');
    const testToggle = ref<string>(toggleModel[0].key);
    const testRadioButtons = ref<string>(toggleModel[0].key);
    const filterListModel = ref<Array<string>>([filterListItems[0].key]);
    const selectedTab = ref<string>('tab1');

    return {
      disabled,
      selectedPalette,
      paletteOptions,
      testSwitch,
      testCheckbox,
      testColor,
      testInput,
      testTextarea,
      testToggleChip,
      toggleModel,
      testToggle,
      testRadioButtons,
      radioButtonModel,
      testDatePicker,
      filterListItems,
      filterListModel,
      testIndicators,
      testNumber,
      testSlider,
      selectOptions,
      testSelect,
      testSearch,
      filteredSearchOptions,
      searchFilter,
      testProgress,
      tabs,
      selectedTab,
      selectedActionMenu,
      actionMenuModel,
      testMenu,
      testTreeMenu,
      testSelectableCard,
      testRangeSlider,
      onPalette,
    };
  },
});
