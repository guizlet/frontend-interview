const config = {
  files: {
    javascripts: {
      joinTo: {
        "js/app": "./app.js"
      }
    },
    stylesheets: {
      joinTo: {
        "css/app": "./index.css"
      }
    },
    templates: {
      joinTo: {
        "js/templates": "./views/*.html"
      }
    }
  },
  paths: {
    public: "dist",
    watched: ["src"]
  },
  plugins: {
    html2js: {
      options: {
        base: "src"
      }
    }
  }
};

module.exports = config;
