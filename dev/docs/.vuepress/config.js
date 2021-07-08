module.exports = {
  port:9443,
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
      {text: "系統資源查看", link: "/Linux/sys resource"},
      ],
      },
      { text: "Linux Server", 
      items:[
      {text: "NetworkManager", link: "/linuxserver/NetworkManager/"},
      {text: "Firewalld", link: "/linuxserver/firewalld/"},
      {text: "Route Table", link: "/linuxserver/Route Table"},
      {text: "SFTP簡易設定", link: "/linuxserver/sftp/"},
      {text: "SSL與SNI設定", link: "/linuxserver/SSL SNI/"},
      {text: "Rsyslog簡易設定", link: "/linuxserver/rsyslog/"},
      {text: "Apache與Tomcat簡易安裝與設定", link: "/linuxserver/httpd2tomcat"},
      ],
      },
      { text: "AWS Server", link: "/aws server/"},
      { 
        text: "AWS Certification", 
       /* ariaLabel: "AWS certification Menu", */
       items: [
       {text: "AWS Cloud Practitioner-1", link:"/aws certification/ACP-1/"},
       {text: "AWS Solutions Architect Associate", link:"/aws certification/SAA/"},
              ],
      },
      {text: "PostgreSQL", 
      /* ariaLabel: "English Menu", */
      items: [
      {text: "PostgreSQL 安裝與配置", link: "/pgsql/pgset/"},
      {text: "SQL語法", link:"/pgsql/syntax/" },
      {text: "資料庫", link:"/pgsql/Database/"},
      {text: "表格", link:"/pgsql/Table"},
      {text: "交易管理", link:"/pgsql/Transaction/"},
      {text: "資料查詢", link: "/pgsql/Query"},
      {text: "資料庫角色、使用者權限管理", link: "/pgsql/Authority"},
            ],
      },
      {text: "JAVA", 
      /* ariaLabel: "English Menu", */
      items: [
      {text: "HelloWorld", link:"/JAVA/helloworld"}, 
      {text: "變數、資料型態、運算子", link:"/JAVA/variable/"},
      {text: "字串與陣列", link:"/JAVA/string/"},
      {text: "控制流程語法", link:"/JAVA/controlflow"},
      ], 
      },
      {text: "Spring 5",

      items: [
        {text: "Spring Core", link:"/Spring/Spring Core"},
        {text: "Spring MVC", link:"/Spring/Spring MVC"},
      ],
      },
        ],

	sidebarDepth: 2,
  sidebar: {  
      
      "/aws server/" : [
        "",
        "awshttpd2tomcat",
        "IAM",
        "EC2",
        "Spot Instance",
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
      "sys resource",
      ],

      "/pgsql/": [
      //"",
      "pgset",
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
      "firewalld",
      "Route Table",
      "sftp",
      "SSL SNI",
      "rsyslog",
      "httpd2tomcat",    
    ],

    "/JAVA/": [
     //"",
     "helloworld", 
     "variable",
     "string",
     "controlflow",
    ],

    "/Spring/": [
      //"",
      "Spring Core",
      "Spring MVC",
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
