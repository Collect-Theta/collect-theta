module.exports = {
  "stories": [
    "../examples/stories/**/*.stories.mdx",
    "../examples/stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../web/src/**/*.stories.mdx",
    "../web/src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ]
}
