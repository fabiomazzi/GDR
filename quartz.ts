import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"
const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
