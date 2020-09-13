import { Component, Vue, Watch } from 'vue-property-decorator';
import VueI18n, { TranslateResult } from 'vue-i18n';
import { RegisterIcons } from '../common/utils/RegisterIcons';
import { Menu } from './Menu';
import { NeonMode } from '../common/enums/NeonMode';
import { NeonTreeMenuLinkModel, NeonTreeMenuSectionModel } from '../common/models/NeonTreeMenuModel';
import {
  NeonAlert,
  NeonDrawer,
  NeonExpansionPanel,
  NeonFooter,
  NeonGrid,
  NeonGridArea,
  NeonInput,
  NeonLink,
  NeonLogo,
  NeonPage,
  NeonResponsive,
  NeonResponsiveUtils,
  NeonSideNav,
  NeonSwitch,
  NeonTopNav,
  NeonTreeMenu,
} from '../components';
import { NeonModeUtils } from '../common/utils/NeonModeUtils';
import { Route } from 'vue-router';

export enum Theme {
  Classic = 'classic',
}

export interface AppMenuGroup {
  group: TranslateResult;
  expanded: boolean;
  children: NeonTreeMenuSectionModel[];
}

export interface AppMenuLinkModel extends NeonTreeMenuLinkModel {
  keywords?: TranslateResult;
}

RegisterIcons.register();
Vue.use(VueI18n);

@Component({
  components: {
    NeonAlert,
    NeonTopNav,
    NeonLogo,
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
})
export default class App extends Vue {
  public theme = Theme.Classic;
  public selectedMode = NeonMode.Dark;
  private indexModel: AppMenuGroup[] = [];
  private indexFilter = '';
  private menuOpen = false;
  private isMobile = false;
  private simplePage = true;

  public mounted() {
    const path = localStorage.getItem('path');
    if (path) {
      localStorage.removeItem('path');
      this.$router.push({ path: path.replace('neon', '') });
    }

    const savedMode = (localStorage.getItem('mode') as NeonMode) || undefined;
    NeonModeUtils.init(savedMode);
    NeonModeUtils.addListener('app-mode-listener', this.setMode);
    window.addEventListener('resize', this.handleResize, { passive: true });
    this.handleResize();

    this.indexModel = Menu.menu().map((group) => ({
      group: group.group,
      expanded: false,
      children: group.children.map((item) => ({
        label: item.name || item.page || item.path,
        key: item.path,
        children: item.children
          ? item.children.map((child) => ({
              label: child.name || child.page || child.path,
              key: child.path,
              keywords: child.keywords,
              href: `/${item.path}/${child.path}`,
              anchors: child.anchors,
            }))
          : [],
      })),
    }));
  }

  public beforeDestroy() {
    NeonModeUtils.removeListener('app-mode-listener');
    window.removeEventListener('resize', this.handleResize);
  }

  get themes() {
    return [Theme.Classic];
  }

  private switchTheme(theme: Theme) {
    if (this.theme !== theme) {
      document.documentElement.classList.remove(`neon-theme--${this.theme}`);
      document.documentElement.classList.add(`neon-theme--${theme}`);
      this.theme = theme;
    }
  }

  private switchMode() {
    this.setMode(this.selectedMode === NeonMode.Dark ? NeonMode.Light : NeonMode.Dark);
  }

  private setMode(mode: NeonMode) {
    document.documentElement.classList.remove(`neon-mode--${this.selectedMode}`);
    document.documentElement.classList.add(`neon-mode--${mode}`);
    this.selectedMode = mode;
    localStorage.setItem('mode', this.selectedMode);
  }

  @Watch('$route', { immediate: true })
  private watchRoute(to: Route) {
    this.menuOpen = false;
    const key = to.path.split('/')[1];
    this.indexModel
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
    this.indexModel = [...this.indexModel];
    this.simplePage = to.meta.simpleLayout;

    setTimeout(() => {
      if (to.hash) {
        const el = document.getElementById(to.hash.substring(1));
        if (el) {
          el.scrollIntoView();
        }
      }
    }, 250);
  }

  get filteredModel(): AppMenuGroup[] {
    const groups: AppMenuGroup[] = [];

    if (this.indexFilter && this.indexFilter.length > 0) {
      this.indexModel.forEach((group) => {
        const children: NeonTreeMenuSectionModel[] = [];
        group.children.forEach((item) => {
          const filteredItem = this.filterSection(item);
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
      groups.push(...this.indexModel);
    }

    return groups;
  }

  get expandAll() {
    return this.indexFilter && this.indexFilter.length > 0;
  }

  private filterSection(item: NeonTreeMenuSectionModel): NeonTreeMenuSectionModel | undefined {
    const children: NeonTreeMenuLinkModel[] = [];
    if (item.children) {
      item.children.forEach((child) => {
        const filteredChild = this.filterLink(child);
        if (filteredChild) {
          children.push(filteredChild);
        }
      });
    }

    return children.length > 0
      ? { ...item, children }
      : item.label.toString().toLowerCase().indexOf(this.indexFilter) >= 0
      ? item
      : undefined;
  }

  private filterLink(item: AppMenuLinkModel): NeonTreeMenuLinkModel | undefined {
    const searchString =
      item.label.toString() +
      (item.keywords ? item.keywords.toString() : '') +
      (item.anchors ? item.anchors.join(' ') : '');
    return searchString.toLowerCase().indexOf(this.indexFilter) >= 0 ? item : undefined;
  }

  private toggleExpand(key: string) {
    this.indexModel.forEach((group) => {
      group.children.forEach((item) => {
        if (item.key === key) {
          item.expanded = !item.expanded;
        }
      });
      group.children = [...group.children];
    });
  }

  private onSideNavMenuClick(key: string) {
    this.toggleExpand(key);
  }

  private onInlineMenuClick(key: string) {
    this.toggleExpand(key);
  }

  get layouts() {
    return [
      {
        breakpoint: NeonResponsive.All,
        grid: [['section-content']],
      },
    ];
  }

  get version() {
    return process.env.PACKAGE_VERSION;
  }

  private handleResize() {
    this.isMobile = window.matchMedia(NeonResponsiveUtils.breakpoints[NeonResponsive.MobileLarge]).matches;
  }
}
