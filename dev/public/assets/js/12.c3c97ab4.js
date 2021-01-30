(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{427:function(s,e,t){s.exports=t.p+"assets/img/rsys-1.65a419a7.jpg"},428:function(s,e,t){s.exports=t.p+"assets/img/rsys-2.27c5a7fd.jpg"},464:function(s,e,t){"use strict";t.r(e);var n=t(43),a=Object(n.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"rsyslog-介紹與使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rsyslog-介紹與使用"}},[s._v("#")]),s._v(" rsyslog 介紹與使用")]),s._v(" "),n("h2",{attrs:{id:"介紹"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#介紹"}},[s._v("#")]),s._v(" 介紹")]),s._v(" "),n("p",[s._v("在 Cent OS 中，日誌是使用 rsyslogd 進行管理的，是之前版本的系統中 syslogd 的升級版，對原有的日誌系統進行了功能的擴展，提供了諸如過濾器，日誌加密保護，各種配置選項，輸入輸出模塊，支持通過 TCP 或者 UDP 協議進行傳輸等")]),s._v(" "),n("h2",{attrs:{id:"配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),n("p",[s._v("Rsyslog 的主要配置文件為 "),n("code",[s._v("/etc/rsyslog.conf")]),s._v(" 文件，這個檔案規定了")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("什麼服務")]),s._v(" "),n("ul",[n("li",[s._v("Linux 核心的 syslog 認識的服務類型主要有底下這些"),n("br"),s._v(" "),n("img",{attrs:{src:t(427),alt:"rsys-1",title:"rsys-1"}})])])]),s._v(" "),n("li",[n("p",[s._v("什麼等級訊息")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("Linux 核心的 syslog 將訊息分為七個主要的等級，根據 syslog.h 的定義，訊息名稱與數值的對應如下："),n("br"),s._v(" "),n("img",{attrs:{src:t(428),alt:"rsys-2",title:"rsys-2"}})])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("註：在訊息等級之前還有 .[=!] 的連結符號，代表的意思如下：")])]),s._v(" "),n("ul",[n("li",[n("code",[s._v(".")]),s._v("：代表『比後面還要嚴重的等級 (含該等級) 都被記錄下來』的意思，例如： mail.info 代表只要是 mail 的資訊，而且該資訊等級嚴重於 info (含 info 本身)時，就會被記錄下來的意思")]),s._v(" "),n("li",[n("code",[s._v(".=")]),s._v("：代表所需要的等級就是後面接的等級而已， 其他的不要")]),s._v(" "),n("li",[n("code",[s._v(".!")]),s._v("：代表忽略大於等於這個等級的訊息，亦即低於這個等級的才會被紀錄的意思")])])])])]),s._v(" "),n("li",[n("p",[s._v("需要被記錄在哪裡(裝置或檔案)，底下就是一些常見的放置處：")]),s._v(" "),n("ul",[n("li",[s._v("檔案的絕對路徑：通常就是放在 "),n("code",[s._v("/var/log")]),s._v(" 裡頭的檔案")]),s._v(" "),n("li",[s._v("印表機或其他：例如 "),n("code",[s._v("/dev/lp0")]),s._v(" 這個印表機裝置")]),s._v(" "),n("li",[s._v("使用者名稱：顯示給使用者")]),s._v(" "),n("li",[s._v("遠端主機：例如 @study.vbird.tsai")]),s._v(" "),n("li",[n("code",[s._v("*")]),s._v("：代表『目前在線上的所有人』"),n("br"),s._v("\n設定的語法如下：")])])])]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 底下以 mail 這個服務產生的 info 等級為例：")]),s._v("\nmail.info\t\t\t/var/log/maillog_info\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 這一行說明：mail 服務產生的大於等於 info 等級的訊息，都記錄到 ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /var/log/maillog_info 檔案中的意思。")]),s._v("\n")])])]),n("h2",{attrs:{id:"rsyslog-conf檔案詳解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rsyslog-conf檔案詳解"}},[s._v("#")]),s._v(" rsyslog.conf檔案詳解")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rsyslog configuration file")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#### MODULES ####")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#載入模組列表")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The imjournal module bellow is now used as a message source instead of imuxsock.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ModLoad")]),s._v(" imuxsock "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# provides support for local system logging (e.g. via logger command)")]),s._v("\n提供對本地系統日誌的支援\n"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ModLoad")]),s._v(" imjournal "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# provides access to the systemd journal")]),s._v("\n提供對systemd日誌的訪問\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#$ModLoad imklog # reads kernel messages (the same are read from journald)")]),s._v("\n讀取核心訊息\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#$ModLoad immark  # provides --MARK-- message capability")]),s._v("\n提供--MARK--訊息功能\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Provides UDP syslog reception")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#$ModLoad imudp")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#$UDPServerRun 514  允許514埠接收使用UDP協議轉發過來的日誌")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Provides TCP syslog reception")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#$ModLoad imtcp")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#$InputTCPServerRun 514允許514埠接收使用TCP協議轉發過來的日誌")]),s._v("\n")])])]),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#### GLOBAL DIRECTIVES ####")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#全域性指令，")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Where to place auxiliary files")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$WorkDirectory")]),s._v(" /var/lib/rsyslog\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Use default timestamp format  定義日誌格式預設模板 ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ActionFileDefaultTemplate")]),s._v(" RSYSLOG_TraditionalFileFormat\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# File syncing capability is disabled by default. This feature is usually not required,")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# not useful and an extreme performance hit")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#$ActionFileEnableSync on")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Include all config files in /etc/rsyslog.d/")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$IncludeConfig")]),s._v(" /etc/rsyslog.d/*.conf\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Turn off message reception via local log socket;")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# local messages are retrieved through imjournal now.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$OmitLocalLogging")]),s._v(" on\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# File to store the position in the journal")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$IMJournalStateFile")]),s._v(" imjournal.state\n")])])]),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#### RULES ####")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#規則")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Log all kernel messages to the console.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Logging much else clutters up the screen.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#kern.*                                                 /dev/console")]),s._v("\n關於核心的所有日誌都放到/dev/console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("控制檯"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Log anything (except mail) of level info or higher.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Don't log private authentication messages!")]),s._v("\n*.info"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("mail.none"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("authpriv.none"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("cron.none                /var/log/messages\n記錄所有日誌型別的info級別以及大於info級別的資訊到/var/log/messages，但是mail郵件資訊，authpriv驗證方面的資訊和cron時間任務相關的資訊除外\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The authpriv file has restricted access.")]),s._v("\nauthpriv.*                                              /var/log/secure\nauthpriv驗證相關的所有資訊存放在/var/log/secure\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Log all the mail messages in one place.")]),s._v("\nmail.*                                                  -/var/log/maillog\n郵件的所有資訊存放在/var/log/maillog"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 這裡有一個-符號, 表示是使用非同步的方式記錄, 因為日誌一般會比較大\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Log cron stuff")]),s._v("\ncron.*                                                  /var/log/cron\n計劃任務有關的資訊存放在/var/log/cron\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Everybody gets emergency messages")]),s._v("\n*.emerg                                                 :omusrmsg:*\n 記錄所有的大於等於emerg級別資訊, 以wall方式傳送給每個登入到系統的人\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Save news errors of level crit and higher in a special file.")]),s._v("\nuucp,news.crit                                          /var/log/spooler\n記錄uucp,news.crit等存放在/var/log/spooler\nuucp  –unix to unix copy, unix主機之間相關的通訊，news   –新聞組\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Save boot messages also to boot.log")]),s._v("\nlocal7.*                                                /var/log/boot.log\n啟動的相關資訊\n")])])]),n("ul",[n("li",[n("p",[n("code",[s._v("#kern.*")]),s._v("：只要是核心產生的訊息，全部都送到 console(終端機) 去。console 通常是由外部裝置連接到系統而來， 舉例來說，很多封閉型主機 (沒有鍵盤、螢幕的系統) 可以透過連接 RS232 連接口將訊息傳輸到外部的系統中， 例如以筆記型電腦連接到封閉主機的 RS232 插口。這個項目通常應該是用在系統出現嚴重問題而無法使用預設的螢幕觀察系統時， 可以透過這個項目來連接取得核心的訊息")])]),s._v(" "),n("li",[n("p",[n("code",[s._v(".info;mail.none;authpriv.none;cron.none")]),s._v("：由於 mail, authpriv, cron 等類別產生的訊息較多， 且已經寫入底下的數個檔案中，因此在 /var/log/messages 裡面就不記錄這些項目。除此之外的其他訊息都寫入 /var/log/messages 中。這也是 messages 檔案很重要的緣故！")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("authpriv.*")]),s._v("：認證方面的訊息均寫入 "),n("code",[s._v("/var/log/secure")]),s._v(" 檔案")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("authpriv.*")]),s._v("：認證方面的訊息均寫入 "),n("code",[s._v("/var/log/secure")]),s._v(" 檔案")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("cron.*")]),s._v("：例行性工作排程均寫入 "),n("code",[s._v("/var/log/cron")]),s._v(" 檔案")])]),s._v(" "),n("li",[n("p",[n("code",[s._v(".emerg")]),s._v("：當產生最嚴重的錯誤等級時，將該等級的訊息以 wall 的方式廣播給所有在系統登入的帳號得知， 目的是讓使用者能夠趕緊通知系統管理員來處理嚴重的錯誤問題")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("uucp,news.crit")]),s._v("：uucp 是早期 Unix-like 系統進行資料傳遞的通訊協定，後來常用在新聞群組的用途中。 news 則是新聞群組。當新聞群組方面的資訊有嚴重錯誤時就寫入 "),n("code",[s._v("/var/log/spooler")]),s._v(" 檔案中")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("local7.*")]),s._v("：將本機開機時應該顯示到螢幕的訊息寫入到 "),n("code",[s._v("/var/log/boot.log")]),s._v(" 檔案中")])])]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#### begin forwarding rule ###")]),s._v("\n 轉發規則\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The statement between the begin ... end define a SINGLE forwarding")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rule. They belong together, do NOT split them. If you create multiple")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# forwarding rules, duplicate the whole block!  ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Remote Logging (we use TCP for reliable delivery)")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# An on-disk queue is created for this action. If the remote host is")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# down, messages are spooled to disk and sent when it is up again.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#$ActionQueueFileName fwdRule1 # unique name prefix for spool files")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#$ActionQueueMaxDiskSpace 1g   # 1gb space limit (use as much as possible)")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#$ActionQueueSaveOnShutdown on # save messages to disk on shutdown")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#$ActionQueueType LinkedList   # run asynchronously")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#$ActionResumeRetryCount -1    # infinite retries if host is down")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# remote host is: name/ip:port, e.g. 192.168.0.1:514, port optional")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#*.* @@remote-host:514  ")]),s._v("\n@@表示通過tcp協議傳送，使用TCP協議轉發到remote-host的514"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("預設"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("埠\n@表示通過udp進行轉發\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ### end of the forwarding rule ###")]),s._v("\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);