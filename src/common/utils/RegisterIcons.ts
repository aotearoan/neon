import { NeonIconRegistry } from './NeonIconRegistry';
import alignCenter from '@/common/icons/align-center.svg';
import alignLeft from '@/common/icons/align-left.svg';
import alignRight from '@/common/icons/align-right.svg';
import at from '@/common/icons/at.svg';
import calendar from '@/common/icons/calendar.svg';
import check from '@/common/icons/check.svg';
import checkCircle from '@/common/icons/check-circle.svg';
import chevronDown from '@/common/icons/chevron-down.svg';
import chevronLeft from '@/common/icons/chevron-left.svg';
import chevronRight from '@/common/icons/chevron-right.svg';
import chevronUp from '@/common/icons/chevron-up.svg';
import colorFilter from '@/common/icons/color-filter.svg';
import contrast from '@/common/icons/contrast.svg';
import copy from '@/common/icons/copy.svg';
import dash from '@/common/icons/dash.svg';
import desktop from '@/common/icons/desktop.svg';
import dot from '@/common/icons/dot.svg';
import download from '@/common/icons/download.svg';
import ellipsis from '@/common/icons/ellipsis.svg';
import exclamationCircle from '@/common/icons/exclamation-circle.svg';
import feather from '@/common/icons/feather.svg';
import github from '@/common/icons/github.svg';
import hammer from '@/common/icons/hammer.svg';
import heart from '@/common/icons/heart.svg';
import heartOutline from '@/common/icons/heart-outline.svg';
import htmlLogo from '@/common/icons/html-logo.svg';
import images from '@/common/icons/images.svg';
import infoCircle from '@/common/icons/info-circle.svg';
import linkExternal from '@/common/icons/link-external.svg';
import loading from '@/common/icons/loading.svg';
import lock from '@/common/icons/lock.svg';
import mail from '@/common/icons/mail.svg';
import menu from '@/common/icons/menu.svg';
import minus from '@/common/icons/minus.svg';
import moon from '@/common/icons/moon.svg';
import neonLogo from '@/common/icons/neon-logo.svg';
import neonWordmark from '@/common/icons/neon-wordmark.svg';
import palette from '@/common/icons/palette.svg';
import plus from '@/common/icons/plus.svg';
import send from '@/common/icons/send.svg';
import search from '@/common/icons/search.svg';
import sun from '@/common/icons/sun.svg';
import switchIcon from '@/common/icons/switch.svg';
import times from '@/common/icons/times.svg';
import timesCircle from '@/common/icons/times-circle.svg';
import user from '@/common/icons/user.svg';
import visibilityOff from '@/common/icons/visibility-off.svg';
import visibilityOn from '@/common/icons/visibility-on.svg';

/**
 * A helper for initialising the provided set of Neon icons with the
 * <a href="/utils/NeonIconRegistry">NeonIconRegistry</a>.
 */
export class RegisterIcons {
  /**
   * Register all Neon default icons in the NeonIconRegistry. Call this in an app's <em>main.ts</em> to use Neon's
   * provided icons.
   */
  public static register() {
    NeonIconRegistry.addIcon('align-center', alignCenter);
    NeonIconRegistry.addIcon('align-left', alignLeft);
    NeonIconRegistry.addIcon('align-right', alignRight);
    NeonIconRegistry.addIcon('at', at);
    NeonIconRegistry.addIcon('calendar', calendar);
    NeonIconRegistry.addIcon('check', check);
    NeonIconRegistry.addIcon('check-circle', checkCircle);
    NeonIconRegistry.addIcon('chevron-down', chevronDown);
    NeonIconRegistry.addIcon('chevron-left', chevronLeft);
    NeonIconRegistry.addIcon('chevron-right', chevronRight);
    NeonIconRegistry.addIcon('chevron-up', chevronUp);
    NeonIconRegistry.addIcon('color-filter', colorFilter);
    NeonIconRegistry.addIcon('contrast', contrast);
    NeonIconRegistry.addIcon('copy', copy);
    NeonIconRegistry.addIcon('dash', dash);
    NeonIconRegistry.addIcon('desktop', desktop);
    NeonIconRegistry.addIcon('dot', dot);
    NeonIconRegistry.addIcon('download', download);
    NeonIconRegistry.addIcon('ellipsis', ellipsis);
    NeonIconRegistry.addIcon('exclamation-circle', exclamationCircle);
    NeonIconRegistry.addIcon('feather', feather);
    NeonIconRegistry.addIcon('github', github);
    NeonIconRegistry.addIcon('hammer', hammer);
    NeonIconRegistry.addIcon('heart', heart);
    NeonIconRegistry.addIcon('heart-outline', heartOutline);
    NeonIconRegistry.addIcon('html-logo', htmlLogo);
    NeonIconRegistry.addIcon('images', images);
    NeonIconRegistry.addIcon('info-circle', infoCircle);
    NeonIconRegistry.addIcon('link-external', linkExternal);
    NeonIconRegistry.addIcon('loading', loading);
    NeonIconRegistry.addIcon('lock', lock);
    NeonIconRegistry.addIcon('mail', mail);
    NeonIconRegistry.addIcon('menu', menu);
    NeonIconRegistry.addIcon('minus', minus);
    NeonIconRegistry.addIcon('moon', moon);
    NeonIconRegistry.addIcon('neon-logo', neonLogo);
    NeonIconRegistry.addIcon('neon-wordmark', neonWordmark);
    NeonIconRegistry.addIcon('palette', palette);
    NeonIconRegistry.addIcon('plus', plus);
    NeonIconRegistry.addIcon('send', send);
    NeonIconRegistry.addIcon('search', search);
    NeonIconRegistry.addIcon('sun', sun);
    NeonIconRegistry.addIcon('switch', switchIcon);
    NeonIconRegistry.addIcon('times', times);
    NeonIconRegistry.addIcon('times-circle', timesCircle);
    NeonIconRegistry.addIcon('user', user);
    NeonIconRegistry.addIcon('visibility-off', visibilityOff);
    NeonIconRegistry.addIcon('visibility-on', visibilityOn);
  }
}
