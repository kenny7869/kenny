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
      { text: "Linux Basic", 
      /* ariaLabel: "Linux Menu", */
      items: [
      {text: "系統目錄結構與管理", link: "/Linux/system directory"},
      {text: "文件基本屬性", link: "/Linux/file basic"},
      {text: "用戶和群組管理", link: "/Linux/account"},
      {text: "磁碟管理", link: "/Linux/disk"},
      ],
      },
      { text: "Linux Server", link: "/linuxserver/NetworkManager/"},
      { text: "AWS Server", link: "/aws server/"},
      { 
        text: "AWS Certification", 
       /* ariaLabel: "AWS certification Menu", */
       items: [
       {text: "AWS Cloud Practitioner-1", link:"/aws certification/ACP-1/"},
       {text: "AWS Solutions Architect Associate", link:"/aws certification/SAA/"},
              ],
      },
      {text: "Network Associate", link:"/Network Associate/VLAN"},
      {text: "PostgreSQL", 
      /* ariaLabel: "English Menu", */
      items: [
      { text: "SQL語法", link:"/pgsql/Syntax/" },
      { text: "資料庫", link:"/pgsql/Database/"},
      { text: "表格", link:"/pgsql/Table"},
      { text: "交易管理", link:"/pgsql/Transaction/"},
      { text: "資料查詢", link: "/pgsql/Query"},
      { text: "資料庫角色、使用者權限管理", link: "/pgsql/Authority"},
            ],
      },
      {text: "JAVA", 
      /* ariaLabel: "English Menu", */
      items: [
      {text: "HelloWorld", link:"/JAVA/helloworld"}, 
      {text: "變數、資料型態、運算子", link:"/JAVA/variable/"},
      {text: "字串與陣列", link:"/JAVA/string/"},
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
        "XRay",  
        ],
        
      "/aws certification/": [
      //"",
      "ACP-1",
      "SAA",
         ], 
         
      "/Linux/": [
      //"",
      "system directory",
      "file basic",
      "account",
      "disk",
      ],

      "/pgsql/": [
      //"",
      "Database",
      "syntax",
      "Table",
      "Transaction",
      "Query",
      "Authority",
    ],
    
    "/linuxserver/": [
      //"",
      "NetworkManager",
      "sys resource",
      "Route Table",
      "firewalld",
      "sftp",
      "httpd2tomcat",
      "SSL SNI",
      "rsyslog",
      "pgsql",
    ],

    "/Network Associate/": [
      //"",
      "VLAN",
      "STP",
    ],

    "/JAVA/": [
     //"",
     "helloworld", 
     "variable",
     "string",
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
