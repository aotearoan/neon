import { NeonIconRegistry } from './NeonIconRegistry';
import alignCenter from '@/common/icons/align-center.svg';
import alignLeft from '@/common/icons/align-left.svg';
import alignRight from '@/common/icons/align-right.svg';
import at from '@/common/icons/at.svg';
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
import download from '@/common/icons/download.svg';
import ellipsis from '@/common/icons/ellipsis.svg';
import exclamationCircle from '@/common/icons/exclamation-circle.svg';
import github from '@/common/icons/github.svg';
import hammer from '@/common/icons/hammer.svg';
import heart from '@/common/icons/heart.svg';
import heartOutline from '@/common/icons/heart-outline.svg';
import htmlLogo from '@/common/icons/html-logo.svg';
import images from '@/common/icons/images.svg';
import infoCircle from '@/common/icons/info-circle.svg';
import linkExternal from '@/common/icons/link-external.svg';
import lock from '@/common/icons/lock.svg';
import mail from '@/common/icons/mail.svg';
import menu from '@/common/icons/menu.svg';
import minus from '@/common/icons/minus.svg';
import moon from '@/common/icons/moon.svg';
import palette from '@/common/icons/palette.svg';
import plus from '@/common/icons/plus.svg';
import send from '@/common/icons/send.svg';
import search from '@/common/icons/search.svg';
import sun from '@/common/icons/sun.svg';
import times from '@/common/icons/times.svg';
import timesCircle from '@/common/icons/times-circle.svg';
import user from '@/common/icons/user.svg';
import visibilityOff from '@/common/icons/visibility-off.svg';
import visibilityOn from '@/common/icons/visibility-on.svg';
import loading from '@/common/icons/loading.svg';
import logo from '@/common/icons/logo.svg';

export class RegisterIcons {
  public static register() {
    NeonIconRegistry.addIcon('align-center', alignCenter);
    NeonIconRegistry.addIcon('align-left', alignLeft);
    NeonIconRegistry.addIcon('align-right', alignRight);
    NeonIconRegistry.addIcon('at', at);
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
    NeonIconRegistry.addIcon('download', download);
    NeonIconRegistry.addIcon('ellipsis', ellipsis);
    NeonIconRegistry.addIcon('exclamation-circle', exclamationCircle);
    NeonIconRegistry.addIcon('github', github);
    NeonIconRegistry.addIcon('hammer', hammer);
    NeonIconRegistry.addIcon('heart', heart);
    NeonIconRegistry.addIcon('heart-outline', heartOutline);
    NeonIconRegistry.addIcon('html-logo', htmlLogo);
    NeonIconRegistry.addIcon('images', images);
    NeonIconRegistry.addIcon('info-circle', infoCircle);
    NeonIconRegistry.addIcon('link-external', linkExternal);
    NeonIconRegistry.addIcon('lock', lock);
    NeonIconRegistry.addIcon('mail', mail);
    NeonIconRegistry.addIcon('menu', menu);
    NeonIconRegistry.addIcon('minus', minus);
    NeonIconRegistry.addIcon('moon', moon);
    NeonIconRegistry.addIcon('palette', palette);
    NeonIconRegistry.addIcon('plus', plus);
    NeonIconRegistry.addIcon('send', send);
    NeonIconRegistry.addIcon('search', search);
    NeonIconRegistry.addIcon('sun', sun);
    NeonIconRegistry.addIcon('times', times);
    NeonIconRegistry.addIcon('times-circle', timesCircle);
    NeonIconRegistry.addIcon('user', user);
    NeonIconRegistry.addIcon('visibility-off', visibilityOff);
    NeonIconRegistry.addIcon('visibility-on', visibilityOn);

    // animated icons
    NeonIconRegistry.addIcon('loading', loading);

    // logo
    NeonIconRegistry.addIcon('logo', logo);
  }
}
