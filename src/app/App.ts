import { Component, Vue } from 'vue-property-decorator';
import VueI18n from 'vue-i18n';
import { RegisterIcons } from '@/common/utils/RegisterIcons';
import { Menu } from './Menu';
import { NeonMode } from '@/common/enums/NeonMode';
import { NeonTreeMenuModel } from '@/common/models/NeonTreeMenuModel';
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
  NeonTreeMenuItem,
  NeonInput,
} from '@/components';
import { NeonModeUtils } from '@/common/utils/NeonModeUtils';

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
    NeonTreeMenuItem,
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
  private indexFilter = '';
  private menuOpen = false;
  private isMobile = false;

  public mounted() {
    NeonModeUtils.init();
    NeonModeUtils.addListener('app-mode-listener', this.switchMode);
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
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

  private indexModel(): NeonTreeMenuModel[] {
    return Menu.menu.map((item) => ({
      label: item.name || item.page || item.path,
      key: item.path,
      keywords: item.keywords,
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

  get filteredModel(): NeonTreeMenuModel[] {
    const items: NeonTreeMenuModel[] = [];
    this.indexModel().forEach((item) => {
      const filteredItem = this.filterModel(item);
      if (filteredItem) {
        items.push(filteredItem);
      }
    });
    return items;
  }

  private filterModel(item: NeonTreeMenuModel): NeonTreeMenuModel | undefined {
    if (!this.indexFilter || this.indexFilter.length === 0) {
      return item;
    } else {
      const children: NeonTreeMenuModel[] = [];
      if (item.children) {
        item.children.forEach((child) => {
          const filteredChild = this.filterModel(child);
          if (filteredChild) {
            children.push(filteredChild);
          }
        });
      }

      const searchString = item.label.toString() + (item.keywords ? item.keywords.toString() : '');
      return children.length > 0
        ? { ...item, children }
        : searchString.toLowerCase().indexOf(this.indexFilter) >= 0
        ? item
        : undefined;
    }
  }

  private onMenuClick() {
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

  private handleResize() {
    this.isMobile = window.matchMedia(NeonResponsiveUtils.breakpoints[NeonResponsive.Mobile]).matches;
  }
}
