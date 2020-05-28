import { Component, Vue } from 'vue-property-decorator';
import VueI18n from 'vue-i18n';
import { RegisterIcons } from './components/design/icon/RegisterIcons';
import { Menu } from './Menu';
import { NeonMode } from '@/components/common/NeonMode';
import { NeonTreeMenuModel } from '@/components/navigation/tree-menu/NeonTreeMenuModel';
import {
  NeonFooter,
  NeonLogo,
  NeonPage,
  NeonSideNav,
  NeonSwitch,
  NeonTopNav,
  NeonTreeMenu,
  NeonTreeMenuItem,
} from '@/components';

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
  },
})
export default class App extends Vue {
  public theme = Theme.Default;
  public selectedMode = NeonMode.Dark;
  private indexFilter = '';

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
      children: item.children
        ? item.children.map((child) => ({
            label: child.name || child.page || child.path,
            key: child.path,
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

      return children.length > 0
        ? { ...item, children }
        : item.label.toString().toLowerCase().indexOf(this.indexFilter) >= 0
        ? item
        : undefined;
    }
  }
}
