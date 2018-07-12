export default {
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
    leaflet: "L",
    moment: "moment",
    jQuery: "$"
  },
  extraBabelPlugins: [
    [
      "import",
      { libraryName: "antd-mobile", libraryDirectory: "es", style: "css" }
    ],
    [
      "import",
      { libraryName: "antd", libraryDirectory: "lib", style: "css" },
      "import1"
    ]
  ]
};
