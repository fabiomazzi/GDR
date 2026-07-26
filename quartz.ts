import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"

// Nasconde "nascosto" dall'Explorer (deve stare prima di loadQuartzConfig)
ExternalPlugin.Explorer({
  filterFn: (node) => node.slug !== "nascosto",
})

const config = await loadQuartzConfig()

// --- FolderPage custom (disattivato, tenuto per riferimento) ---
// const customFolderPage = ExternalPlugin.FolderPage({
//   showFolderCount: false,
//   sort: (a, b) => {
//     const t1 = a.frontmatter?.title?.toLowerCase() ?? ""
//     const t2 = b.frontmatter?.title?.toLowerCase() ?? ""
//     return t1.localeCompare(t2)
//   },
// })
// config.plugins.pageTypes = config.plugins.pageTypes.map((p) =>
//   p.name === "FolderPage" ? customFolderPage : p
// )

export default config
export const layout = await loadQuartzLayout()
