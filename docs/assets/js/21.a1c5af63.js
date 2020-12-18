(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{415:function(a,s,e){"use strict";e.r(s);var t=e(43),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"network-manager"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#network-manager"}},[a._v("#")]),a._v(" Network Manager")]),a._v(" "),e("h2",{attrs:{id:"安裝及配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安裝及配置"}},[a._v("#")]),a._v(" 安裝及配置")]),a._v(" "),e("ul",[e("li",[a._v("NetworkManager 應該預先安裝在CentOS 8 基本安裝上，否則，您可以使用 DNF 軟件包管理器進行安裝")])]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("dnf "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" NetworkManager\n")])])]),e("ul",[e("li",[e("p",[a._v("NetworkManager 的整體配置文件位於 "),e("code",[a._v("/etc/NetworkManager/NetworkManager.conf")]),a._v("，其他配置文件位於 "),e("code",[a._v("/etc/NetworkManager/")])])]),a._v(" "),e("li",[e("p",[a._v("檢查 NetworkManager  服務是否正在運行")])])]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("systemctl is-active NetworkManager\n")])])]),e("ul",[e("li",[a._v("檢查 NetworkManager  服務是否有設定開機自動啟動")])]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("systemctl is-enabled NetworkManager\n")])])]),e("ul",[e("li",[a._v("顯示 NetworkManager 服務狀態")])]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("systemctl status NetworkManager\n")])])]),e("h2",{attrs:{id:"使用-networkmanager-工具並使用-ifcfg-文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-networkmanager-工具並使用-ifcfg-文件"}},[a._v("#")]),a._v(" 使用 NetworkManager 工具並使用 ifcfg 文件")]),a._v(" "),e("ul",[e("li",[a._v("nmcli：用於配置網絡的命令行工具。")]),a._v(" "),e("li",[a._v("nmtui：一個簡單的基於 curses 的文本用戶界面，還用於配置和管理 newtwork 界面連接。")]),a._v(" "),e("li",[a._v("列出 NetworkManager 檢測到的設備")])]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("nmcli device\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# or")]),a._v("\nnmcli device status\n")])])]),e("ul",[e("li",[a._v("要查看所有活動連接，請運行以下命令(注意，如果沒有-a，它將列出可用的連接配置文件)。")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("nmcli connection show -a\n")])])]),e("ul",[e("li",[a._v("在 CentOS/RHEL 8 上設置靜態 IP 地址")])]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /etc/sysconfig/network-scripts/ifcfg-ens33\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#主要是看要設定的網卡是哪一張，ens編號會有不同")]),a._v("\n")])])]),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("TYPE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("Ethernet\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("PROXY_METHOD")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("none\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BROWSER_ONLY")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("no\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BOOTPROTO")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("none\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DEFROUTE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("yes\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IPV4_FAILURE_FATAL")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("no\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IPV6INIT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("yes\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IPV6_AUTOCONF")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("yes\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IPV6_DEFROUTE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("yes\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IPV6_FAILURE_FATAL")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("no\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IPV6_ADDR_GEN_MODE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("stable-privacy\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("NAME")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("ens33\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("UUID")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("ffd19ca9-17a4-41f0-ab82-4d40a5df0337\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DEVICE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("ens33\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ONBOOT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("yes\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IPADDR")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".0.110\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("PREFIX")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("24")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GATEWAY")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".0.1\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DNS1")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("8.8")]),a._v(".8.8\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("PEERDNS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("no\n")])])]),e("ul",[e("li",[a._v("保存更改後，需要重新加載所有連接配置文件或重新啟動 NetworkManager 以應用新更改")])]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("nmcli connection reload\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# or")]),a._v("\nsystemctl restart NetworkManager\n")])])]),e("ul",[e("li",[a._v("DNS 進入 "),e("code",[a._v("/etc/resolv.conf")]),a._v(" 進行修改")])]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /etc/resolv.conf\n\nnameserver "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("10.160")]),a._v(".1.9\nnameserver "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("10.160")]),a._v(".128.9\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);