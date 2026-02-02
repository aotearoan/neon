import { computed, defineComponent, onMounted, onUnmounted, ref, watch } from 'vue';
import { Menu } from './Menu';
import type { NeonTreeMenuLinkModel, NeonTreeMenuSectionModel } from '@/neon';
import {
  NeonAlert,
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

export interface AppMenuLinkModel extends NeonTreeMenuLinkModel {
  keywords?: string;
}

export default defineComponent({
  name: 'App',
  components: {
    NeonAlert,
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

    const selectedMode = ref(NeonMode.Dark);
    const indexModel = ref<Array<AppMenuGroup>>([]);
    const indexFilter = ref('');
    const menuOpen = ref(false);
    const isMobile = ref(false);
    const isTablet = ref(false);

    const expandAll = computed(() => indexFilter.value.length > 0);

    const lowercaseFilter = computed(() => (indexFilter.value || '').toLowerCase());

    const filterLink = (item: AppMenuLinkModel): NeonTreeMenuLinkModel | undefined => {
      const searchString =
        item.label.toString() +
        (item.keywords ? item.keywords.toString() : '') +
        (item.anchors ? item.anchors.join(' ') : '');
      return searchString.toLowerCase().indexOf(lowercaseFilter.value) >= 0 ? item : undefined;
    };

    const filterSection = (item: NeonTreeMenuSectionModel): NeonTreeMenuSectionModel | undefined => {
      const children: NeonTreeMenuLinkModel[] = [];
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

    const setMode = (mode: NeonMode) => {
      document.documentElement.classList.remove(`neon-mode--${selectedMode.value}`);
      document.documentElement.classList.add(`neon-mode--${mode}`);
      selectedMode.value = mode;
      localStorage.setItem('mode', selectedMode.value);
    };

    const switchMode = () => {
      setMode(selectedMode.value === NeonMode.Dark ? NeonMode.Light : NeonMode.Dark);
    };

    const onSideNavMenuClick = (key: string) => {
      toggleExpand(key);
    };

    const handleResize = () => {
      isMobile.value = window.matchMedia(NeonResponsiveUtils.breakpoints[NeonResponsive.MobileLarge]).matches;
      isTablet.value = window.matchMedia(NeonResponsiveUtils.breakpoints[NeonResponsive.Tablet]).matches;
    };

    const toggleExpand = (key: string) => {
      indexModel.value.forEach((group) => {
        group.children.forEach((item) => {
          if (item.key === key) {
            item.expanded = !item.expanded;
          }
        });
        group.children = [...group.children];
      });
    };

    onMounted(async () => {
      const path = localStorage.getItem('path');
      if (path) {
        localStorage.removeItem('path');
        await router.push({ path: path.replace('neon', '') });
      }

      const savedMode = (localStorage.getItem('mode') as NeonMode) || undefined;
      NeonModeUtils.init(savedMode);
      NeonModeUtils.addListener('app-mode-listener', setMode);
      window.addEventListener('resize', handleResize, { passive: true });
      handleResize();

      indexModel.value = Menu.menu().map((group) => ({
        group: group.group,
        expanded: false,
        children: group.children.map((item) => ({
          label: item.name || item.page || item.path,
          key: item.path,
          children: item.children
            ? item.children.map((child) => ({
                label: child.name || child.page || child.path,
                key: child.path,
                keywords:
                  (child.keywords || '') +
                  (child.component ? ` ${child.component.toLowerCase()}` : '') +
                  (child.subComponents ? '' + child.subComponents.map((sc) => sc.name.toLowerCase()).join(' ') : ''),
                href: `/${item.path}/${child.path}`,
                anchors: child.anchors,
              }))
            : [],
        })),
      }));
    });

    onUnmounted(() => {
      NeonModeUtils.removeListener('app-mode-listener');
      window.removeEventListener('resize', handleResize);
    });

    watch(
      () => route.path,
      (to: string) => {
        menuOpen.value = false;
        const key = to.split('/')[1];
        indexModel.value
          .filter((group) => group.children.find((item) => item.key === key))
          .forEach((group) => {
            group.expanded = true;
            group.children
              .filter((item) => item.key === key)
              .forEach((item) => {
                item.expanded = true;
              });
            group.children = [...group.children];
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
      selectedMode,
      indexModel,
      indexFilter,
      menuOpen,
      isMobile,
      isTablet,
      layouts,
      versionString,
      filteredModel,
      expandAll,
      switchMode,
      toggleExpand,
      onSideNavMenuClick,
    };
  },
});
