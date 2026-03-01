import { computed, defineComponent, onMounted, onUnmounted, ref, watch } from 'vue';
import { Menu } from './Menu';
import type { NeonTreeMenuItemModel, NeonTreeMenuSectionModel } from '@/neon';
import {
  NeonButton,
  NeonDrawer,
  NeonExpansionPanel,
  NeonFooter,
  NeonGrid,
  NeonGridArea,
  NeonIcon,
  NeonInput,
  NeonLink,
  NeonMode,
  NeonModeUtils,
  NeonPage,
  NeonResponsive,
  NeonResponsiveUtils,
  NeonSideNav,
  NeonSwitch,
  NeonTopNav,
  NeonTreeMenu,
} from '@/neon';
import { useRoute, useRouter } from 'vue-router';
import { version } from '@/../version';

export interface AppMenuGroup {
  group: string;
  expanded: boolean;
  children: NeonTreeMenuSectionModel[];
}

export interface AppMenuLinkModel extends NeonTreeMenuItemModel {
  keywords?: string;
}

export default defineComponent({
  name: 'App',
  components: {
    NeonButton,
    NeonTopNav,
    NeonIcon,
    NeonSwitch,
    NeonPage,
    NeonSideNav,
    NeonTreeMenu,
    NeonFooter,
    NeonGrid,
    NeonGridArea,
    NeonDrawer,
    NeonInput,
    NeonLink,
    NeonExpansionPanel,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();

    const modes = Object.values(NeonMode);
    const modeIcons = ['light-mode-sunny', 'astrology-moon', 'contrast'];
    const selectedModeIndex = ref(2);
    const indexModel = ref<Array<AppMenuGroup>>([]);
    const indexFilter = ref('');
    const menuOpen = ref(false);
    const isMobile = ref(false);
    const isTablet = ref(false);

    const expandAll = computed(() => indexFilter.value.length > 0);

    const lowercaseFilter = computed(() => (indexFilter.value || '').toLowerCase());

    const filterLink = (item: AppMenuLinkModel): NeonTreeMenuItemModel | undefined => {
      const searchString =
        item.label.toString() +
        (item.keywords ? item.keywords.toString() : '') +
        (item.subMenu ? item.subMenu.map((sm) => sm.label).join(' ') : '');
      return searchString.toLowerCase().indexOf(lowercaseFilter.value) >= 0 ? item : undefined;
    };

    const filterSection = (item: NeonTreeMenuSectionModel): NeonTreeMenuSectionModel | undefined => {
      const children: NeonTreeMenuItemModel[] = [];
      if (item.children) {
        item.children.forEach((child) => {
          const filteredChild = filterLink(child);
          if (filteredChild) {
            children.push(filteredChild);
          }
        });
      }

      return children.length > 0
        ? { ...item, children }
        : item.label.toString().toLowerCase().indexOf(lowercaseFilter.value) >= 0
        ? item
        : undefined;
    };

    const filteredModel = computed((): AppMenuGroup[] => {
      const groups: AppMenuGroup[] = [];

      if (indexFilter.value && indexFilter.value.length > 0) {
        indexModel.value.forEach((group) => {
          const children: NeonTreeMenuSectionModel[] = [];
          group.children.forEach((item) => {
            const filteredItem = filterSection(item);
            if (filteredItem) {
              children.push(filteredItem);
            }
          });

          if (children.length > 0) {
            const filteredGroup = {
              group: group.group,
              expanded: true,
              children,
            };
            groups.push(filteredGroup);
          }
        });
      } else {
        groups.push(...indexModel.value);
      }

      return groups;
    });

    const layouts = ref([
      {
        breakpoint: NeonResponsive.All,
        grid: [['section-content']],
      },
    ]);

    const versionString = `v${version}`;

    const toggleMode = () => {
      selectedModeIndex.value = (selectedModeIndex.value + 1) % modes.length;
      const mode = modes[selectedModeIndex.value];
      localStorage.setItem('mode', mode);
      NeonModeUtils.switchMode(mode);
    };

    const selectedModeIcon = computed(() => modeIcons[selectedModeIndex.value]);

    const handleResize = () => {
      isMobile.value = window.matchMedia(NeonResponsiveUtils.breakpoints[NeonResponsive.MobileLarge]).matches;
      isTablet.value = window.matchMedia(NeonResponsiveUtils.breakpoints[NeonResponsive.Tablet]).matches;
    };

    onMounted(async () => {
      const path = localStorage.getItem('path');
      if (path) {
        localStorage.removeItem('path');
        await router.push({ path: path.replace('neon', '') });
      }

      const savedMode = localStorage.getItem('mode') as NeonMode;
      selectedModeIndex.value = modes.indexOf(savedMode ?? NeonMode.System);
      NeonModeUtils.init(savedMode ?? NeonMode.System);
      window.addEventListener('resize', handleResize, { passive: true });
      handleResize();

      indexModel.value = Menu.menu().map((group) => ({
        group: group.group,
        expanded: false,
        children: group.children.map((item) => ({
          label: item.name || item.page || item.path,
          key: item.path,
          children: item.children?.map((child) => ({
            label: child.name || child.page || child.path,
            key: child.path,
            keywords:
              (child.keywords || '') +
              (child.component ? ` ${child.component.toLowerCase()}` : '') +
              (child.subComponents ? '' + child.subComponents.map((sc) => sc.name.toLowerCase()).join(' ') : ''),
            href: `/${item.path}/${child.path}`,
            subMenu: child.anchors?.map((anchor) => ({
              label: anchor,
              href: `/${item.path}/${child.path}#${anchor.toLowerCase().replace(/\\s/g, '-')}`,
            })),
          })),
        })),
      }));
    });

    onUnmounted(() => {
      NeonModeUtils.destroy();
      window.removeEventListener('resize', handleResize);
    });

    watch(
      () => route.path,
      (to: string) => {
        menuOpen.value = false;
        const [_to, key, childKey] = to.split('/');
        indexModel.value
          .filter((group) => group.children.find((section) => section.key === key))
          .forEach((group) => {
            group.expanded = true;
            group.children
              .filter((section) => section.key === key)
              .forEach((section) => {
                section.expanded = true;
              });
            group.children = [
              ...group.children.map((item) => ({
                ...item,
                children: item.children?.map((item) => ({ ...item, expanded: item.key === childKey })),
              })),
            ];
          });
        indexModel.value = [...indexModel.value];
      },
      { immediate: true },
    );

    watch(
      () => route.hash,
      (to: string) => {
        setTimeout(() => {
          if (to) {
            const el = document.getElementById(to.substring(1));
            if (el) {
              el.scrollIntoView();
            }
          } else {
            window.scrollTo(0, 0);
          }
        }, 250);
      },
      { immediate: false },
    );

    return {
      selectedModeIndex,
      selectedModeIcon,
      indexModel,
      indexFilter,
      menuOpen,
      isMobile,
      isTablet,
      layouts,
      versionString,
      filteredModel,
      expandAll,
      toggleMode,
    };
  },
});
