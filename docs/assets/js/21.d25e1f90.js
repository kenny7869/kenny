(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{584:function(s,t,a){s.exports=a.p+"assets/img/rsys-3.e4c20f4b.jpg"},585:function(s,t,a){s.exports=a.p+"assets/img/rsys-4.5617c5e1.jpg"},639:function(s,t,a){"use strict";a.r(t);var e=a(43),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"postgresql-安裝與配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#postgresql-安裝與配置"}},[s._v("#")]),s._v(" PostgreSQL 安裝與配置")]),s._v(" "),e("p",[s._v("PostgreSQL 96 on CentOS 8"),e("br"),s._v(" "),e("a",{attrs:{href:"https://www.postgresql.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.postgresql.org/"),e("OutboundLink")],1)]),s._v(" "),e("h2",{attrs:{id:"install"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[s._v("#")]),s._v(" Install")]),s._v(" "),e("ul",[e("li",[s._v("列出可用的 PostgreSQL 安裝包")])]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("dnf module list postgresql\n")])])]),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("CentOS-8 - AppStream\nName          Stream    Profiles              Summary                                                 \npostgresql    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("d"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("    client, server "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("d"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("    PostgreSQL server and client module                     \npostgresql    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9.6")]),s._v("       client, server "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("d"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("    PostgreSQL server and client module \n")])])]),e("p",[s._v("輸出顯示 postgresql 安裝包可用有兩個。每個都有兩個配置文件：sever 和 client。"),e("br")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("CentOS 8 預設安裝是  "),e("code",[s._v("postgresql 10")])])]),s._v(" "),e("li",[e("p",[s._v("若要安裝 "),e("code",[s._v("postgresql 9.6")]),s._v(" 如下")])])]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dnf module "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" postgresql:9.6\n")])])]),e("ul",[e("li",[s._v("安裝 "),e("code",[s._v("contrib")]),s._v(" 軟件包，該軟件包為 PostgreSQL 資料庫提供了一些附加功能")])]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dnf "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" postgresql-contrib\n")])])]),e("h2",{attrs:{id:"官網-rpm-安裝包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#官網-rpm-安裝包"}},[s._v("#")]),s._v(" 官網 RPM 安裝包")]),s._v(" "),e("ul",[e("li",[s._v("只安裝 server")])]),s._v(" "),e("p",[s._v("rpm 下載網址："),e("a",{attrs:{href:"https://www.postgresql.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.postgresql.org/"),e("OutboundLink")],1)]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("dnf "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" https://download.postgresql.org/pub/repos/yum/reporpms/EL-8-x86_64/pgdg-redhat-repo-latest.noarch.rpm\ndnf -qy module disable postgresql\ndnf "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" postgresql96-server\n")])])]),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("dnf -y "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" postgresql96-contrib\n")])])]),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("/usr/pgsql-9.6/bin/postgresql96-setup initdb\nsystemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" postgresql-9.6\nsystemctl start postgresql-9.6\n")])])]),e("p",[s._v("安裝好之後lib目錄存放位置")]),s._v(" "),e("p",[e("img",{attrs:{src:a(584),alt:"rsys-3",title:"rsys-3"}})]),s._v(" "),e("p",[s._v("安裝好之後 config 目錄存放位置")]),s._v(" "),e("p",[e("img",{attrs:{src:a(585),alt:"rsys-4",title:"rsys-4"}})]),s._v(" "),e("h2",{attrs:{id:"config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#config"}},[s._v("#")]),s._v(" Config")]),s._v(" "),e("p",[e("code",[s._v("postgresql.conf")])]),s._v(" "),e("ul",[e("li",[s._v("listen_addresses = '*'")]),s._v(" "),e("li",[s._v("max_connections = 500")]),s._v(" "),e("li",[s._v("superuser_reserved_connections = 3")]),s._v(" "),e("li",[s._v("tcp_keepalives_idle = 60")]),s._v(" "),e("li",[s._v("shared_buffers = 4096MB")]),s._v(" "),e("li",[s._v("temp_buffers = 16MB")]),s._v(" "),e("li",[s._v("work_mem = 32MB")]),s._v(" "),e("li",[s._v("shared_preload_libraries = 'pg_stat_statements'")]),s._v(" "),e("li",[s._v("log_line_prefix = '%m %h %u %d: '")])]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("POSTGRESQL_CONF")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/var/lib/pgsql/9.6/data/'")]),s._v("\n")])])]),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/listen_addresses/s/^#//"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${POSTGRESQL_CONF}")]),s._v("postgresql.conf\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/listen_addresses/s/localhost/*/"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${POSTGRESQL_CONF}")]),s._v("postgresql.conf\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/max_connections/s/[[:digit:]]\\+/500/"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${POSTGRESQL_CONF}")]),s._v("postgresql.conf\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/superuser_reserved_connections/s/^#//"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${POSTGRESQL_CONF}")]),s._v("postgresql.conf\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/tcp_keepalives_idle/s/^#//"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${POSTGRESQL_CONF}")]),s._v("postgresql.conf\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/tcp_keepalives_idle/s/[[:digit:]]\\+/60/"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${POSTGRESQL_CONF}")]),s._v("postgresql.conf\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/^shared_buffers/s/= [[:digit:]]\\+MB/= 4096MB/"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${POSTGRESQL_CONF}")]),s._v("postgresql.conf\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/temp_buffers/s/^#//"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${POSTGRESQL_CONF}")]),s._v("postgresql.conf\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/temp_buffers/s/= [[:digit:]]\\+MB/= 16MB/"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${POSTGRESQL_CONF}")]),s._v("postgresql.conf\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/^[#]\\{0,1\\}work_mem/s/^#//"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${POSTGRESQL_CONF}")]),s._v("postgresql.conf\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/^work_mem/s/= [[:digit:]]\\+MB/= 32MB/"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${POSTGRESQL_CONF}")]),s._v("postgresql.conf\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/^[#]\\{0,1\\}shared_preload_libraries/s/^#//"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${POSTGRESQL_CONF}")]),s._v("postgresql.conf\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"/^shared_preload_libraries/s/''/'pg_stat_statements'/\"")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${POSTGRESQL_CONF}")]),s._v("postgresql.conf\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"/^log_line_prefix/s/'.*'/'%m %h %u %d: '/\"")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${POSTGRESQL_CONF}")]),s._v("postgresql.conf\n")])])]),e("p",[s._v("audit")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$a")]),s._v("\\pgaudit\\.role = '")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"''\"")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${POSTGRESQL_CONF}")]),s._v("postgresql.conf\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$a")]),s._v("\\pgaudit\\.log = '")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"''\"")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${POSTGRESQL_CONF}")]),s._v("postgresql.conf\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$a")]),s._v("\\pgaudit\\.log_catalog = off'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${POSTGRESQL_CONF}")]),s._v("postgresql.conf\n")])])]),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" - postgres\npsql\n")])])]),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("database")]),s._v(" nextec"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\\c nextec\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" role postgres "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" pgaudit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("log "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'read, write, ddl'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" role postgres "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" pgaudit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("role "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'postgres'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" uforduserjoy "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v("\n\tLOGIN\n\tNOSUPERUSER\n\tNOCREATEDB\n\tNOCREATEROLE\n\tINHERIT\n\tNOREPLICATION\n\tCONNECTION "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LIMIT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\tPASSWORD "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1q2S#c4r5G^n'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CONNECT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v(" nextec "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" uforduserjoy"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USAGE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SCHEMA")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" uforduserjoy"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALL")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIVILEGES")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALL")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLES")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IN")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SCHEMA")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" uforduserjoy"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALL")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIVILEGES")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALL")]),s._v(" SEQUENCES "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IN")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SCHEMA")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" uforduserjoy"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" role uforduserjoy "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" pgaudit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("log "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'read, write, ddl'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" role uforduserjoy "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" pgaudit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("role "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'uforduserjoy'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" ufoappuser "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v("\n\tLOGIN\n\tNOSUPERUSER\n\tNOCREATEDB\n\tNOCREATEROLE\n\tINHERIT\n\tNOREPLICATION\n\tCONNECTION "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LIMIT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\tPASSWORD "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ufo=RELuvu9527'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CONNECT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v(" nextec "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" ufoappuser"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USAGE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SCHEMA")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" ufoappuser"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALL")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIVILEGES")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALL")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLES")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IN")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SCHEMA")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" ufoappuser"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALL")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIVILEGES")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALL")]),s._v(" SEQUENCES "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IN")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SCHEMA")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" ufoappuser"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" role ufoappuser "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" pgaudit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("log "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'read, write, ddl'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" role ufoappuser "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" pgaudit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("role "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ufoappuser'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\\q\n")])])]),e("p",[e("code",[s._v("pg_hba.conf")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("host    nextec          uforduserjoy                127.0.0.1/32    md5\nhost    nextec          ufoappuser              192.168.10.0/24        md5\n")])])]),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /usr/pgsql-9.6/bin/pg_ctl reload")]),s._v("\nsystemctl start postgresql-9.6\n")])])]),e("h2",{attrs:{id:"restore"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#restore"}},[s._v("#")]),s._v(" Restore")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("s3cmd get "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("s3cmd "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" s3://mgmt/dbdumps/ "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" -1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$4")]),s._v("}'")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" /var/lib/pgsql/9.6/nextec.backup\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" postgres:postgres /var/lib/pgsql/9.6/nextec.backup\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" - postgres\npg_restore -d nextec -v /var/lib/pgsql/9.6/nextec.backup "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" /var/lib/pgsql/9.6/nextec.backup\n")])])]),e("h2",{attrs:{id:"backup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#backup"}},[s._v("#")]),s._v(" Backup")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /opt/dbdumps\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R postgres:postgres /opt/dbdumps\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /opt/dbdumps/dbdump.sh "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"EOF"\n#!/bin/bash\n\nS3CMD=\'/usr/bin/s3cmd\'\nDB=\'nextec\'\nFILENAME_PATTERN=\'backup$\'\nS3_PATH=\'s3://mgmt/dbdumps\'\nS3_KEEP=30\nS3_DEL_FILE_LIST=\'\'\nLOCAL_PATH=\'/opt/dbdumps\'\nLOCAL_KEEP=3\nLOCAL_DEL_FILE_LIST=\'\'\n\n_time=`date +%Y%m%d-%H%M%S`\nDB_BACKUP_FILENAME="$LOCAL_PATH/$_time.backup"\n\n# dump db\nfunction backup_db() {\n    su -m -s /bin/sh postgres -c "pg_dump -F c -b -v -f $DB_BACKUP_FILENAME $DB"\n    chmod o= $DB_BACKUP_FILENAME\n}\n\n# upload backup-file to s3\nfunction upload_s3() {\n    $S3CMD put $DB_BACKUP_FILENAME $S3_PATH/\n}\n\nfunction get_local_del_file_list() {\n    file_count=`ls -lv $LOCAL_PATH/ | grep ${FILENAME_PATTERN} | wc -l`\n    del_count=$[file_count-LOCAL_KEEP]\n    if [[ $del_count -gt 0 ]]; then\n        LOCAL_DEL_FILE_LIST=`ls -v $LOCAL_PATH/ | grep ${FILENAME_PATTERN} | head -$del_count`\n    fi\n}\n\nfunction get_s3_del_file_list() {\n    file_count=`$S3CMD ls $S3_PATH/ 2>/dev/null | grep ${FILENAME_PATTERN} | wc -l`\n    del_count=$[file_count-S3_KEEP]\n    if [[ $del_count -gt 0 ]]; then\n        S3_DEL_FILE_LIST=`$S3CMD ls $S3_PATH/ 2>/dev/null | grep ${FILENAME_PATTERN} | awk \'{print $4}\' | sort -V | head -$del_count`\n    fi\n}\n\necho "dump db..."\nbackup_db\necho "dbdump: $DB_BACKUP_FILENAME"\n\necho\necho "upload file to s3..."\nupload_s3\necho\n\nget_local_del_file_list\nif [[ $LOCAL_DEL_FILE_LIST ]]; then\n    for f in $LOCAL_DEL_FILE_LIST\n    do\n        rm -f $LOCAL_PATH/$f\n        echo "delete local file..."\n        echo "delete: $LOCAL_PATH/$f"\n    done\nfi\n\nget_s3_del_file_list\nif [[ $S3_DEL_FILE_LIST ]]; then\n    for f in $S3_DEL_FILE_LIST\n    do\n        echo "delete remote file..."\n        $S3CMD del $f\n    done\nfi\necho\nEOF')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("750")]),s._v(" /opt/dbdumps/dbdump.sh\n")])])]),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10    2   *   *   *   root    /opt/dbdumps/dbdump.sh"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/crontab\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);