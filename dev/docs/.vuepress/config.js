module.exports = {
  markdown: {
    extendMarkdown: md => {
      md.set({ breaks: true })
      md.use(require('markdown-it-task-lists'))
    }
  },
  title: "Kenny's Lab",
  description:
    "Lab memo" /* a <meta> tag in the page HTML */,
  base: "/kenny/",
  dest: "public",
  themeConfig: {
    smoothScroll: true,
	nav: [
      { text: "Home", link: "/" },
      { text: "AWS Server", link: "/aws server/"},
      { text: "Linux Server", link: "/linuxserver/NetworkManager"},
      { 
        text: "AWS Certification", 
       /* ariaLabel: "AWS certification Menu", */
       items: [
       {text: "AWS Cloud Practitioner", link:"/aws certification/ACP/"},
       {text: "AWS Solutions Architect Associate", link:"/aws certification/SAA/"},
              ],
      },
      {text: "Network Associate", link:"/Network Associate/VLAN"},
      { 
        text: "English", 
      /* ariaLabel: "English Menu", */
      items: [
      { text: "hitutor", link:"/english/hitutor/" },
      { text: "phrase", link:"/english/phrase/"},
      { text: "NY Times", link:"/english/nytimes"},
      { text: "South Morning China Post", link:"/english/scmp/"},
      { text: "Straits Times", link: "/english/StraitsTimes"}
            ],
      },
        ],

	sidebarDepth: 2,
  sidebar: {  
      
      "/aws server/" : [
        "",
        "awshttpd2tomcat",
        "IAM",
        "VPC",  
        ],
        
      "/aws certification/": [
      //"",
      "ACP",
      "SAA",
         ],     

      "/english/": [
      //"",
      "hitutor",
      "nytimes",
      "scmp",
      "StraitsTimes",
      "phrase",
    ],
    
    "/linuxserver/": [
      //"",
      "NetworkManager",
      "Route Table",
      "firewalld",
      "sftp",
      "httpd2tomcat",
      "rsyslog",
      "pgsql",
    ],

    "/Network Associate/": [
      //"",
      "VLAN",
    ],
      

    
    }, 

  },
  plugins: [
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp, lang) => {
          // Don't forget to install moment yourself
          const moment = require("moment-timezone");
          moment.locale(lang);
          return moment(timestamp)
            .tz("Asia/Taipei")
            .format("MMMM DD, YYYY HH:mm Z");
        }
      }
    ],
    ["@vuepress/back-to-top"],
    ['one-click-copy', {
      copyMessage: 'Copied!',
      duration: 1000,
  }]
  ],
  /* fix: internal pdf link 404 */
  /* refer: https://github.com/vuejs/vuepress/issues/700 */
  chainWebpack: (config, isServer) => {
    config.module
      .rule("fpr")
      .test(/\.fpr$/)
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: `[path][name].[ext]`
      });

    config.module
      .rule("xml")
      .test(/\.xml$/)
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: `[path][name].[ext]`
      });

    config.module
      .rule("pdfs")
      .test(/\.pdf$/)
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: `[path][name].[ext]`
      });

    config.module
    .rule("docx")
    .test(/\.docx$/)
    .use("file-loader")
    .loader("file-loader")
    .options({
      name: `[path][name].[ext]`
    });

    config.module
    .rule("pptx")
    .test(/\.pptx$/)
    .use("file-loader")
    .loader("file-loader")
    .options({
      name: `[path][name].[ext]`
    });

    config.module
    .rule("xlsx")
    .test(/\.xlsx$/)
    .use("file-loader")
    .loader("file-loader")
    .options({
      name: `[path][name].[ext]`
    });

    config.module
    .rule("license")
    .test(/\.license$/)
    .use("file-loader")
    .loader("file-loader")
    .options({
      name: `[path][name].[ext]`
    });

    config.module
    .rule("config")
    .test(/\.config$/)
    .use("file-loader")
    .loader("file-loader")
    .options({
      name: `[path][name].[ext]`
    });

    config.module
      .rule("vue")
      .uses.store.get("vue-loader")
      .store.get("options").transformAssetUrls = {
      video: ["src", "poster"],
      source: "src",
      img: "src",
      image: ["xlink:href", "href"],
      a: "href"
    };
  }
};
