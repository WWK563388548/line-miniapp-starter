module.exports = (api) => {
  api.cache(true);

  return {
    presets: [
      "@babel/preset-env",
      "@babel/preset-react"
    ],
    plugins: [
      [
        "@babel/plugin-proposal-decorators",
        {
          "legacy": true
        }
      ],
      [
        "@babel/plugin-transform-runtime",
        {
          "corejs": 2
        }
      ],
      [
        "@babel/plugin-proposal-class-properties", 
        { 
          "loose": true
        }
      ],
      "@babel/plugin-syntax-dynamic-import",
      // Can use export *
      "@babel/plugin-proposal-export-namespace-from",
      "@babel/plugin-proposal-throw-expressions",
      "@babel/plugin-proposal-export-default-from",
      "@babel/plugin-proposal-logical-assignment-operators",
      // Can use AAA?.BBB?.CCC
      "@babel/plugin-proposal-optional-chaining",
      [
        "@babel/plugin-proposal-pipeline-operator",
        {
          "proposal": "minimal"
        }
      ],
      "@babel/plugin-proposal-nullish-coalescing-operator",
      "@babel/plugin-proposal-do-expressions",
      "@babel/plugin-proposal-function-bind"
    ]
  }
}