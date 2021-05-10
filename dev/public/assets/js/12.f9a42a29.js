(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{489:function(s,a,t){s.exports=t.p+"assets/img/psql-1.a89e370d.png"},490:function(s,a,t){s.exports=t.p+"assets/img/psql-2.1e6c6621.png"},491:function(s,a,t){s.exports=t.p+"assets/img/psql-3.c7fac602.png"},536:function(s,a,t){"use strict";t.r(a);var e=t(43),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"資料庫-database-db"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#資料庫-database-db"}},[s._v("#")]),s._v(" 資料庫 (Database, DB)")]),s._v(" "),e("p",[s._v("儲存著大量表格以及相關資料庫物件 (tables, views...) 的總合儲存體。每個資料庫都會轉化成特定檔案並儲存在電腦內")]),s._v(" "),e("h2",{attrs:{id:"關聯式資料庫-relational-database"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#關聯式資料庫-relational-database"}},[s._v("#")]),s._v(" 關聯式資料庫 (Relational Database)")]),s._v(" "),e("p",[s._v("以表格（table）方式來儲存與呈現資料，再以數學集合論為基礎將表格與表格之間建立關聯用以處理複雜的資料關係，SQL 指令就是用於關聯式資料庫"),e("br"),s._v("\n將所有資料儲存在一個表格內會有資料重複問題，如果資料量大會造成浪費儲存空間、資料錯誤率提⾼、增加修改上困難，要解決資料重複的問題，便將一個表格拆成多個表格並透過關聯欄位來做相互的關聯")]),s._v(" "),e("h2",{attrs:{id:"建立一個資料庫"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#建立一個資料庫"}},[s._v("#")]),s._v(" 建立一個資料庫")]),s._v(" "),e("p",[s._v("PostgreSQL 建立資料庫可以用以下三種方式：")]),s._v(" "),e("ul",[e("li",[s._v("使用 CREATE DATABASE SQL 語句來建立")]),s._v(" "),e("li",[s._v("使用 createdb 命令來建立")]),s._v(" "),e("li",[s._v("使用 pgAdmin 工具")])]),s._v(" "),e("p",[s._v("切換使用者為 postgres，進入 postgreSQL")]),s._v(" "),e("div",{staticClass:"language-ssh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sudo - postgres\n")])])]),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("~$ psql\n\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("postgres")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n")])])]),e("p",[e("strong",[s._v("CREATE DATABASE")]),s._v(" 建立資料庫語法：")]),s._v(" "),e("div",{staticClass:"language-SQL extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v(" dbname"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),e("p",[e("strong",[s._v("createdb")]),s._v(" 建立資料庫語法：")]),s._v(" "),e("div",{staticClass:"language-SQL extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[s._v("createdb "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("option")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("dbname "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("description"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),e("p",[s._v("說明：")]),s._v(" "),e("ul",[e("li",[s._v("dbname：要創建的資料庫名稱")]),s._v(" "),e("li",[s._v("description：關於新創建的資料庫相關的說明")]),s._v(" "),e("li",[s._v("options：參數可選項")])]),s._v(" "),e("p",[s._v("參數選項：")]),s._v(" "),e("p",[e("code",[s._v("-D tablespace")]),s._v("：指定資料庫預設的 tablespace"),e("br"),s._v(" "),e("code",[s._v("-e")]),s._v("：將 createdb 生成的命令發送到服務端"),e("br"),s._v(" "),e("code",[s._v("-E encoding")]),s._v("：指定資料庫的編碼"),e("br"),s._v(" "),e("code",[s._v("-l locale")]),s._v("：指定資料庫的語言環境"),e("br"),s._v(" "),e("code",[s._v("-T template")]),s._v("：指定創建此資料庫的模板"),e("br"),s._v(" "),e("code",[s._v("--help")]),s._v("：顯示 createdb 命令的幫助信息"),e("br"),s._v(" "),e("code",[s._v("-h host")]),s._v("：指定伺服器的主機名"),e("br"),s._v(" "),e("code",[s._v("-p port")]),s._v("：指定伺服器監聽的端口，或者 socket 文件"),e("br"),s._v(" "),e("code",[s._v("-U username")]),s._v("：連線資料庫的使用者名稱"),e("br"),s._v(" "),e("code",[s._v("-w")]),s._v("：忽略輸入密碼"),e("br"),s._v(" "),e("code",[s._v("-W")]),s._v("：連接時強制要求輸入密碼")]),s._v(" "),e("p",[e("strong",[s._v("pgAdmin")]),s._v(" 工具建立資料庫，Databases 圖示右鍵 > Create > Database")]),s._v(" "),e("p",[e("img",{attrs:{src:t(489),alt:"psql-1",title:"psql-1"}})]),s._v(" "),e("h2",{attrs:{id:"刪除資料庫"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#刪除資料庫"}},[s._v("#")]),s._v(" 刪除資料庫")]),s._v(" "),e("p",[s._v("PostgreSQL 刪除資料庫可以用以下三種方式：")]),s._v(" "),e("ul",[e("li",[s._v("使用 "),e("strong",[s._v("DROP DATABASE")]),s._v(" SQL 敘述來刪除")]),s._v(" "),e("li",[s._v("使用 "),e("strong",[s._v("dropdb")]),s._v(" 指令來刪除")]),s._v(" "),e("li",[s._v("使用 "),e("strong",[s._v("pgAdmin")]),s._v(" 工具")])]),s._v(" "),e("p",[e("strong",[s._v("DROP DATABASE")]),s._v(" 刪除資料庫：")]),s._v(" "),e("ul",[e("li",[s._v("會刪除資料庫的系統目錄項並且刪除包含資料的檔案目錄")]),s._v(" "),e("li",[s._v("只能由超級管理員或資料庫擁有者執行")])]),s._v(" "),e("div",{staticClass:"language-SQL extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DROP")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXISTS")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" name\n")])])]),e("p",[s._v("參數說明：")]),s._v(" "),e("ul",[e("li",[e("strong",[s._v("IF EXISTS")]),s._v("：如果資料庫不存在則發出提示訊息，而不是錯誤訊息")]),s._v(" "),e("li",[e("strong",[s._v("name")]),s._v("：要刪除的資料庫的名稱")])]),s._v(" "),e("p",[e("strong",[s._v("dropdb")]),s._v(" 刪除資料庫")]),s._v(" "),e("ul",[e("li",[s._v("是 DROP DATABASE 的套件裝器")]),s._v(" "),e("li",[s._v("用於刪除 PostgreSQL 資料庫。")]),s._v(" "),e("li",[s._v("只能由超級管理員或資料庫擁有者執行")])]),s._v(" "),e("div",{staticClass:"language-SQL extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[s._v("dropdb "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("connection"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("option")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("option")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" dbname\n")])])]),e("p",[s._v("參數說明：")]),s._v(" "),e("ul",[e("li",[e("strong",[s._v("dbname")]),s._v("：要刪除的資料庫名。")]),s._v(" "),e("li",[e("strong",[s._v("options")]),s._v("：引數可選項，可以是以下值：")])]),s._v(" "),e("p",[e("code",[s._v("-**e")]),s._v(" ：**顯示 dropdb 生成的指令併發送到資料庫伺服器"),e("br"),s._v(" "),e("code",[s._v("-**i")]),s._v("：**在做刪除的工作之前發出一個驗證提示"),e("br"),s._v(" "),e("code",[s._v("-**V")]),s._v("：**列印 dropdb 版本並退出"),e("br"),s._v(" "),e("code",[s._v("--if-exists")]),s._v("：**如果資料庫不存在則發出提示訊息，而不是錯誤訊息"),e("code"),s._v("--"),e("strong",[s._v("help")]),e("code",[s._v("：顯示有關 dropdb 指令的幫助訊息")]),s._v("-"),e("strong",[s._v("h host")]),e("code",[s._v("：指定執行伺服器的主機名")]),s._v("-**p port"),e("code",[s._v("：**指定伺服器監聽的連接埠，或者 socket 檔案")]),s._v("-**U username"),e("code",[s._v("：**連線資料庫的使用者名稱")]),s._v("-**w"),e("code",[s._v("：**忽略輸入密碼")]),s._v("-"),e("strong",[s._v("W"),e("code",[s._v("：**連線時強制要求輸入密碼")]),s._v("-")]),s._v("-maintenance-db=dbname`：**刪除資料庫時指定連線的資料庫，預設為 postgres，如果它不存在則使用 template1")]),s._v(" "),e("p",[e("strong",[s._v("pgAdmin")]),s._v(" 工具刪除資料庫，指定 Database 右鍵 > Delete/Drop")]),s._v(" "),e("p",[e("img",{attrs:{src:t(490),alt:"psql-2",title:"psql-2"}})]),s._v(" "),e("h2",{attrs:{id:"選擇資料庫"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#選擇資料庫"}},[s._v("#")]),s._v(" 選擇資料庫")]),s._v(" "),e("p",[e("strong",[s._v("資料庫的指令")]),s._v("：")]),s._v(" "),e("p",[s._v("使用 "),e("code",[s._v("\\l")]),s._v(" 用於檢視已經存在的資料庫")]),s._v(" "),e("div",{staticClass:"language-SQL extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[s._v("postgres"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# \\l")]),s._v("\n")])])]),e("p",[s._v("使用 "),e("code",[s._v("\\c")]),s._v(" 加上資料庫名來進入資料庫")]),s._v(" "),e("div",{staticClass:"language-SQL extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[s._v("postgres"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# \\c dbname")]),s._v("\n")])])]),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[s._v("psql "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("h localhost "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5432")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("U postgress dbname\n")])])]),e("p",[e("strong",[s._v("pgAdmin")]),s._v(" 工具：")]),s._v(" "),e("p",[e("img",{attrs:{src:t(491),alt:"psql-3",title:"psql-3"}})]),s._v(" "),e("h2",{attrs:{id:"備份-還原資料庫"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#備份-還原資料庫"}},[s._v("#")]),s._v(" 備份/還原資料庫")]),s._v(" "),e("ul",[e("li",[e("strong",[s._v("pg_dump")]),s._v(" 指令來備份整個資料庫")])]),s._v(" "),e("p",[s._v("語法：")]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[s._v("pg_dump "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("option")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("dbname"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),e("p",[s._v("常用選項參數說明：")]),s._v(" "),e("p",[e("code",[s._v("-F")]),s._v(" or "),e("code",[s._v("--format")]),s._v("：選擇輸出的格式，格式可以為以下選項："),e("br"),s._v("\np：輸出純文本SQL腳本文件（預設）"),e("br"),s._v("\nt：輸出適合輸入到 pg_restore 裡的 tar 歸檔文件"),e("br"),s._v("\nc：輸出適於給 pg_restore 用的客製化歸檔。 這是最靈活的格式，它允許對裝載的資料和對像定義進行重新排列，預設是壓縮的"),e("br"),s._v(" "),e("code",[s._v("-f")]),s._v(" or "),e("code",[s._v("--file")]),s._v("：把輸出發往指定的文件")]),s._v(" "),e("p",[s._v("範例：")]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[s._v("pg_dump "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("F c "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("f mydb "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mydb"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("dump")]),s._v("\n")])])]),e("ul",[e("li",[e("strong",[s._v("pg_restore")]),s._v(" 指令來還原資料庫")])]),s._v(" "),e("p",[s._v("語法：")]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[s._v("pg_restore "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("option")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" dbname\n")])])]),e("p",[s._v("常用選項參數說明：")]),s._v(" "),e("p",[e("code",[s._v("-d")]),s._v(" or "),e("code",[s._v("--dbname=")]),s._v(" ：與指定資料庫連線並且直接恢復到該資料庫中"),e("br"),s._v(" "),e("code",[s._v("-v")]),s._v(" or "),e("code",[s._v("--verbose")]),s._v("：輸出比較詳細的訊息")]),s._v(" "),e("p",[s._v("範例：")]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[s._v("pg_restore "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("d newdb mydb"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("dump")]),s._v("\n")])])]),e("h2",{attrs:{id:"綱要-schema"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#綱要-schema"}},[s._v("#")]),s._v(" 綱要 (Schema)")]),s._v(" "),e("p",[s._v("定義了資料庫物件的集合，包含表格、屬性 (fields)、關聯聯性 (relationships)、視圖 (views)、預存程序 (stored procedures) 等資料庫物件")]),s._v(" "),e("p",[s._v("優點：")]),s._v(" "),e("ul",[e("li",[s._v("允許多個使用者使用一個資料庫並且不會互相干擾")]),s._v(" "),e("li",[s._v("將資料庫物件組織成邏輯組以便更容易管理")]),s._v(" "),e("li",[s._v("第三方應用的物件可以放在獨立的 Schema 中，這樣它們就不會與其他物件的名稱發生衝突")])]),s._v(" "),e("p",[s._v("建立 SCHEMA 語法："),e("strong",[s._v("CREATE SCHEMA")])]),s._v(" "),e("div",{staticClass:"language-SQL extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[s._v("postgres"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# create schema myschema;")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SCHEMA")]),s._v("\n")])])]),e("p",[s._v('輸出結果 "CREATE SCHEMA" 就代表 SCHEMA 建立成功')]),s._v(" "),e("p",[s._v("刪除 SCHEMA 語法：")]),s._v(" "),e("ul",[e("li",[s._v("刪除一個空的 SCHEMA：")])]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DROP")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SCHEMA")]),s._v(" myschema"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),e("ul",[e("li",[s._v("刪除一個 SCHEMA 以及其中包含的所有物件：")])]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DROP")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SCHEMA")]),s._v(" myschema "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CASCADE")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),e("h2",{attrs:{id:"資料庫正規化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#資料庫正規化"}},[s._v("#")]),s._v(" 資料庫正規化")]),s._v(" "),e("ul",[e("li",[s._v("建立資料庫內的表格與欄位時所應採⽤的設計法則")]),s._v(" "),e("li",[s._v("減少表格內的資料重複過冗")]),s._v(" "),e("li",[s._v("增進資料的一致性")])]),s._v(" "),e("p",[s._v("正規化種類")]),s._v(" "),e("ol",[e("li",[s._v("第 1 正規化 (First Normal Form, 1NF)：每個欄位內都是儲存單⼀值")]),s._v(" "),e("li",[s._v("第 2 正規化 (Second Normal Form, 2NF)：符合第 1 正規化，非鍵欄位需要與鍵欄位 (主鍵與候選鍵) 有相依性，否則應予移除")]),s._v(" "),e("li",[s._v("第 3 正規化 (Third Normal Form, 3NF)：符合第 2 正規化，非鍵欄位間不應有相依性，否則應予移除")])]),s._v(" "),e("p",[s._v("一般建議滿足 3NF 即可，滿足越多正規化，理論上而⾔資料的關聯聯會有更好的約束性；但也導致表格過多、資料更破碎而需要常常合併表格造成執行效能差的結果")])])}),[],!1,null,null,null);a.default=r.exports}}]);