module.exports = {
    transform: {
      "^.+\\.[t|j]sx?$": "babel-jest"
    },
    transformIgnorePatterns: [
      "node_modules/(?!(axios|other-es-modules)/)"
    ],
    moduleNameMapper: {
      "\\.(css|less)$": "identity-obj-proxy"
    }
  };
  