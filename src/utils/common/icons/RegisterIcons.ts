import { NeonIconRegistry } from './NeonIconRegistry';
import alignCenter from '@/icons/align-center.svg';
import alignLeft from '@/icons/align-left.svg';
import alignRight from '@/icons/align-right.svg';
import at from '@/icons/at.svg';
import calendar from '@/icons/calendar.svg';
import check from '@/icons/check.svg';
import checkCircle from '@/icons/check-circle.svg';
import chevronDown from '@/icons/chevron-down.svg';
import chevronLeft from '@/icons/chevron-left.svg';
import chevronRight from '@/icons/chevron-right.svg';
import chevronUp from '@/icons/chevron-up.svg';
import colorFilter from '@/icons/color-filter.svg';
import contrast from '@/icons/contrast.svg';
import copy from '@/icons/copy.svg';
import dash from '@/icons/dash.svg';
import desktop from '@/icons/desktop.svg';
import dot from '@/icons/dot.svg';
import download from '@/icons/download.svg';
import dragHandle from '@/icons/drag-handle.svg';
import ellipsis from '@/icons/ellipsis.svg';
import exclamationCircle from '@/icons/exclamation-circle.svg';
import feather from '@/icons/feather.svg';
import firstPage from '@/icons/first-page.svg';
import github from '@/icons/github.svg';
import hammer from '@/icons/hammer.svg';
import heart from '@/icons/heart.svg';
import heartOutline from '@/icons/heart-outline.svg';
import htmlLogo from '@/icons/html-logo.svg';
import images from '@/icons/images.svg';
import infoCircle from '@/icons/info-circle.svg';
import lastPage from '@/icons/last-page.svg';
import lightModeSunny from '@/icons/light-mode-sunny.svg';
import linkExternal from '@/icons/link-external.svg';
import loading from '@/icons/loading.svg';
import lock from '@/icons/lock.svg';
import mail from '@/icons/mail.svg';
import menu from '@/icons/menu.svg';
import minus from '@/icons/minus.svg';
import moon from '@/icons/moon.svg';
import neonLogo from '@/icons/neon-logo.svg';
import neonWordmark from '@/icons/neon-wordmark.svg';
import palette from '@/icons/palette.svg';
import plus from '@/icons/plus.svg';
import send from '@/icons/send.svg';
import search from '@/icons/search.svg';
import sun from '@/icons/sun.svg';
import switchIcon from '@/icons/switch.svg';
import times from '@/icons/times.svg';
import timesCircle from '@/icons/times-circle.svg';
import user from '@/icons/user.svg';
import visibilityOff from '@/icons/visibility-off.svg';
import visibilityOn from '@/icons/visibility-on.svg';

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
    NeonIconRegistry.addIcon('drag-handle', dragHandle);
    NeonIconRegistry.addIcon('ellipsis', ellipsis);
    NeonIconRegistry.addIcon('exclamation-circle', exclamationCircle);
    NeonIconRegistry.addIcon('feather', feather);
    NeonIconRegistry.addIcon('first-page', firstPage);
    NeonIconRegistry.addIcon('github', github);
    NeonIconRegistry.addIcon('hammer', hammer);
    NeonIconRegistry.addIcon('heart', heart);
    NeonIconRegistry.addIcon('heart-outline', heartOutline);
    NeonIconRegistry.addIcon('html-logo', htmlLogo);
    NeonIconRegistry.addIcon('images', images);
    NeonIconRegistry.addIcon('info-circle', infoCircle);
    NeonIconRegistry.addIcon('last-page', lastPage);
    NeonIconRegistry.addIcon('light-mode-sunny', lightModeSunny);
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
