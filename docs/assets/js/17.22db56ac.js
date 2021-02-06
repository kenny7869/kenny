(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{437:function(t,s,v){"use strict";v.r(s);var _=v(43),a=Object(_.a)({},(function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"linux-磁碟管理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#linux-磁碟管理"}},[t._v("#")]),t._v(" Linux 磁碟管理")]),t._v(" "),v("p",[t._v("Linux 磁碟管理好壞直接關係到整個系統的性能問題"),v("br"),t._v("\nLinux 磁碟管理常用三個命令為 "),v("code",[t._v("df")]),t._v("， "),v("code",[t._v("du")]),t._v(" 和 "),v("code",[t._v("fdisk")])]),t._v(" "),v("ul",[v("li",[v("code",[t._v("df")]),t._v("：列出文件系統的整體磁碟使用量")]),t._v(" "),v("li",[v("code",[t._v("du")]),t._v("：檢查磁碟空間使用量")]),t._v(" "),v("li",[v("code",[t._v("fdisk")]),t._v("：用於磁碟分區")])]),t._v(" "),v("h2",{attrs:{id:"df-命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#df-命令"}},[t._v("#")]),t._v(" df 命令")]),t._v(" "),v("p",[t._v("功能：檢查文件系統的磁碟空間佔用情況，可以利用該命令來獲取硬碟被佔用了多少空間，目前還剩下多少空間等資訊"),v("br"),t._v("\n語法：")]),t._v(" "),v("div",{staticClass:"language-sh extra-class"},[v("pre",{pre:!0,attrs:{class:"language-sh"}},[v("code",[v("span",{pre:!0,attrs:{class:"token function"}},[t._v("df")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" -ahikHTm "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("目錄或文件名"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),v("p",[t._v("選項與參數：")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("-a")]),t._v("：列出所有的文件系統，包括系統特有的 "),v("code",[t._v("proc")]),t._v(" 等文件系統")]),t._v(" "),v("li",[v("code",[t._v("-k")]),t._v("：以 "),v("code",[t._v("KB")]),t._v(" 的容量顯示各文件系統")]),t._v(" "),v("li",[v("code",[t._v("-m")]),t._v("：以 "),v("code",[t._v("MB")]),t._v(" 的容量顯示各文件系統")]),t._v(" "),v("li",[v("code",[t._v("-h")]),t._v("：以人們較易閱讀的 GB，MB，KB 等格式自行顯示")]),t._v(" "),v("li",[v("code",[t._v("-H")]),t._v("：以 M = 1000K 取代 M = 1024K 的進位方式")]),t._v(" "),v("li",[v("code",[t._v("-T")]),t._v("：顯示文件系統類型，並合併該分區的文件系統名稱（例如：ext3）也列出")]),t._v(" "),v("li",[v("code",[t._v("-i")]),t._v("：不用硬碟容量，而以 inode 的數量來顯示")])]),t._v(" "),v("h2",{attrs:{id:"du-命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#du-命令"}},[t._v("#")]),t._v(" du 命令")]),t._v(" "),v("p",[t._v("功能：du 命令也是查看使用空間的，但是與 df 命令不同的是 du命令是對文件和目錄磁碟使用的空間的查看，還是和 df 命令有一些區別的"),v("br"),t._v("\n語法：")]),t._v(" "),v("div",{staticClass:"language-sh extra-class"},[v("pre",{pre:!0,attrs:{class:"language-sh"}},[v("code",[v("span",{pre:!0,attrs:{class:"token function"}},[t._v("du")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-ahskm"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 文件或目錄名稱\n")])])]),v("p",[t._v("選項與參數：")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("-a")]),t._v("：列出所有的文件與目錄容量，因為默認僅統計目錄底下的文件量而已")]),t._v(" "),v("li",[v("code",[t._v("-h")]),t._v("：以人們較易讀的容量格式 (G/M) 顯示")]),t._v(" "),v("li",[v("code",[t._v("-s")]),t._v("：列出總量而已，而不列出每個各別的目錄佔用容量")]),t._v(" "),v("li",[v("code",[t._v("-S")]),t._v("：不包括子目錄下的總計，與 "),v("code",[t._v("-s")]),t._v(" 有點差別")]),t._v(" "),v("li",[v("code",[t._v("-k")]),t._v("：以 "),v("code",[t._v("KB")]),t._v(" 列出容量顯示")]),t._v(" "),v("li",[v("code",[t._v("-m")]),t._v("：以 "),v("code",[t._v("MB")]),t._v(" 列出容量顯示")])]),t._v(" "),v("p",[t._v("要找到磁碟佔用最大的檔案，先至根目錄下利用以下指令：")]),t._v(" "),v("div",{staticClass:"language-sh extra-class"},[v("pre",{pre:!0,attrs:{class:"language-sh"}},[v("code",[v("span",{pre:!0,attrs:{class:"token function"}},[t._v("du")]),t._v(" -h --max-depth"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),v("ul",[v("li",[v("code",[t._v("–max-depth")]),t._v(" 是表示查詢子目錄的層級")])]),t._v(" "),v("h2",{attrs:{id:"fdisk-命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#fdisk-命令"}},[t._v("#")]),t._v(" fdisk 命令")]),t._v(" "),v("p",[t._v("功能：fdisk 是 Linux 的磁碟分區表操作工具"),v("br"),t._v("\n語法：")]),t._v(" "),v("div",{staticClass:"language-sh extra-class"},[v("pre",{pre:!0,attrs:{class:"language-sh"}},[v("code",[v("span",{pre:!0,attrs:{class:"token function"}},[t._v("fdisk")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-l"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 裝置名稱\n")])])]),v("p",[t._v("選項與參數：")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("-l")]),t._v("：輸出後面接的裝置所有的分區內容。若僅有 fdisk -l 時，則系統將會把整個系統內能夠搜尋到的裝置的分區均列出來")]),t._v(" "),v("li",[v("code",[t._v("-u")]),t._v("： 與 -l 搭配使用，顯示分區數目")]),t._v(" "),v("li",[v("code",[t._v("-s")]),t._v("：<分區編號> 指定分區")]),t._v(" "),v("li",[v("code",[t._v("-v")]),t._v("：版本信息")])]),t._v(" "),v("p",[t._v("選單操作說明：")]),t._v(" "),v("ul",[v("li",[t._v("m：顯示選單和幫助信息")]),t._v(" "),v("li",[t._v("a：活動分區標記/引導分區")]),t._v(" "),v("li",[t._v("d：刪除分區")]),t._v(" "),v("li",[t._v("l：顯示分區類型")]),t._v(" "),v("li",[t._v("n：新建分區")]),t._v(" "),v("li",[t._v("p：顯示分區信息")]),t._v(" "),v("li",[t._v("q：退出不保存")]),t._v(" "),v("li",[t._v("t：設置分區號")]),t._v(" "),v("li",[t._v("v：進行分區檢查")]),t._v(" "),v("li",[t._v("w：保存修改")]),t._v(" "),v("li",[t._v("x：擴展應用，高級功能")])]),t._v(" "),v("h2",{attrs:{id:"磁碟格式化-mkfs"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#磁碟格式化-mkfs"}},[t._v("#")]),t._v(" 磁碟格式化 mkfs")]),t._v(" "),v("p",[t._v("磁盤分割完畢後自然就是要進行文件系統的格式化，格式化的命令非常的簡單，使用 mkfs（make filesystem）命令"),v("br"),t._v("\n語法：")]),t._v(" "),v("div",{staticClass:"language-sh extra-class"},[v("pre",{pre:!0,attrs:{class:"language-sh"}},[v("code",[v("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkfs")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-V"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-t fstype"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("fs-options"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" filesys "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("blocks"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),v("p",[t._v("選項與參數：")]),t._v(" "),v("ul",[v("li",[t._v("device ： 預備檢查的硬碟分區，例如：/dev/sda1")]),t._v(" "),v("li",[v("code",[t._v("-V")]),t._v("：詳細顯示模式")]),t._v(" "),v("li",[v("code",[t._v("-t")]),t._v("：給定檔案系統的型式，Linux 的預設值為 ext2")]),t._v(" "),v("li",[v("code",[t._v("-c")]),t._v("：在製做檔案系統前，檢查該 partition 是否有壞軌")]),t._v(" "),v("li",[v("code",[t._v("-l bad_blocks_file")]),t._v("：將有壞軌的 block 資料加到 bad_blocks_file 裡面")]),t._v(" "),v("li",[v("code",[t._v("block")]),t._v("：給定 block 的大小")])]),t._v(" "),v("p",[t._v("實例："),v("br"),t._v("\n查看 mkfs 支持的文件格式")]),t._v(" "),v("div",{staticClass:"language-sh extra-class"},[v("pre",{pre:!0,attrs:{class:"language-sh"}},[v("code",[v("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkfs")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tab"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tab"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nmkfs.cramfs  mkfs.ext2    mkfs.ext3    mkfs.msdos   mkfs.vfat\n")])])]),v("p",[t._v("在 "),v("code",[t._v("/dev/hda5")]),t._v(" 上建一個 msdos 的檔案系統，同時檢查是否有壞軌存在，並且將過程詳細列出來：")]),t._v(" "),v("div",{staticClass:"language-sh extra-class"},[v("pre",{pre:!0,attrs:{class:"language-sh"}},[v("code",[v("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkfs")]),t._v(" -V -t msdos -c /dev/hda5\n")])])]),v("p",[t._v("將 "),v("code",[t._v("sda6")]),t._v(" 分區格式化為 ext3 格式")]),t._v(" "),v("div",{staticClass:"language-sh extra-class"},[v("pre",{pre:!0,attrs:{class:"language-sh"}},[v("code",[v("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkfs")]),t._v(" -t ext3 /dev/sda6\n")])])]),v("h2",{attrs:{id:"磁碟檢驗-fsck"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#磁碟檢驗-fsck"}},[t._v("#")]),t._v(" 磁碟檢驗 fsck")]),t._v(" "),v("p",[t._v("fsck（file system check）用來檢查和維護不一致的文件系統"),v("br"),t._v("\n若磁碟發生問題，可利用 fsck 命令對文件系統進行檢查"),v("br"),t._v("\n語法：")]),t._v(" "),v("div",{staticClass:"language-sh extra-class"},[v("pre",{pre:!0,attrs:{class:"language-sh"}},[v("code",[v("span",{pre:!0,attrs:{class:"token function"}},[t._v("fsck")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-sACVRP"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-t fstype"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("fsck-options"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" filesys "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),v("p",[t._v("選項與參數：")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("-t")]),t._v("：給定檔案系統的型式，若在 "),v("code",[t._v("/etc/fstab")]),t._v(" 中已有定義或 kernel 本身已支援的則不需加上此參數")]),t._v(" "),v("li",[v("code",[t._v("-s")]),t._v("：依序一個一個地執行 fsck 的指令來檢查")]),t._v(" "),v("li",[v("code",[t._v("-A")]),t._v("：對 "),v("code",[t._v("/etc/fstab")]),t._v(" 中所有列出來的分區（partition）做檢查")]),t._v(" "),v("li",[v("code",[t._v("-C")]),t._v("：顯示完整的檢查進度")]),t._v(" "),v("li",[v("code",[t._v("-d")]),t._v("：打印出 e2fsck 的 debug 結果")]),t._v(" "),v("li",[v("code",[t._v("-p")]),t._v("：同時有 "),v("code",[t._v("-A")]),t._v(" 條件時，同時有多個 fsck 的檢查一起執行")]),t._v(" "),v("li",[v("code",[t._v("-R")]),t._v("：同時有 "),v("code",[t._v("-A")]),t._v(" 條件時，省略 "),v("code",[t._v("/")]),t._v(" 不檢查")]),t._v(" "),v("li",[v("code",[t._v("-V")]),t._v("：詳細顯示模式")]),t._v(" "),v("li",[v("code",[t._v("-a")]),t._v("：如果檢查有錯則自動修復")]),t._v(" "),v("li",[v("code",[t._v("-r")]),t._v("：如果檢查有錯則由使用者回答是否修復")]),t._v(" "),v("li",[v("code",[t._v("-y")]),t._v("：選項指定檢測每個文件是自動輸入 yes，在不確定那些是不正常的時候，可以執行 "),v("code",[t._v("fsck -y")]),t._v(" 全部檢查修復")])]),t._v(" "),v("h2",{attrs:{id:"磁碟掛載與卸除"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#磁碟掛載與卸除"}},[t._v("#")]),t._v(" 磁碟掛載與卸除")]),t._v(" "),v("p",[t._v("Linux 的磁碟掛載使用 mount 命令，卸載使用 umount 命令"),v("br"),t._v("\nmount 語法：")]),t._v(" "),v("div",{staticClass:"language-sh extra-class"},[v("pre",{pre:!0,attrs:{class:"language-sh"}},[v("code",[v("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-hV"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),t._v(" -a "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-fFnrsvw"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-t vfstype"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-fnrsvw"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-o options "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(","),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" device "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("dir")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-fnrsvw"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-t vfstype"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-o options"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" device "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("dir")]),t._v("\n")])])]),v("p",[t._v("參數說明：")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("-V")]),t._v("：顯示程序版本")]),t._v(" "),v("li",[v("code",[t._v("-h")]),t._v("：顯示輔助訊息")]),t._v(" "),v("li",[v("code",[t._v("-v")]),t._v("：顯示較訊息，通常和 "),v("code",[t._v("-f")]),t._v(" 用來除錯。")]),t._v(" "),v("li",[v("code",[t._v("-a")]),t._v("：將 "),v("code",[t._v("/etc/fstab")]),t._v(" 中定義的所有檔案系統掛上。")]),t._v(" "),v("li",[v("code",[t._v("-F")]),t._v("：這個命令通常和 "),v("code",[t._v("-a")]),t._v(" 一起使用，它會為每一個 mount 的動作產生一個行程負責執行。在系統需要掛上大量 NFS 檔案系統時可以加快掛上的動作。")]),t._v(" "),v("li",[v("code",[t._v("-f")]),t._v("：通常用在除錯的用途。它會使 mount 並不執行實際掛上的動作，而是模擬整個掛上的過程。通常會和 "),v("code",[t._v("-v")]),t._v(" 一起使用。")]),t._v(" "),v("li",[v("code",[t._v("-n")]),t._v("：一般而言，mount 在掛上後會在 "),v("code",[t._v("/etc/mtab")]),t._v(" 中寫入一筆資料。但在系統中沒有可寫入檔案系統存在的情況下可以用這個選項取消這個動作")]),t._v(" "),v("li",[v("code",[t._v("-sr")]),t._v("：等於 "),v("code",[t._v("-o ro")])]),t._v(" "),v("li",[v("code",[t._v("-w")]),t._v("：等於 "),v("code",[t._v("-o rw")])]),t._v(" "),v("li",[v("code",[t._v("-L")]),t._v("：將含有特定標籤的硬盤分割掛上")]),t._v(" "),v("li",[v("code",[t._v("-U")]),t._v("：將檔案分割序號為的檔案系統掛下。 "),v("code",[t._v("-L")]),t._v(" 和 "),v("code",[t._v("-U")]),t._v(" 必須在 "),v("code",[t._v("/proc/partition")]),t._v(" 這種檔案存在時才有意義")]),t._v(" "),v("li",[v("code",[t._v("-t")]),t._v("：指定檔案系統的型態，通常不必指定。mount 會自動選擇正確的型態")]),t._v(" "),v("li",[v("code",[t._v("-o async")]),t._v("：打開非同步模式，所有的檔案讀寫動作都會用非同步模式執行")]),t._v(" "),v("li",[v("code",[t._v("-o sync")]),t._v("：在同步模式下執行")]),t._v(" "),v("li",[v("code",[t._v("-o atime")]),t._v("、 "),v("code",[t._v("-o noatime")]),t._v(" ：當 "),v("code",[t._v("atime")]),t._v(" 打開時，系統會在每次讀取檔案時更新檔案的『上一次調用時間』")]),t._v(" "),v("li",[v("code",[t._v("-o auto")]),t._v("、"),v("code",[t._v("-o noauto")]),t._v("：打開/關閉自動掛上模式。")]),t._v(" "),v("li",[v("code",[t._v("-o defaults")]),t._v("：使用預設的選項 rw, suid, dev, exec, auto, nouser, and async.")]),t._v(" "),v("li",[v("code",[t._v("-o dev")]),t._v("、"),v("code",[t._v("-o nodev")]),t._v("、"),v("code",[t._v("-o exec")]),t._v("、"),v("code",[t._v("-o noexec")]),t._v("：允許執行檔被執行。")]),t._v(" "),v("li",[v("code",[t._v("-o suid")]),t._v("、"),v("code",[t._v("-o nosuid")]),t._v("：允許執行檔在 root 權限下執行。")]),t._v(" "),v("li",[v("code",[t._v("-o user")]),t._v("、"),v("code",[t._v("-o nouser")]),t._v("：使用者可以執行 "),v("code",[t._v("mount/umount")]),t._v(" 的動作。")]),t._v(" "),v("li",[v("code",[t._v("-o remount")]),t._v("：將一個已經掛下的檔案系統重新用不同的方式掛上。例如原先是唯讀的系統，現在用可讀寫的模式重新掛上")]),t._v(" "),v("li",[v("code",[t._v("-o ro")]),t._v("：用唯讀模式掛上")]),t._v(" "),v("li",[v("code",[t._v("-o rw")]),t._v("：用可讀寫模式掛上")]),t._v(" "),v("li",[v("code",[t._v("-o loop=")]),t._v("：使用 loop 模式用來將一個檔案當成硬盤分割掛上系統")])]),t._v(" "),v("p",[t._v("umount 語法：")]),t._v(" "),v("div",{staticClass:"language-sh extra-class"},[v("pre",{pre:!0,attrs:{class:"language-sh"}},[v("code",[v("span",{pre:!0,attrs:{class:"token function"}},[t._v("umount")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("- ahnrvV "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("- t "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("文件系統類型"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("文件系統"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),v("p",[t._v("參數：")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("-a")]),t._v("：卸除/etc/mtab中記錄的所有文件系統")]),t._v(" "),v("li",[v("code",[t._v("-h")]),t._v("：顯示幫助")]),t._v(" "),v("li",[v("code",[t._v("-n")]),t._v("：卸除時不要將信息存入 "),v("code",[t._v("/etc/mtab")]),t._v(" 文件中")]),t._v(" "),v("li",[v("code",[t._v("-r")]),t._v("：若無法成功卸除，則嘗試以唯讀的方式重新掛入文件系統")]),t._v(" "),v("li",[v("code",[t._v("-t")]),t._v("<文件系統類型>：僅卸除選項中所指定的文件系統")]),t._v(" "),v("li",[v("code",[t._v("-v")]),t._v("：執行時顯示詳細的信息")]),t._v(" "),v("li",[v("code",[t._v("-V")]),t._v("：顯示版本信息")]),t._v(" "),v("li",[t._v("[文件系統]：除了直接指定文件系統外，也可以用設備名稱或掛入點來表示文件系統")])])])}),[],!1,null,null,null);s.default=a.exports}}]);