import { Component, Vue, Watch } from 'vue-property-decorator';
import VueI18n from 'vue-i18n';
import { RegisterIcons } from '../common/utils/RegisterIcons';
import { Menu } from './Menu';
import { NeonMode } from '../common/enums/NeonMode';
import { NeonTreeMenuLinkModel, NeonTreeMenuSectionModel } from '../common/models/NeonTreeMenuModel';
import {
  NeonDrawer,
  NeonFooter,
  NeonGrid,
  NeonGridArea,
  NeonLogo,
  NeonPage,
  NeonResponsive,
  NeonResponsiveUtils,
  NeonSideNav,
  NeonSwitch,
  NeonTopNav,
  NeonTreeMenu,
  NeonInput,
} from '../components';
import { NeonModeUtils } from '../common/utils/NeonModeUtils';
import { Route } from 'vue-router';

export enum Theme {
  Default = 'default',
}

RegisterIcons.register();
Vue.use(VueI18n);

@Component({
  components: {
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
  },
})
export default class App extends Vue {
  public theme = Theme.Default;
  public selectedMode = NeonMode.Dark;
  private indexModel: NeonTreeMenuSectionModel[] = [];
  private indexFilter = '';
  private menuOpen = false;
  private isMobile = false;

  public mounted() {
    const path = localStorage.getItem('path');
    if (path) {
      localStorage.removeItem('path');
      this.$router.push({ path: path.replace('neon', '') });
    }

    NeonModeUtils.init();
    NeonModeUtils.addListener('app-mode-listener', this.switchMode);
    window.addEventListener('resize', this.handleResize);
    this.handleResize();

    this.indexModel = Menu.menu.map((item) => ({
      label: item.name || item.page || item.path,
      key: item.path,
      group: item.group,
      children: item.children
        ? item.children.map((child) => ({
            label: child.name || child.page || child.path,
            key: child.path,
            keywords: child.keywords,
            href: `/${item.path}/${child.path}`,
          }))
        : [],
    }));
  }

  public beforeDestroy() {
    NeonModeUtils.removeListener('app-mode-listener');
    window.removeEventListener('resize', this.handleResize);
  }

  get themes() {
    return [Theme.Default];
  }

  get modes() {
    return [
      {
        key: NeonMode.Light,
        icon: 'sun',
      },
      {
        key: NeonMode.Dark,
        icon: 'moon',
      },
    ];
  }

  private switchTheme(theme: Theme) {
    if (this.theme !== theme) {
      document.documentElement.classList.remove(`neon-theme--${this.theme}`);
      document.documentElement.classList.add(`neon-theme--${theme}`);
      this.theme = theme;
    }
  }

  private switchMode(mode: NeonMode) {
    document.documentElement.classList.remove(`neon-mode--${this.selectedMode}`);
    document.documentElement.classList.add(`neon-mode--${mode}`);
    this.selectedMode = mode;
  }

  @Watch('$route', { immediate: true })
  private watchRoute(to: Route) {
    const key = to.path.split('/')[1];
    this.indexModel
      .filter((item) => item.key === key)
      .forEach((item) => {
        item.expanded = true;
      });
    this.indexModel = [...this.indexModel];
  }

  get filteredModel(): NeonTreeMenuSectionModel[] {
    const items: NeonTreeMenuSectionModel[] = [];

    if (this.indexFilter && this.indexFilter.length > 0) {
      this.indexModel.forEach((item) => {
        const filteredItem = this.filterSection(item);
        if (filteredItem) {
          items.push(filteredItem);
        }
      });
    } else {
      items.push(...this.indexModel);
    }

    // filter out repeated group labels (it's necessary to include them before each section for filtering purposes)
    return items.map((item, index) => {
      const previousItem = items[index - 1];
      return previousItem && previousItem.group && previousItem.group === item.group
        ? { ...item, group: undefined }
        : item;
    });
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

  private filterLink(item: NeonTreeMenuLinkModel): NeonTreeMenuLinkModel | undefined {
    const searchString = item.label.toString() + (item.keywords ? item.keywords.toString() : '');
    return searchString.toLowerCase().indexOf(this.indexFilter) >= 0 ? item : undefined;
  }

  private toggleExpand(key: string) {
    this.indexModel
      .filter((item) => item.key === key)
      .forEach((item) => {
        item.expanded = !item.expanded;
      });
    this.indexModel = [...this.indexModel];
  }

  private onSideNavMenuClick(key: string) {
    this.toggleExpand(key);
  }

  private onInlineMenuClick(key: string) {
    this.toggleExpand(key);
    setTimeout(() => {
      this.menuOpen = false;
    }, 225);
  }

  get layouts() {
    return [
      {
        breakpoint: NeonResponsive.Desktop,
        grid: [['section-content']],
      },
      {
        breakpoint: NeonResponsive.Desktop,
        grid: [['responsive-menu'], ['section-content']],
      },
    ];
  }

  get version() {
    return process.env.PACKAGE_VERSION;
  }

  private handleResize() {
    this.isMobile = window.matchMedia(NeonResponsiveUtils.breakpoints[NeonResponsive.Mobile]).matches;
  }
}
