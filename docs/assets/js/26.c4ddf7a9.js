(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{468:function(a,s,t){"use strict";t.r(s);var e=t(43),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"network-manager"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#network-manager"}},[a._v("#")]),a._v(" Network Manager")]),a._v(" "),t("h2",{attrs:{id:"安裝及配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安裝及配置"}},[a._v("#")]),a._v(" 安裝及配置")]),a._v(" "),t("ul",[t("li",[a._v("NetworkManager 應該預先安裝在CentOS 8 基本安裝上，否則，您可以使用 DNF 軟件包管理器進行安裝")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("dnf "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" NetworkManager\n")])])]),t("ul",[t("li",[t("p",[a._v("NetworkManager 的整體配置文件位於 "),t("code",[a._v("/etc/NetworkManager/NetworkManager.conf")]),a._v("，其他配置文件位於 "),t("code",[a._v("/etc/NetworkManager/")])])]),a._v(" "),t("li",[t("p",[a._v("檢查 NetworkManager  服務是否正在運行")])])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("systemctl is-active NetworkManager\n")])])]),t("ul",[t("li",[a._v("檢查 NetworkManager  服務是否有設定開機自動啟動")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("systemctl is-enabled NetworkManager\n")])])]),t("ul",[t("li",[a._v("顯示 NetworkManager 服務狀態")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("systemctl status NetworkManager\n")])])]),t("h2",{attrs:{id:"使用-networkmanager-工具並使用-ifcfg-文件配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-networkmanager-工具並使用-ifcfg-文件配置"}},[a._v("#")]),a._v(" 使用 NetworkManager 工具並使用 ifcfg 文件配置")]),a._v(" "),t("ul",[t("li",[a._v("nmcli：用於配置網絡的命令行工具。")]),a._v(" "),t("li",[a._v("nmtui：一個簡單的基於 curses 的文本用戶界面，還用於配置和管理 newtwork 界面連接。")]),a._v(" "),t("li",[a._v("列出 NetworkManager 檢測到的設備")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("nmcli device\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# or")]),a._v("\nnmcli device status\n")])])]),t("ul",[t("li",[a._v("要查看所有活動連接，請運行以下命令(注意，如果沒有-a，它將列出可用的連接配置文件)。")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("nmcli connection show -a\n")])])]),t("ul",[t("li",[a._v("在 CentOS/RHEL 8 上設置靜態 IP 地址")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /etc/sysconfig/network-scripts/ifcfg-eth0\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#主要是看要設定的網卡是哪一張，ens編號會有不同")]),a._v("\n")])])]),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DEVICE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"eth0"')]),a._v("               "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v("網路卡代號，必須要 ifcfg-eth0 相對應\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("HWADDR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"08:00:27:71:85:BD"')]),a._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v("就是網路卡位址，若只有一張網卡，可省略此項目\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("NM_CONTROLLED")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"no"')]),a._v("          "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v("不要受到其他軟體的網路管理！\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ONBOOT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"yes"')]),a._v("                "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v("是否預設啟動此介面的意思\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BOOTPROTO")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("none              "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v("取得IP的方式，其實關鍵字只有dhcp，手動可輸入none\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IPADDR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".1.100        "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v("就是 IP 啊\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("NETMASK")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("255.255")]),a._v(".255.0       "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v("就是子網路遮罩\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GATEWAY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".1.254       "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v("就是預設匝道\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 重點是上面這幾個設定項目，底下的則可以省略的囉！")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("NETWORK")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".1.0         "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v("就是該網段的第一個 IP，可省略\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BROADCAST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".1.255     "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v("就是廣播位址囉，可省略\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MTU")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1500")]),a._v("                    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v("就是最大傳輸單元的設定值，若不更改則可省略\n")])])]),t("ul",[t("li",[a._v("DEVICE：這個設定值後面接的裝置代號需要與檔名 (ifcfg-eth0) 那個裝置代號相同才行！否則可能會造成一些裝置名稱找不到的困擾")]),a._v(" "),t("li",[a._v("HWADDR：這個東西就是網路卡的 MAC 位址")]),a._v(" "),t("li",[a._v("BOOTPROTO：啟動該網路介面時，使用何種協定？ 如果是手動給予 IP 的環境，請輸入 static 或 none ，如果是自動取得 IP 的時候，請輸入 dhcp")]),a._v(" "),t("li",[a._v("GATEWAY：代表的是『整個主機系統的 default gateway』，有 ifcfg-eth0, ifcfg-eth1.... 等多個檔案，"),t("strong",[a._v("只要在其中一個檔案設定 GATEWAY 即可")])]),a._v(" "),t("li",[a._v("保存更改後，需要重新加載所有連接配置文件或重新啟動 NetworkManager 以應用新更改")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("nmcli connection reload\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# or")]),a._v("\nsystemctl restart NetworkManager\n")])])]),t("ul",[t("li",[a._v("DNS 亦可進入 "),t("code",[a._v("/etc/resolv.conf")]),a._v(" 進行修改")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /etc/resolv.conf\n\nnameserver "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10.160")]),a._v(".1.9\nnameserver "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10.160")]),a._v(".128.9\n")])])]),t("h2",{attrs:{id:"linux-網路相關設定檔案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-網路相關設定檔案"}},[a._v("#")]),a._v(" Linux 網路相關設定檔案")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("所需網路參數")]),a._v(" "),t("th",[a._v("主要設定檔檔名")]),a._v(" "),t("th",[a._v("重要參數")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("IP、Netmask、DHCP 與否Gateway 等")]),a._v(" "),t("td",[a._v("/etc/sysconfig/network-scripts/ifcfg-eth0")]),a._v(" "),t("td",[a._v("DEVICE=網卡的代號"),t("br"),a._v("BOOTPROTO=是否使用 dhcp"),t("br"),a._v("HWADDR=是否加入網卡卡號(MAC)"),t("br"),a._v("IPADDR=就是IP位址"),t("br"),a._v("NETMASK=子網路遮罩啦"),t("br"),a._v("ONBOOT=要不要預設啟動此介面"),t("br"),a._v("GATEWAY=就是通訊閘啦"),t("br"),a._v("NM_CONTROLLED=額外的網管軟體，鳥哥建議取消這個項目！")])]),a._v(" "),t("tr",[t("td",[a._v("主機名稱")]),a._v(" "),t("td",[a._v("/etc/sysconfig/network")]),a._v(" "),t("td",[a._v("NETWORKING=要不要有網路"),t("br"),a._v("NETWORKING_IPV6=是否支援IPv6"),t("br"),a._v("HOSTNAME=你的主機名")])]),a._v(" "),t("tr",[t("td",[a._v("DNS IP")]),a._v(" "),t("td",[a._v("/etc/resolv.conf")]),a._v(" "),t("td",[a._v("nameserver DNS的IP")])]),a._v(" "),t("tr",[t("td",[a._v("私有 IP 對應的主機名稱")]),a._v(" "),t("td",[a._v("/etc/hosts")]),a._v(" "),t("td",[a._v("私有IP 主機名稱 別名")])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);