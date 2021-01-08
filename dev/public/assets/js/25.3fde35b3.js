(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{440:function(a,s,t){"use strict";t.r(s);var e=t(43),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"firewalld"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#firewalld"}},[a._v("#")]),a._v(" Firewalld")]),a._v(" "),t("h2",{attrs:{id:"安裝-firewalld"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安裝-firewalld"}},[a._v("#")]),a._v(" 安裝 firewalld")]),a._v(" "),t("ul",[t("li",[a._v("請先確認 iptables 是否有被啟用，若系統上原本就有運行 iptables 的防火牆，一定要先將其關閉後，才能啟用 firewalld")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 檢查 iptables 服務是否正在運行")]),a._v("\nsystemctl status iptables\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 停止正在執行的 iptables 服務")]),a._v("\nsystemctl stop iptables\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 將 iptables 服務永久關閉")]),a._v("\nsystemctl mask iptables\n")])])]),t("ul",[t("li",[a._v("firewalld 在 RHEL/CentOS 7、8，應該是預設就會安裝好的，若您的系統上沒有安裝，可用 yum 安裝")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 檢查 firewalld 服務狀態")]),a._v("\nsystemctl status firewalld\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 啟動 firewalld 服務")]),a._v("\nsystemctl start firewalld\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 停止 firewalld 服務")]),a._v("\nsystemctl stop firewalld\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 重新啟動 firewalld 服務")]),a._v("\nsystemctl restart firewalld\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#重新載入防火牆設定")]),a._v("\nfirewall-cmd --reload\n")])])]),t("h2",{attrs:{id:"查詢"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查詢"}},[a._v("#")]),a._v(" 查詢")]),a._v(" "),t("ul",[t("li",[a._v("查詢預設區域")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("firewall-cmd --get-default-zone\n")])])]),t("ul",[t("li",[a._v("查看 "),t("code",[a._v("firewalld")]),a._v(" 有支援的服務")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("firewall-cmd --get-services\n")])])]),t("ul",[t("li",[a._v("查看目前區域中有開 Port 的服務")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("firewall-cmd --list-services\n")])])]),t("ul",[t("li",[a._v("列出詳細設定")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("firewall-cmd  --list-all\n")])])]),t("h2",{attrs:{id:"開啟連接埠"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#開啟連接埠"}},[a._v("#")]),a._v(" 開啟連接埠")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("-zone")]),a._v("：指定區域")]),a._v(" "),t("li",[t("code",[a._v("-add-port")]),a._v("：加入欲開啟的連接埠，並指定通訊協定")]),a._v(" "),t("li",[t("code",[a._v("–remove-port")]),a._v("：移除開啟的連接埠，並指定通訊協定")]),a._v(" "),t("li",[t("code",[a._v("–permanent")]),a._v("：重開系統就會永久生效")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("firewall-cmd --zone"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("public --add-port"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("6666")]),a._v("/tcp --permanent\n\nfirewall-cmd --zone"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("public --remove-port"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("6666")]),a._v("/tcp --permanent\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#一次開啟多個")]),a._v("\nfirewall-cmd --zone"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("public --add-port"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("6666")]),a._v("-6670/tcp\n")])])]),t("ul",[t("li",[t("code",[a._v("–add-service")]),a._v("：透過服務名稱開放")]),a._v(" "),t("li",[t("code",[a._v("-remove-service")]),a._v("：透過服務名稱移除")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("firewall-cmd --zone"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("public --add-service"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("mysql --permanent\n\nfirewall-cmd --zone"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("public --remove-service"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("mysql --permanent\n")])])]),t("h2",{attrs:{id:"連接埠轉發"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#連接埠轉發"}},[a._v("#")]),a._v(" 連接埠轉發")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("–add-forward-port")]),a._v("：將來自連接埠 A 的資料轉發")]),a._v(" "),t("li",[t("code",[a._v("toport")]),a._v("：轉發至本機其他指定 port")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("firewall-cmd --zone"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("public --add-forward-port"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("port"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("22")]),a._v(":proto"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("tcp:toport"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2233")]),a._v("\n")])])]),t("ul",[t("li",[t("code",[a._v("toaddr")]),a._v("：資訊轉發到其他位址的相同連接埠")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("firewall-cmd --zone"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("public --add-forward-port"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("port"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("22")]),a._v(":proto"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("tcp:toaddr"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".10.1\n")])])]),t("ul",[t("li",[t("code",[a._v("-add-masquerade")]),a._v("：連接埠轉發如果是不同主機，就要啟用區域的偽裝功能，將私有網路的地址將隱藏並映射到一個公有 IP")]),a._v(" "),t("li",[t("code",[a._v("–remove-masquerade")]),a._v("：移除偽裝功能")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("firewall-cmd --zone"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("public --add-masquerade\n")])])]),t("h2",{attrs:{id:"rich-rules"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rich-rules"}},[a._v("#")]),a._v(" Rich rules")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("–add-rich-rule")]),a._v("：新增")]),a._v(" "),t("li",[t("code",[a._v("–remove-rich-rule")]),a._v("：移除")]),a._v(" "),t("li",[a._v("IP白名單：允IP存取")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("firewall-cmd --zone"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("public --add-rich-rule "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'rule family=\"ipv4\" source address=192.168.10.10 accept'")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#執行結果")]),a._v("\nrule "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("family")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"ipv4"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("address")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"192.168.10.1"')]),a._v(" accept\n")])])]),t("ul",[t("li",[a._v("IP黑名單：拒絕IP存取")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("firewall-cmd --zone"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("public --add-rich-rule "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'rule family="ipv4" source address="192.168.10.10" port port=22 protocol=tcp reject\'')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#執行結果")]),a._v("\nrule "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("family")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"ipv4"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("address")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"192.168.10.10"')]),a._v(" reject\n")])])]),t("ul",[t("li",[a._v("也可以利用rich rules來設定連接埠轉發，如果轉發至不同主機的話，masquerade要開啟")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("firewall-cmd --zone"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("public --add-rich-rule "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'rule family=ipv4 source address=192.168.10.1 forward-port port=80 protocol=tcp to-port=8080'")]),a._v("\n")])])]),t("ul",[t("li",[a._v("接受特定 IP any port 都可連入，大部分用來主機弱點掃描，zone 選擇為 trusted")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("firewall-cmd --zone"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("trusted --add-source"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"192.168.1.1/32"')]),a._v(" --permanent\n")])])]),t("h2",{attrs:{id:"關於zone的說明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#關於zone的說明"}},[a._v("#")]),a._v(" 關於zone的說明")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("Zone")]),a._v(" "),t("th",[a._v("Dedfault configuration")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("trusted")]),a._v(" "),t("td",[a._v("完全信任的區域，接受所有連線")])]),a._v(" "),t("tr",[t("td",[a._v("public")]),a._v(" "),t("td",[a._v("公開區域，預設不信任其他電腦與網路，只有被允許的連線才能進入。通常大部分的連線設定都會放在這裡")])]),a._v(" "),t("tr",[t("td",[a._v("external")]),a._v(" "),t("td",[a._v("公開區域，適用於 NAT 網路環境")])]),a._v(" "),t("tr",[t("td",[a._v("internal")]),a._v(" "),t("td",[a._v("內部網路區域，在此區域中不應該會有惡意的攻擊者。只有被允許的連線可以進入")])]),a._v(" "),t("tr",[t("td",[a._v("dmz")]),a._v(" "),t("td",[a._v("非軍事區域（demilitarized zone，有點像是放在外頭的危險區域），允許外部的連線進入，但其對內的連線則有限制，只有被允許的連線才能連進內部網路")])]),a._v(" "),t("tr",[t("td",[a._v("work")]),a._v(" "),t("td",[a._v("公司內部等工作區域，在此區域中不應該會有惡意的攻擊者。只有被允許的連線可以進入")])]),a._v(" "),t("tr",[t("td",[a._v("home")]),a._v(" "),t("td",[a._v("家裡頭的網路區域，在此區域中不應該會有惡意的攻擊者。只有被允許的連線可以進入")])]),a._v(" "),t("tr",[t("td",[a._v("block")]),a._v(" "),t("td",[a._v("任何來自於外部的連線都會被阻擋，只允許自己系統主動建立的連線")])]),a._v(" "),t("tr",[t("td",[a._v("drop")]),a._v(" "),t("td",[a._v("任何往內的封包都會被丟棄，只允許往外傳送的封包")])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);