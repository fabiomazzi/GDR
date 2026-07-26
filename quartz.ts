import * as ExternalPlugin from "./.quartz/plugins"

ExternalPlugin.FolderPage({
  sort: (a, b) => {
    const t1 = a.frontmatter?.title?.toLowerCase() ?? ""
    const t2 = b.frontmatter?.title?.toLowerCase() ?? ""
    return t1.localeCompare(t2)
  },
})

import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()