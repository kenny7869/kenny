(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{372:function(a,s,t){"use strict";t.r(s);var e=t(42),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"network-manager"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#network-manager"}},[a._v("#")]),a._v(" Network Manager")]),a._v(" "),t("h2",{attrs:{id:"安裝及配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安裝及配置"}},[a._v("#")]),a._v(" 安裝及配置")]),a._v(" "),t("ul",[t("li",[a._v("NetworkManager 應該預先安裝在CentOS 8 基本安裝上，否則，您可以使用 DNF 軟件包管理器進行安裝")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("dnf "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" NetworkManager\n")])])]),t("ul",[t("li",[t("p",[a._v("NetworkManager 的整體配置文件位於 "),t("code",[a._v("/etc/NetworkManager/NetworkManager.conf")]),a._v("，其他配置文件位於 "),t("code",[a._v("/etc/NetworkManager/")])])]),a._v(" "),t("li",[t("p",[a._v("檢查 NetworkManager  服務是否正在運行")])])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("systemctl is-active NetworkManager\n")])])]),t("ul",[t("li",[a._v("檢查 NetworkManager  服務是否有設定開機自動啟動")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("systemctl is-enabled NetworkManager\n")])])]),t("ul",[t("li",[a._v("顯示 NetworkManager 服務狀態")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("systemctl status NetworkManager\n")])])]),t("h2",{attrs:{id:"使用-networkmanager-工具並使用-ifcfg-文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-networkmanager-工具並使用-ifcfg-文件"}},[a._v("#")]),a._v(" 使用 NetworkManager 工具並使用 ifcfg 文件")]),a._v(" "),t("ul",[t("li",[a._v("nmcli：用於配置網絡的命令行工具。")]),a._v(" "),t("li",[a._v("nmtui：一個簡單的基於 curses 的文本用戶界面，還用於配置和管理 newtwork 界面連接。")]),a._v(" "),t("li",[a._v("列出 NetworkManager 檢測到的設備")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("nmcli device\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# or")]),a._v("\nnmcli device status\n")])])]),t("ul",[t("li",[a._v("要查看所有活動連接，請運行以下命令(注意，如果沒有-a，它將列出可用的連接配置文件)。")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("nmcli connection show -a\n")])])]),t("ul",[t("li",[a._v("在 CentOS/RHEL 8 上設置靜態 IP 地址")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /etc/sysconfig/network-scripts/ifcfg-ens33\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#主要是看要設定的網卡是哪一張，ens編號會有不同")]),a._v("\n")])])]),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("TYPE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("Ethernet\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("PROXY_METHOD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("none\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BROWSER_ONLY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("no\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BOOTPROTO")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("none\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DEFROUTE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("yes\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IPV4_FAILURE_FATAL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("no\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IPV6INIT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("yes\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IPV6_AUTOCONF")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("yes\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IPV6_DEFROUTE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("yes\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IPV6_FAILURE_FATAL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("no\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IPV6_ADDR_GEN_MODE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("stable-privacy\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("ens33\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("UUID")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("ffd19ca9-17a4-41f0-ab82-4d40a5df0337\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DEVICE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("ens33\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ONBOOT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("yes\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IPADDR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".0.110\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("PREFIX")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("24")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GATEWAY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".0.1\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DNS1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8.8")]),a._v(".8.8\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("PEERDNS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("no\n")])])]),t("ul",[t("li",[a._v("保存更改後，需要重新加載所有連接配置文件或重新啟動 NetworkManager 以應用新更改")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("nmcli connection reload\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# or")]),a._v("\nsystemctl restart NetworkManager\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);