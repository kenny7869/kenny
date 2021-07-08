(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{371:function(t,s,a){t.exports=a.p+"assets/img/fb-1.4f172dae.png"},372:function(t,s,a){t.exports=a.p+"assets/img/fb-2.ad60ef4a.png"},373:function(t,s,a){t.exports=a.p+"assets/img/fb-3.aaf87366.png"},613:function(t,s,a){"use strict";a.r(s);var n=a(45),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"linux-文件基本屬性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linux-文件基本屬性"}},[t._v("#")]),t._v(" Linux 文件基本屬性")]),t._v(" "),n("h2",{attrs:{id:"用戶與權限"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#用戶與權限"}},[t._v("#")]),t._v(" 用戶與權限")]),t._v(" "),n("p",[t._v("Linux 系統是一種典型的多用戶系統，不同的用戶處於不同的地位，擁有不同的權限"),n("br"),t._v("\n為了保護系統的安全性，Linux 系統對不同的用戶訪問同一文件（包括目錄文件）的權限做了不同的規定"),n("br"),t._v("\n在Linux 中我們通常使用以下兩個命令來修改文件或目錄的所屬用戶與權限：")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("chown (change owner)")]),t._v(" ： 修改所屬用戶與組")]),t._v(" "),n("li",[n("strong",[t._v("chmod (change mode)")]),t._v(" ： 修改用戶的權限")])]),t._v(" "),n("p",[t._v("下圖中通過chown 來授權用戶，通過chmod 為用戶設置可以開門的權限")]),t._v(" "),n("p",[n("img",{attrs:{src:a(371),alt:"fb-1",title:"fb-1"}})]),t._v(" "),n("p",[t._v("在 Linux 中我們可以使用 ll 或者 ls –l 命令來顯示一個文件的屬性以及文件所屬的用戶和組，如：")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ls - l")]),t._v("\ntotal "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v(" \ndr - xr - xr - x    "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" root root "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4096")]),t._v(" Dec "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2012")]),t._v(" bin    \ndr - xr - xr - x    "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" root root "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4096")]),t._v(" Apr "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("19")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2012")]),t._v(" boot\n ……\n")])])]),n("p",[t._v("上面例子中，"),n("code",[t._v("bin")]),t._v(" 文件的第一個屬性用 "),n("code",[t._v("d")]),t._v(" 表示。 "),n("code",[t._v("d")]),t._v("在 Linux 中代表該文件是一個目錄文件"),n("br"),t._v("\n在Linux 中第一個字符代表這個文件是目錄、文件或鏈接文件等等")]),t._v(" "),n("ul",[n("li",[t._v("當為 "),n("code",[t._v("d")]),t._v(" 則是目錄")]),t._v(" "),n("li",[t._v("當為 "),n("code",[t._v("-")]),t._v(" 則是文件")]),t._v(" "),n("li",[t._v("若是 "),n("code",[t._v("l")]),t._v(" 則表示為鏈接文檔 (link file)")]),t._v(" "),n("li",[t._v("若是 "),n("code",[t._v("b")]),t._v(" 則表示為裝置文件裡面的可供儲存的接口設備(可隨機存取裝置)")]),t._v(" "),n("li",[t._v("若是 "),n("code",[t._v("c")]),t._v(" 則表示為裝置文件裡面的串行端口設備，例如鍵盤、滑鼠 (一次性讀取裝置)")])]),t._v(" "),n("h2",{attrs:{id:"chmod-命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#chmod-命令"}},[t._v("#")]),t._v(" chmod 命令")]),t._v(" "),n("p",[t._v("Linux/Unix 的文件調用權限分為三級：文件所有者（Owner）、群組（Group）、其它用戶（Other Users）"),n("br"),t._v("\n字符中，以三個為一組，且均為 rwx 的三個參數的組合。其中，"),n("code",[t._v("r")]),t._v("代表可讀 (read)、"),n("code",[t._v("w")]),t._v("代表可寫(write)、"),n("code",[t._v("x")]),t._v("代表可執行 (execute)。要注意的是，這三個權限的位置不會改變，如果沒有權限，就會出現"),n("code",[t._v("-")]),t._v("而已")]),t._v(" "),n("p",[n("img",{attrs:{src:a(372),alt:"fb-2",title:"fb-2"}})]),t._v(" "),n("p",[t._v("字符中，以三個為一組，且均為 rwx 的三個參數的組合。其中， r 代表可讀 (read)、 w 代表可寫(write)、 x 代表可執行 (execute)。要注意的是，這三個權限的位置不會改變，如果沒有權限，就會出現 - 而已"),n("br"),t._v("\n以八進制如下圖，754 將這樣解釋：")]),t._v(" "),n("ul",[n("li",[t._v("所有者的權限用數字表達：擁有者的那三個權限的數字加起來的總和。如rwx ，也就是4+2+1 ，應該是7")]),t._v(" "),n("li",[t._v("群組的權限用數字表達：所屬群組的那個權限數字的相加總和。如 r-x ，也就是4+0+1 ，應該是5")]),t._v(" "),n("li",[t._v("其它用戶的權限數字表達：其它用戶權限的數字相加總和。如 r - - ，也就是4+0+0 ，應該是4")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(373),alt:"fb-3",title:"fb-3"}})]),t._v(" "),n("p",[t._v("語法：")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("- cfvR "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-- "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-- version "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" mode "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),n("p",[t._v("參數說明：")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("-c")]),t._v(" : 若該文件權限確實已經更改，才顯示其更改動作")]),t._v(" "),n("li",[n("code",[t._v("-f")]),t._v(" : 若該文件權限無法被更改也不要顯示錯誤訊息")]),t._v(" "),n("li",[n("code",[t._v("-v")]),t._v(" : 顯示權限變更的詳細資料")]),t._v(" "),n("li",[n("code",[t._v("-R")]),t._v(" : 對目前目錄下的所有文件與子目錄進行相同的權限變更(即以遞歸的方式逐個變更)")]),t._v(" "),n("li",[n("code",[t._v("--help")]),t._v(" : 顯示輔助說明")]),t._v(" "),n("li",[n("code",[t._v("--version")]),t._v(" : 顯示版本")])]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" ugoa "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("+-"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" rwxX "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(","),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),n("ul",[n("li",[n("code",[t._v("u")]),t._v(" 表示該文件的擁有者， "),n("code",[t._v("g")]),t._v(" 表示與該文件的擁有者屬於同一個群組 (group) 者， "),n("code",[t._v("o")]),t._v(" 表示其他以外的人， "),n("code",[t._v("a")]),t._v(" 表示這三者皆是")]),t._v(" "),n("li",[n("code",[t._v("+")]),t._v(" 表示增加權限、 "),n("code",[t._v("-")]),t._v(" 表示取消權限、 "),n("code",[t._v("=")]),t._v(" 表示唯一設定權限")]),t._v(" "),n("li",[n("code",[t._v("r")]),t._v(" 表示可讀取， "),n("code",[t._v("w")]),t._v(" 表示可寫入， "),n("code",[t._v("x")]),t._v(" 表示可執行， "),n("code",[t._v("X")]),t._v(" 表示只有當該文件是個子目錄或者該文件已經被設定過為可執行")])]),t._v(" "),n("p",[t._v("舉例：")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rwx "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v("\n")])])]),n("p",[t._v("等同於")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("777")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v("\n")])])]),n("h2",{attrs:{id:"chown-命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#chown-命令"}},[t._v("#")]),t._v(" chown 命令")]),t._v(" "),n("p",[t._v("Linux chown（change owner）命令用於設置文件所有者和文件關聯群組的命令"),n("br"),t._v("\nLinux/Unix 是多人多工操作系統，所有的文件皆有擁有者。利用 chown 將指定文件的擁有者改為指定的用戶或群組，用戶可以是用戶名或者用戶 ID，群組可以是群組名或者群組 ID"),n("br"),t._v("\nchown 需要超級用戶 "),n("code",[t._v("root")]),t._v(" 的權限才能執行此命令"),n("br"),t._v("\n語法：")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("- cfhvR "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-- "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-- version "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" user "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(": group "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),n("ul",[n("li",[t._v("user：新的文件擁有者的使用者 ID")]),t._v(" "),n("li",[t._v("group：新的文件擁有者的使用者群組 (group)")]),t._v(" "),n("li",[t._v("c：顯示更改的部分的信息")]),t._v(" "),n("li",[t._v("f：忽略錯誤信息")]),t._v(" "),n("li",[t._v("h：修復符號鏈接")]),t._v(" "),n("li",[t._v("v：顯示詳細的處理信息")]),t._v(" "),n("li",[t._v("R：處理指定目錄以及其子目錄下的所有文件")]),t._v(" "),n("li",[t._v("-help：顯示輔助說明")]),t._v(" "),n("li",[t._v("-version：顯示版本")])]),t._v(" "),n("p",[t._v("實例："),n("br"),t._v("\n將文件file1.txt 的擁有者設為 user，群組 usergroup :")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" user:usergroup file1.txt\n")])])]),n("p",[t._v("將當前前目錄下的所有文件與子目錄的擁有者皆設為 user，群組 usergroup：")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" - R user:usergroup *\n")])])]),n("h2",{attrs:{id:"chgrp-命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#chgrp-命令"}},[t._v("#")]),t._v(" chgrp 命令")]),t._v(" "),n("p",[t._v("Linux chgrp（change group）命令用於更改文件或目錄的所屬群組"),n("br"),t._v("\n與 chown 命令不同，chgrp 允許普通用戶更改文件所屬的群組，只要該用戶是該群組的一員"),n("br"),t._v("\n在 UNIX 系統家族裡，文件或目錄權限的掌控以擁有者及所屬的群組來管理。可以使用 chgrp 指令去更改文件與目錄的所屬類別，設置方式採用名稱或分區識別碼皆可"),n("br"),t._v("\n語法：")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("chgrp")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-cfhRv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-help"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-version"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("所屬分類"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("文件或目錄"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("或chgrp "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-cfhRv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-help"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-reference "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("參考文件或目錄"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-version"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("文件或目錄"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),n("p",[t._v("參數說明：")]),t._v(" "),n("ul",[n("li",[t._v("-c 或 --changes：效果類似 "),n("code",[t._v("-v")]),t._v(" 參數，但僅回收更改的部分")]),t._v(" "),n("li",[t._v("-f 或 --quiet 或 --silent：不顯示錯誤信息")]),t._v(" "),n("li",[t._v("-h 或 --no-dereference：只對符號連接的文件作修改，而不是更動其他任何相關文件")]),t._v(" "),n("li",[t._v("-R 或 --recursive：遞歸處理，將指定目錄下的所有文件及子目錄一併處理")]),t._v(" "),n("li",[t._v("-v 或 --verbose：顯示指令執行過程")]),t._v(" "),n("li",[t._v("--help：在線幫助")]),t._v(" "),n("li",[t._v("--reference = <參考文件或目錄>：將指定文件或目錄的所屬類別全部歸為一體和參考文件或目錄的所屬類別相同")]),t._v(" "),n("li",[t._v("--version：顯示版本信息")])]),t._v(" "),n("h2",{attrs:{id:"brace-expansion-大括號擴展"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#brace-expansion-大括號擴展"}},[t._v("#")]),t._v(" Brace expansion (大括號擴展)")]),t._v(" "),n("ul",[n("li",[t._v("大括號擴展(Brace expansion)是一種機制，協助我們使用省略的字串產生相對應的字串組合")])]),t._v(" "),n("p",[t._v("這裡以指令 "),n("code",[t._v("touch")]),t._v(" 示範，套用到 "),n("code",[t._v("cp")]),t._v(" 指令後，檔案 foo1.txt 內容就會複製到 foo2.txt")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# touch foo{1,2}.txt")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ls")]),t._v("\nfoo1.txt foo2.txt\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# echo 123 > foo1.txt")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cp foo{1,2}.txt")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cat foo2.txt")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v("\n")])])]),n("ul",[n("li",[t._v("大括號擴展比較常用的關鍵字有 逗號(,) 和 句號(.)，逗號是用來分開不同的字串，而句號是用來產生有序列性的字串")])]),t._v(" "),n("p",[n("strong",[t._v("逗號：")])]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# echo file{,1,2}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" file1 file2\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mkdir -v file{,1,2}")]),t._v("\nmkdir: created directory "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'file'")]),t._v("\nmkdir: created directory "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'file1'")]),t._v("\nmkdir: created directory "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'file2'")]),t._v("\n")])])]),n("p",[n("strong",[t._v("句號：")])]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# echo file{1..5}")]),t._v("\nfile1 file2 file3 file4 file5\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mkdir -v file{1..5}")]),t._v("\nmkdir: created directory "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'file1'")]),t._v("\nmkdir: created directory "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'file2'")]),t._v("\nmkdir: created directory "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'file3'")]),t._v("\nmkdir: created directory "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'file4'")]),t._v("\nmkdir: created directory "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'file5'")]),t._v("\n")])])]),n("ul",[n("li",[t._v("在一個字串中同時放很多個 Brace expansion")])]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# echo {apache,nginx}-{index,default}-0{1..2}.html")]),t._v("\napache-index-01.html apache-index-02.html apache-default-01.html apache-default-02.html nginx-index-01.html nginx-index-02.html nginx-default-01.html nginx-default-02.html\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);