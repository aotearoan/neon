import { RegisterIcons } from '@/common/utils/RegisterIcons';
import { NeonDebounceUtils } from '@/common/utils/NeonDebounceUtils';

NeonDebounceUtils.setGlobalDebounceTimeout(0);
RegisterIcons.register();

global.PACKAGE_VERSION = '0.0.0';
window.scrollTo = () => {};

global.IntersectionObserver = jest.fn(() => ({
  observe: () => jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
  root: {},
  thresholds: [1.0],
  rootMargin: '0px',
  takeRecords: jest.fn(),
}));

HTMLElement.prototype.scrollIntoView = () => {};
