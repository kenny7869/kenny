(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{533:function(s,t,a){"use strict";a.r(t);var e=a(43),v=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"系統資源查看"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系統資源查看"}},[s._v("#")]),s._v(" 系統資源查看")]),s._v(" "),a("h2",{attrs:{id:"ps-process-status-指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ps-process-status-指令"}},[s._v("#")]),s._v(" ps (Process status) 指令")]),s._v(" "),a("p",[s._v("可利用 ps 將某個時間點的程序運作情況擷取下來")]),s._v(" "),a("p",[a("strong",[s._v("選項與參數：")])]),s._v(" "),a("ul",[a("li",[s._v("-A：所有的 process 均顯示出來，與 -e 具有同樣的效用")]),s._v(" "),a("li",[s._v("-a：不與 terminal 有關的所有 process")]),s._v(" "),a("li",[s._v("-u：有效使用者 (effective user) 相關的 process")]),s._v(" "),a("li",[s._v("x：通常與 a 這個參數一起使用，可列出較完整資訊")])]),s._v(" "),a("p",[a("strong",[s._v("輸出格式規劃：")])]),s._v(" "),a("ul",[a("li",[s._v("l：較長、較詳細的將該 PID 的的資訊列出")]),s._v(" "),a("li",[s._v("j：工作的格式 (jobs format)")]),s._v(" "),a("li",[s._v("-f：做一個更為完整的輸出")])]),s._v(" "),a("p",[s._v("以下這行指令可利用 ps 指令列出行程的一些基本資訊，按照每個行程所使用的記憶體排序後，列出排名最前面的幾個行程，也就是列出系統上最耗費記憶體的程式：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -eo pid,ppid,cmd,%mem,%cpu --sort"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("-%mem "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("head")]),s._v("\n")])])]),a("p",[s._v("這裡的 "),a("code",[s._v("-e")]),s._v(" 參數是代表輸出所有行程的資訊，而 "),a("code",[s._v("-o")]),s._v(" 參數則是用來指定輸出欄位用的，後面接著所有想要輸出的欄位名稱，這裡我們讓 ps 輸出以下幾個欄位：")]),s._v(" "),a("ul",[a("li",[s._v("pid：行程 ID（process ID）")]),s._v(" "),a("li",[s._v("ppid：父行程 ID（parent process ID）")]),s._v(" "),a("li",[s._v("cmd：程式名稱")]),s._v(" "),a("li",[s._v("%mem：記憶體使用量（百分比）")]),s._v(" "),a("li",[s._v("%cpu：CPU 使用量（百分比）")])]),s._v(" "),a("p",[s._v("而 "),a("code",[s._v("--sort")]),s._v(" 參數則是指定排序的依據欄位，預設會依照數值由小到大排序，若要由大到小的方式排序的話，可以在欄位名稱前加上一個負號，依上述例子，排序的欄位指定為"),a("code",[s._v("-%mem")]),s._v("，這樣就可以依照記憶體使用量，從大到小排序"),a("br"),s._v("\n最後將 ps 的輸出以 Linux 管線（pipe）導向至 head，決定要保留前幾行的資料，其餘的都丟棄")]),s._v(" "),a("p",[s._v("若要找出系統上最耗費 CPU 的程式，也是使用類似的指令，只是在排序時，將排序的欄位換成 CPU 使用量")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -eo pid,ppid,cmd,%mem,%cpu --sort"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("-%cpu "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("head")]),s._v("\n")])])]),a("h2",{attrs:{id:"top-指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#top-指令"}},[s._v("#")]),s._v(" top 指令")]),s._v(" "),a("p",[a("code",[s._v("top")]),s._v(" 指令是一個互動式（interactive）的工具，可以顯示即時的系統負載狀態，而它也可以用於指令稿中，輸出各種系統資訊。")]),s._v(" "),a("p",[s._v("以下這行指令可將系統行程以記憶體的使用賴排序後，以 batch 模式輸出報表，並且指定保留前幾個最耗費記憶體的行程")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),s._v(" -b -o +%MEM "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("head")]),s._v(" -n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v("\n")])])]),a("p",[s._v("其中 "),a("code",[s._v("-b")]),s._v(" 參數是 batch 模式的意思，而 "),a("code",[s._v("-o")]),s._v(" 參數則是設定以記憶體用量來排序行程，最後面的 "),a("code",[s._v("head -n 17")]),s._v(" 則是篩選 top 輸出的文字內容，只保留前 17 行")]),s._v(" "),a("p",[s._v("若要找出最耗費 CPU 資源的行程，則改用 CPU 使用量來排序即可，如下：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),s._v(" -b -o +%CPU "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("head")]),s._v(" -n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=v.exports}}]);