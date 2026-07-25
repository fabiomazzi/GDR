import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"

ExternalPlugin.FolderPage({
  sort: (a, b) => {
    const titleA = a.frontmatter?.title ?? ""
    const titleB = b.frontmatter?.title ?? ""
    return titleA.localeCompare(titleB)
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
