(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{538:function(t,s,a){"use strict";a.r(s);var n=a(43),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"交易管理-transaction-management"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#交易管理-transaction-management"}},[t._v("#")]),t._v(" 交易管理 (Transaction Management)")]),t._v(" "),a("p",[t._v("對資料庫執⾏一個交易可能包含一連串的新增、修改或刪除指令，意旨包含對資料庫進行多個異動。為了保證交易的正確與可靠，必須符合ACID (Atomicity, Consistency, Isolation, Durability)")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Atomicity (單元性)：⼀個交易中所含有的所有運算要就全部被執行，要就都不執行，即在交易當中的所有異動都必須要成功，才能算是成功"),a("br"),t._v("\n例如：A 從自⼰帳⼾匯款1000元到 B 的帳⼾。A 帳⼾扣除1000元，B 帳戶增加1000元必須都做完，執⾏過程中發⽣錯誤必須回復 (roll back) 到尚未匯款前的狀態")])]),t._v(" "),a("li",[a("p",[t._v("Consistency (⼀致性)：交易前與交易後的結果都沒有破壞資料庫的完整性，也就是完全符合資料庫設定的規則"),a("br"),t._v("\n例如：A 從自⼰帳⼾匯款1000元到 B 的帳戶。A 帳⼾扣除的金額，必須與 B 帳戶增加的金額一致")])]),t._v(" "),a("li",[a("p",[t._v("Isolation (隔離性)：同⼀筆資料在一個交易尚未完成前不可讓其他交易執行更改，也就是預防同步化 (synchronization) 可能造成的錯誤"),a("br"),t._v("\n例如：A、B 同時從自⼰帳⼾匯款1000元到 C 的帳⼾。當 A 匯款⾄ C 帳⼾時，必須鎖定 C 帳戶直到匯款結束才能讓 B 匯款至 C 帳⼾")])]),t._v(" "),a("li",[a("p",[t._v("Durability (永久性)：一旦交易成功，對資料的變更即永久有效，即使系統故障也不影響，須仰賴資料庫備份與交易易⽇誌 (log)"),a("br"),t._v("\n例如：系統告訴 A 提款成功，但其實這筆交易記錄還在磁碟暫存區等待確定；如果此時停電，交易資料會遺失")])])]),t._v(" "),a("p",[t._v("交易 (transaction) 可將多個異動視為一體，通常會搭配")]),t._v(" "),a("ul",[a("li",[t._v("ROLLBACK 還原執行過的異動")])]),t._v(" "),a("p",[t._v("語法：")]),t._v(" "),a("div",{staticClass:"language-SQL extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ROLLBACK")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[t._v("COMMIT 確定交易 (無法還原執行過的異動)")])]),t._v(" "),a("p",[t._v("語法：")]),t._v(" "),a("div",{staticClass:"language-SQL extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMIT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("若要將多個異動視為同⼀個交易 (transaction)")]),t._v(" "),a("ul",[a("li",[t._v("異異動前加上 BEGIN")])]),t._v(" "),a("p",[t._v("語法：")]),t._v(" "),a("div",{staticClass:"language-SQL extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BEGIN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("範例：")]),t._v(" "),a("div",{staticClass:"language-SQL extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BEGIN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" PUBLISHER "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PUBLISHER_ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PUBLISHER_NAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" CONTACT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PHONE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'P00A'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Publisher A'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Sue'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'04-45678901'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" PUBLISHER "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PUBLISHER_ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PUBLISHER_NAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" CONTACT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PHONE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'P00B'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Publisher B'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hellen'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'07-78907890'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" PUBLISHER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 先查看結果")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ROLLBACK")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" PUBLISHER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 再查看結果\t")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMIT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 無法還原")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);