(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{640:function(s,t,a){"use strict";a.r(t);var e=a(43),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"sftp-without-ssh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sftp-without-ssh"}},[s._v("#")]),s._v(" SFTP without SSH")]),s._v(" "),a("p",[s._v("目標：")]),s._v(" "),a("ul",[a("li",[s._v("開啟 sftp 服務連線")]),s._v(" "),a("li",[s._v("不允許 ssh 連線")]),s._v(" "),a("li",[s._v("chroot 在各資料夾內")])]),s._v(" "),a("h2",{attrs:{id:"建立帳號"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#建立帳號"}},[s._v("#")]),s._v(" 建立帳號")]),s._v(" "),a("ol",[a("li",[s._v("先建立 sftp 群組 "),a("code",[s._v("sftpgroup")])])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupadd")]),s._v(" sftpgroup\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("建立一個 "),a("code",[s._v("sftpuser1")]),s._v(" 範例帳號")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" -G sftpgroup -s /sbin/nologin sftpuser1\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("設定登入密碼")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" sftpuser1\n")])])]),a("h2",{attrs:{id:"設定-sftp-連線"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#設定-sftp-連線"}},[s._v("#")]),s._v(" 設定 SFTP 連線")]),s._v(" "),a("ol",[a("li",[s._v("編輯 "),a("code",[s._v("/etc/ssh/sshd_config")]),s._v(" 這個 "),a("code",[s._v("sshd")]),s._v(" 伺服器設定檔，找到下面 "),a("code",[s._v("Subsystem")]),s._v(" 的設定")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/ssh/sshd_config\n")])])]),a("p",[s._v("改寫成以下設定")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Subsystem       sftp    /usr/libexec/openssh/sftp-server  #註解掉此行改寫如下")]),s._v("\nSubsystem       "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sftp")]),s._v("    internal-sftp\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Match User sftpuser1    # 比對帳號")]),s._v("\nMatch Group sftpgroup\n        ChrootDirectory /home/%u     \n        PasswordAuthentication "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n\t\tX11Forwarding no\n        AllowTcpForwarding no\n        ForceCommand internal-sftp\n")])])]),a("ul",[a("li",[s._v("若只用 key 認證，則參數設定為："),a("code",[s._v("PasswordAuthentication no")])]),s._v(" "),a("li",[s._v("ChrootDirectory：設定該群組根目錄，%u 代表使用者帳號")]),s._v(" "),a("li",[s._v("設定 Chroot 根目錄擁有者與權限：由於 "),a("code",[s._v("chroot")]),s._v(" 的特殊限制，這個要 "),a("code",[s._v("chroot")]),s._v(" 目錄的擁有者必須為 "),a("code",[s._v("root")]),s._v("，而且該目錄的權限也必須設定為唯讀 755 才行")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" root:root /home/sftpuser1\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("755")]),s._v(" /home/sftpuser1\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("先確認剛剛的設定有沒有問題，若沒問題再重啟 sshd 服務：")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("sshd -t "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" sshd restart\n")])])]),a("h2",{attrs:{id:"連線測試"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#連線測試"}},[s._v("#")]),s._v(" 連線測試")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sftp")]),s._v(" sftpuser1@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("server_ip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("ul",[a("li",[s._v("如果出現登入錯誤")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("sftp"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\nremote readdir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": Permission denied\n")])])]),a("p",[s._v("可能是 "),a("code",[s._v("SELinux")]),s._v(" 造成，嘗試下列指令後重新測試看看")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -P 是將設定寫到設定檔中，可以測試確定問題後再以 -P 重下一次指令。")]),s._v("\nsetsebool "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-P"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" ssh_chroot_full_access on\nrestorecon -R /sftp/sftpuser1\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 若是 chroot 是指向使用者家目錄，可改下列指令。")]),s._v("\nsetsebool "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-P"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" ssh_chroot_rw_homedirs on\n")])])]),a("h2",{attrs:{id:"設定-sftp-log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#設定-sftp-log"}},[s._v("#")]),s._v(" 設定 SFTP log")]),s._v(" "),a("p",[s._v("若要記錄 sftp log，將 "),a("code",[s._v("ForceCommand")]),s._v(" 修改如下")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ForceCommand internal-sftp -l INFO\n")])])]),a("p",[s._v("修改之後重啟 "),a("code",[s._v("sshd")]),s._v(" 服務")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" sshd restart\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);