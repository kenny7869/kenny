(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{440:function(t,s,a){t.exports=a.p+"assets/img/Spot-1.58c987f4.png"},441:function(t,s,a){t.exports=a.p+"assets/img/Spot-2.88427bf0.png"},442:function(t,s,a){t.exports=a.p+"assets/img/Spot-3.ce0c7969.png"},443:function(t,s,a){t.exports=a.p+"assets/img/Spot-4.29a5e7d3.png"},444:function(t,s,a){t.exports=a.p+"assets/img/Spot-5.55bd5349.png"},445:function(t,s,a){t.exports=a.p+"assets/img/Spot-6.0198d92e.png"},446:function(t,s,a){t.exports=a.p+"assets/img/Spot-7.90bfa348.png"},447:function(t,s,a){t.exports=a.p+"assets/img/Spot-8.84068d37.png"},448:function(t,s,a){t.exports=a.p+"assets/img/Spot-9.55a91fdb.png"},449:function(t,s,a){t.exports=a.p+"assets/img/Spot-10.d1ed99c8.png"},450:function(t,s,a){t.exports=a.p+"assets/img/Spot-11.fb11b002.png"},451:function(t,s,a){t.exports=a.p+"assets/img/Spot-12.e1a2b499.png"},452:function(t,s,a){t.exports=a.p+"assets/img/Spot-13.5f4527a5.png"},453:function(t,s,a){t.exports=a.p+"assets/img/Spot-14.f3b432da.png"},454:function(t,s,a){t.exports=a.p+"assets/img/Spot-15.0e2415b7.png"},455:function(t,s,a){t.exports=a.p+"assets/img/Spot-16.33ddc53c.png"},456:function(t,s,a){t.exports=a.p+"assets/img/Spot-17.5ce64d8d.png"},457:function(t,s,a){t.exports=a.p+"assets/img/Spot-18.4418252b.png"},458:function(t,s,a){t.exports=a.p+"assets/img/Spot-19.8b2ae831.png"},459:function(t,s,a){t.exports=a.p+"assets/img/Spot-20.655d1302.png"},521:function(t,s,a){"use strict";a.r(s);var e=a(43),p=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"spot-instance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spot-instance"}},[t._v("#")]),t._v(" Spot Instance")]),t._v(" "),e("h2",{attrs:{id:"ec2-spot-instance-競價型執行個體"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ec2-spot-instance-競價型執行個體"}},[t._v("#")]),t._v(" EC2 Spot Instance (競價型執行個體)")]),t._v(" "),e("ul",[e("li",[t._v("Spot Instance 是未使用的 EC2 執行個體，其使用價格低於隨需定價，最高可享受 90% 的折扣，但是，如果當前價格高於指定的最高價格，則 AWS 可以中斷該競價型執行個體")]),t._v(" "),e("li",[t._v("競價與隨需以及預留執行個體使用相同的 EC2 AMI 和執行個體類型，如能彈性決定應用程式執行的時機以及應用程式是否可以中斷，則 Spot Instance 會是一項具成本效益的選擇")]),t._v(" "),e("li",[t._v("可以將 Spot Instance 用於各種無狀態、容錯或彈性應用程式")]),t._v(" "),e("li",[t._v("Spot Instances 與啟動 EC2 方式相同，像是使用 Spot Fleets，Auto Scaling 群組以及 AWS 控制台")]),t._v(" "),e("li",[t._v("如果在一個小時內終止或停止 Spot Instance，則不會向您收費")]),t._v(" "),e("li",[t._v("但是，如果選擇自己停止或終止新啟動的 Spot Instance，則必須支付使用的總秒數")])]),t._v(" "),e("h2",{attrs:{id:"架構圖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#架構圖"}},[t._v("#")]),t._v(" 架構圖")]),t._v(" "),e("p",[e("img",{attrs:{src:a(440),alt:"Spot-1",title:"Spot-1"}})]),t._v(" "),e("h2",{attrs:{id:"實作步驟"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#實作步驟"}},[t._v("#")]),t._v(" 實作步驟")]),t._v(" "),e("ol",[e("li",[t._v("選擇 EC2 服務")]),t._v(" "),e("li",[t._v("關閉選單左上方的 "),e("code",[t._v("New EC2 experience")])])]),t._v(" "),e("p",[e("img",{attrs:{src:a(441),alt:"Spot-2",title:"Spot-2"}})]),t._v(" "),e("p",[t._v("出現 "),e("code",[t._v("feedback for EC2")]),t._v("，點擊 "),e("code",[t._v("Cancel")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(442),alt:"Spot-3",title:"Spot-3"}})]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v("從左邊選單找到 "),e("code",[t._v("Instances")]),t._v("，在主要頁面點擊 "),e("code",[t._v("Launch Instance")])])]),t._v(" "),e("p",[e("img",{attrs:{src:a(443),alt:"Spot-4",title:"Spot-4"}})]),t._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[t._v("選擇 AMI")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(444),alt:"Spot-5",title:"Spot-5"}})]),t._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[t._v("選擇 Instance Type")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(445),alt:"Spot-6",title:"Spot-6"}})]),t._v(" "),e("ol",{attrs:{start:"6"}},[e("li",[t._v("設定 Instance Details")])]),t._v(" "),e("ul",[e("li",[t._v("Number of instances: 1")]),t._v(" "),e("li",[t._v("Purchasing option：Request Spot instances 打勾，就會看到現在各 Availability Zone 現在的價格")]),t._v(" "),e("li",[t._v("Persistent request：不用選擇")]),t._v(" "),e("li",[t._v("Auto-assign Public IP：選擇 Enable")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(446),alt:"Spot-7",title:"Spot-7"}})]),t._v(" "),e("ul",[e("li",[t._v("點開 Advanced Details，User data 裡填入以下內容(在 Apache 伺服器下創造一個HTML網頁)")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/bash")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("su")]),t._v("\n\nyum update -y\n\nyum "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" httpd -y\n\nsystemctl start httpd\n\nsystemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" httpd\n\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<html><h1> Welcome to Whizlabs Server</h1><html>"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" /var/www/html/index.html\n")])])]),e("p",[e("img",{attrs:{src:a(447),alt:"Spot-8",title:"Spot-8"}})]),t._v(" "),e("ol",{attrs:{start:"7"}},[e("li",[t._v("Add Storage：不需要更動")]),t._v(" "),e("li",[t._v("Add Tags：Key 欄位填入 Name，Value 欄位填入 MySpotInstance")]),t._v(" "),e("li",[t._v("Configure Security Group")])]),t._v(" "),e("ul",[e("li",[t._v("選擇 Create a new security group")]),t._v(" "),e("li",[t._v("Security group name：MyEC2SecurityGroup")]),t._v(" "),e("li",[t._v("Description：My EC2 Security Group")]),t._v(" "),e("li",[t._v("添加 SSH 以及 HTTP 規則")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(448),alt:"Spot-9",title:"Spot-9"}})]),t._v(" "),e("ol",{attrs:{start:"10"}},[e("li",[t._v("Key Pair：創建一個新的名稱叫 MySpotKey 的 Key Pair 並下載下來")]),t._v(" "),e("li",[t._v("啟動過程會出現失敗畫面，這是由於填入的 Maximum price 低於定價")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(449),alt:"Spot-10",title:"Spot-10"}})]),t._v(" "),e("ol",{attrs:{start:"12"}},[e("li",[t._v("回到 Configure Instance Details 修改 Maximum price，再重新啟動即可")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(450),alt:"Spot-11",title:"Spot-11"}})]),t._v(" "),e("ol",{attrs:{start:"13"}},[e("li",[t._v("查看執行個體狀態")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(451),alt:"Spot-12",title:"Spot-12"}})]),t._v(" "),e("ol",{attrs:{start:"14"}},[e("li",[t._v("測試網頁是否正常啟動")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(452),alt:"Spot-13",title:"Spot-13"}})]),t._v(" "),e("ol",{attrs:{start:"15"}},[e("li",[t._v("檢視 Spot Request")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(453),alt:"Spot-14",title:"Spot-14"}})]),t._v(" "),e("ol",{attrs:{start:"16"}},[e("li",[t._v("點擊 Request ID，即可看到更多 spot request 的細節")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(454),alt:"Spot-15",title:"Spot-15"}})]),t._v(" "),e("ol",{attrs:{start:"17"}},[e("li",[t._v("在右上角，點擊可查看 Saving summary 以及 Pricing history")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(455),alt:"Spot-16",title:"Spot-16"}})]),t._v(" "),e("ol",{attrs:{start:"18"}},[e("li",[t._v("查看 Saving summary")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(456),alt:"Spot-17",title:"Spot-17"}})]),t._v(" "),e("ol",{attrs:{start:"19"}},[e("li",[t._v("查看 Pricing history，可以透過選單設定想要查看的細節")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(457),alt:"Spot-18",title:"Spot-18"}})]),t._v(" "),e("ol",{attrs:{start:"20"}},[e("li",[t._v("刪除並取消 Spot Instance")])]),t._v(" "),e("ul",[e("li",[t._v("在左方 Spot Requests 並選擇要終止的 request")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(458),alt:"Spot-19",title:"Spot-19"}})]),t._v(" "),e("ul",[e("li",[t._v("在右上方會看到 "),e("code",[t._v("Actions")]),t._v("，點擊 "),e("code",[t._v("Cancel request")])])]),t._v(" "),e("p",[e("img",{attrs:{src:a(459),alt:"Spot-20",title:"Spot-20"}})])])}),[],!1,null,null,null);s.default=p.exports}}]);