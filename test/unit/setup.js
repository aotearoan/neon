import { RegisterIcons } from "@/common/utils/RegisterIcons";
import { NeonDebounceUtils } from "@/common/utils/NeonDebounceUtils";

NeonDebounceUtils.setGlobalDebounceTimeout(0);
RegisterIcons.register();

global.PACKAGE_VERSION = "0.0.0";
window.scrollTo = () => {
};
