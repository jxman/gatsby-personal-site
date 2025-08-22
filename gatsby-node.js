exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  const config = getConfig()

  // Optimize webpack cache for large strings
  if (config.cache && config.cache.type === "filesystem") {
    config.cache.maxMemoryGenerations = 1
    config.cache.compression = "gzip"
  }

  // Optimize module concatenation
  config.optimization = {
    ...config.optimization,
    concatenateModules: true,
    usedExports: true,
    sideEffects: false,
  }

  // Set infrastructure logging level to reduce verbose warnings
  config.infrastructureLogging = {
    level: "error",
  }

  actions.replaceWebpackConfig(config)
}

// Reduce aggressive preloading in development
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  // Only apply in development
  if (process.env.NODE_ENV === "development") {
    // Delete and recreate page with reduced preload hints
    deletePage(page)
    createPage({
      ...page,
      context: {
        ...page.context,
        // Reduce preload aggressiveness
        preloadDepth: 1,
      },
    })
  }
}
