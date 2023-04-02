// eslint-disable-next-line no-undef
require("jsdom-global")();

// eslint-disable-next-line no-undef
require("./before-tests");

const { NeonDebounceUtils } = require("@/common/utils/NeonDebounceUtils");

NeonDebounceUtils.setGlobalDebounceTimeout(0);
