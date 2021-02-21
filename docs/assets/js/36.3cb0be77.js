(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{469:function(s,a,t){"use strict";t.r(a);var e=t(43),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"sql-語法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sql-語法"}},[s._v("#")]),s._v(" SQL 語法")]),s._v(" "),t("h2",{attrs:{id:"sql-語法種類"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sql-語法種類"}},[s._v("#")]),s._v(" SQL 語法種類")]),s._v(" "),t("ul",[t("li",[s._v("資料定義語言 ( Data Definition Language, DDL )：用以建立、修改或移除資料庫或其他資料庫物件的語法，以 "),t("strong",[s._v("CREATE")]),s._v("、 "),t("strong",[s._v("ALTER")]),s._v("、 "),t("strong",[s._v("DROP")]),s._v(" 語法為主")]),s._v(" "),t("li",[s._v("資料處理語法 (Data Manipulation Language, DML)：用以處理理表格內資料的語法，以 "),t("strong",[s._v("INSERT")]),s._v(" 、"),t("strong",[s._v("UPDATE")]),s._v("、"),t("strong",[s._v("DELETE")]),s._v("、"),t("strong",[s._v("SELECT")]),s._v(" 語法為主")]),s._v(" "),t("li",[s._v("資料控制語⾔言 (Data Control Language, DCL)：對使⽤者設定資料庫或其他資料庫物件使用權限的語法，以"),t("strong",[s._v("GRANT")]),s._v("、"),t("strong",[s._v("REVOKE")]),s._v(" 語法為主")])]),s._v(" "),t("p",[s._v("預設情況下 PostgreSQL 安裝完成後，自帶了一個命令行工具 SQL Shell (psql)"),t("br"),s._v("\nLinux 系統可以直接切換到 postgres 使用這來開啟命令行工具：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" -i -u postgres\n")])])]),t("p",[s._v("進入命令行工具，我們可以使用\\help來查看各個命令的語法：")]),s._v(" "),t("div",{staticClass:"language-SQL extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("postgres"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# \\help <command_name>")]),s._v("\n")])])]),t("h2",{attrs:{id:"語法結構"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#語法結構"}},[s._v("#")]),s._v(" 語法結構")]),s._v(" "),t("p",[s._v("SQL 語法包含一連串的命令，命令是由一系列的"),t("strong",[s._v("指示記號所組合")]),s._v("而成，以"),t("strong",[s._v("分號結尾")]),t("br"),s._v("\n一個 SQL 語句通常包含了關鍵字、識別項（字段）、文字、特殊符號"),t("br"),s._v("\n實例：")]),s._v(" "),t("div",{staticClass:"language-SQL extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" MY_TABLE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" MY_TABLE "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" A "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" MY_TABLE "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hi there'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("ul",[t("li",[s._v("關鍵字 （Keyword）：意即在 SQL 語言中，其具有固定的意義")]),s._v(" "),t("li",[s._v("識別項（Identifier）：用於識別表格的名稱，欄位名稱，或是其他的資料庫物件")])]),s._v(" "),t("p",[s._v("關鍵字和無引號識別項都是不分大小寫：")]),s._v(" "),t("div",{staticClass:"language-SQL extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" MY_TABLE "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" A "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("等同於")]),s._v(" "),t("div",{staticClass:"language-SQL extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("uPDaTE")]),s._v(" my_TabLE "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SeT")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("常見寫法，就是把關鍵字用大寫表示，而識別項名稱使用小寫")]),s._v(" "),t("div",{staticClass:"language-SQL extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" my_table "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("引號識別項（限制的識別項），可以包含任何字元，除了字元碼為 0 的字元以外")]),s._v(" "),t("div",{staticClass:"language-SQL extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"my_table"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v('以上例子 "my_table" 就會被識別為名稱為「my_table」的表格或欄位，而無引號的 my_table 就會被視為是關鍵字')]),s._v(" "),t("ul",[t("li",[s._v("字串常數：指的是用單引號括住的任意字元串列")])]),s._v(" "),t("div",{staticClass:"language-SQL extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foobar'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("等同於")]),s._v(" "),t("div",{staticClass:"language-SQL extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bar'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("兩個字串常數如果只用空白及至少一個換行符號所分隔的話，那個它們會被連在一起，和寫成一個字串是一樣的"),t("br"),s._v("\n但如果是以下這樣語法上就不正確了")]),s._v(" "),t("div",{staticClass:"language-SQL extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bar'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h2",{attrs:{id:"特殊字元"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特殊字元"}},[s._v("#")]),s._v(" 特殊字元")]),s._v(" "),t("ul",[t("li",[s._v("錢字號 "),t("code",[s._v("$")]),s._v(" 其後接著數字的話，用來表示函數宣告或預備指令的參數編號。其他的用法還有識別項的一部份，或是錢字引號常數")]),s._v(" "),t("li",[s._v("小括號 "),t("code",[s._v("( )")]),s._v(" 一般用來強調表示式並且優先運算。還有某些情況用於表示某些 SQL 指令的部份的必要性")]),s._v(" "),t("li",[s._v("中括號 "),t("code",[s._v("[ ]")]),s._v(" 用於組成陣列的各個元素")]),s._v(" "),t("li",[s._v("逗號 "),t("code",[s._v(",")]),s._v(" 用於一般語法上的結構需要，來分隔列表中的單元")]),s._v(" "),t("li",[s._v("分號 "),t("code",[s._v(";")]),s._v(" 表示 SQL 指令的結束。它不能出現在指令中的其他位置，除非是在字串常數當中，或是引號識別項")]),s._v(" "),t("li",[s._v("冒號 "),t("code",[s._v(":")]),s._v(" 用在取得陣列的小項")]),s._v(" "),t("li",[s._v("米字號 "),t("code",[s._v("*")]),s._v(" 用來表示表格中所有的欄位，或複合性的內容。它也可以用於函數宣告時，不限制固定數量的參數")]),s._v(" "),t("li",[s._v("頓號 "),t("code",[s._v(".")]),s._v(" 用在數值常數之中，也用於區分結構、表格、及欄位名稱")])])])}),[],!1,null,null,null);a.default=r.exports}}]);