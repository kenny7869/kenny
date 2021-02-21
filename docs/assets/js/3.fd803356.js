(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{376:function(t,s,i){t.exports=i.p+"assets/img/IAM-1.77907f88.jpg"},377:function(t,s,i){t.exports=i.p+"assets/img/IAM-2.831733ff.jpg"},378:function(t,s,i){t.exports=i.p+"assets/img/IAM-3.0e63a716.jpg"},379:function(t,s,i){t.exports=i.p+"assets/img/IAM-4.e8d2af53.jpg"},380:function(t,s,i){t.exports=i.p+"assets/img/IAM-5.f7e1072d.jpg"},381:function(t,s,i){t.exports=i.p+"assets/img/IAM-6.f58e14e4.jpg"},382:function(t,s,i){t.exports=i.p+"assets/img/IAM-7.9f0efac3.jpg"},383:function(t,s,i){t.exports=i.p+"assets/img/IAM-8.518fae32.jpg"},384:function(t,s,i){t.exports=i.p+"assets/img/IAM-9.c13838c3.jpg"},385:function(t,s,i){t.exports=i.p+"assets/img/IAM-10.92f3b606.jpg"},386:function(t,s,i){t.exports=i.p+"assets/img/IAM-11.d9287d87.jpg"},387:function(t,s,i){t.exports=i.p+"assets/img/IAM-12.9ca9cb67.jpg"},388:function(t,s,i){t.exports=i.p+"assets/img/IAM-13.65b2f52b.jpg"},389:function(t,s,i){t.exports=i.p+"assets/img/IAM-14.545ca256.jpg"},390:function(t,s,i){t.exports=i.p+"assets/img/IAM-15.de0c76d5.jpg"},391:function(t,s,i){t.exports=i.p+"assets/img/IAM-16.1f314035.jpg"},392:function(t,s,i){t.exports=i.p+"assets/img/IAM-17.53291070.jpg"},393:function(t,s,i){t.exports=i.p+"assets/img/IAM-18.176f9981.jpg"},394:function(t,s,i){t.exports=i.p+"assets/img/IAM-19.b0d3160f.jpg"},395:function(t,s,i){t.exports=i.p+"assets/img/IAM-20.dc6a008b.jpg"},396:function(t,s,i){t.exports=i.p+"assets/img/IAM-21.467e2e98.jpg"},397:function(t,s,i){t.exports=i.p+"assets/img/IAM-22.fdbcc25f.jpg"},398:function(t,s,i){t.exports=i.p+"assets/img/IAM-23.acba5eb8.jpg"},399:function(t,s,i){t.exports=i.p+"assets/img/IAM-24.13c2826b.jpg"},400:function(t,s,i){t.exports=i.p+"assets/img/IAM-25.629212cc.jpg"},401:function(t,s,i){t.exports=i.p+"assets/img/IAM-26.b6c2b498.jpg"},402:function(t,s,i){t.exports=i.p+"assets/img/IAM-27.2d6e9edc.jpg"},403:function(t,s,i){t.exports=i.p+"assets/img/IAM-28.b50bdae3.jpg"},455:function(t,s,i){"use strict";i.r(s);var r=i(43),a=Object(r.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"introduction-to-iam"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#introduction-to-iam"}},[t._v("#")]),t._v(" Introduction to IAM")]),t._v(" "),r("h2",{attrs:{id:"應用場景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#應用場景"}},[t._v("#")]),t._v(" 應用場景")]),t._v(" "),r("p",[t._v("AWS root account 權限非常大，為了避免被盜取的風險，因此透過 Identity and Access Management (IAM) 服務把 root 權限切割成多個用戶與群組權限")]),t._v(" "),r("h2",{attrs:{id:"核心名詞"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#核心名詞"}},[t._v("#")]),t._v(" 核心名詞")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("Permission：多筆政策 (Policy) 組合而成，用來管理 Policy")])]),t._v(" "),r("li",[r("p",[t._v("Policy：一個規定好格式的 JSON 檔，用來管理 AWS 的存取權限，可區分以身分(Identity)為基礎的政策和以資源(Resource)為基礎的政策"),r("br"),t._v(" "),r("strong",[t._v("以身分(Identity)為基礎的政策")]),t._v(" – 將受管和內嵌政策連接到 IAM 身分，例如使用者與使用者所屬的群組和角色。"),r("br"),t._v(" "),r("strong",[t._v("以資源(Resource)為基礎的政策")]),t._v(" – 將內嵌政策連接到資源。以資源為基礎的政策的最常見範例是 Amazon S3 儲存貯體政策和 IAM 角色信任政策。"),r("br"),t._v(" "),r("img",{attrs:{src:i(376),alt:"IAM-1",title:"IAM-1"}})]),t._v(" "),r("p",[t._v("Policy JSON 語法包含：Effect、Principal、Condition、Action、Resource"),r("br"),t._v(" "),r("img",{attrs:{src:i(377),alt:"IAM-2",title:"IAM-2"}})]),t._v(" "),r("ol",[r("li",[t._v("Effect：允許或拒絕存取，預設為拒絕存取")]),t._v(" "),r("li",[t._v("Principal：受政策約束的單位，ex：IAM USER、S3 Bucket")]),t._v(" "),r("li",[t._v("Condition：必須具備那些條件政策才能生效")]),t._v(" "),r("li",[t._v("Action：允許 AWS 服務的動作")]),t._v(" "),r("li",[t._v("Resource：允許對其動作的 AWS 資源")])])]),t._v(" "),r("li",[r("p",[t._v("IAM Group：IAM 使用者 (User) 的集合，群組可以指定多個使用者的許可 (permission)，輕鬆的管理這些使用者，但無法自動包含多個使用者"),r("br"),t._v(" "),r("img",{attrs:{src:i(378),alt:"IAM-3",title:"IAM-3"}})])]),t._v(" "),r("li",[r("p",[t._v("IAM User：root account 之下建立的使用者，每個使用者都有密碼可以登入 console，也可以為每個使用者建立存取憑證 (Credential)")])]),t._v(" "),r("li",[r("p",[t._v("IAM Role：具有特定權限的一種身分，目的是用來委派 AWS 的服務與資源的存取，因此可以將存取權設定在 Role 上，提供服務與服務之間的溝通橋樑")])]),t._v(" "),r("li",[r("p",[t._v("Credential：當程式語言或命令列工具( AWS API、AWS CLI 等) 在跟 AWS 服務做資源調度時，用此來做憑證判斷")])])]),t._v(" "),r("h2",{attrs:{id:"iam-帳號管理歸納圖"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#iam-帳號管理歸納圖"}},[t._v("#")]),t._v(" IAM 帳號管理歸納圖")]),t._v(" "),r("p",[r("img",{attrs:{src:i(379),alt:"IAM-4",title:"IAM-4"}})]),t._v(" "),r("h2",{attrs:{id:"role-的應用情境圖"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#role-的應用情境圖"}},[t._v("#")]),t._v(" Role 的應用情境圖")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("其他 AWS 帳號、社群帳號、本地帳號串接 AWS"),r("br"),t._v(" "),r("img",{attrs:{src:i(380),alt:"IAM-5",title:"IAM-5"}})])]),t._v(" "),r("li",[r("p",[t._v("AWS 服務資源相互調用"),r("br"),t._v(" "),r("img",{attrs:{src:i(381),alt:"IAM-6",title:"IAM-6"}})])])]),t._v(" "),r("h2",{attrs:{id:"小結"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#小結"}},[t._v("#")]),t._v(" 小結")]),t._v(" "),r("p",[t._v("IAM 是 AWS 服務最重要的一環，業界經常依照專案開發角度區分為設置、開發、生產三個階段")]),t._v(" "),r("ul",[r("li",[t._v("設置：透過 Group、User、Policy 建置一個安全的開發環境")]),t._v(" "),r("li",[t._v("開發：依照開發現實需求，撰寫多個 Policy，並進行監控")]),t._v(" "),r("li",[t._v("生產：把所需應用部屬到 AWS 的服務上，服務與服務之間有調用之需求，便使用到 Role 的機制，建立 Role 來協助應用")])]),t._v(" "),r("h2",{attrs:{id:"iam-lab-實作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#iam-lab-實作"}},[t._v("#")]),t._v(" IAM LAB 實作")]),t._v(" "),r("h3",{attrs:{id:"iam-lab-實作流程圖"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#iam-lab-實作流程圖"}},[t._v("#")]),t._v(" IAM LAB 實作流程圖")]),t._v(" "),r("p",[r("img",{attrs:{src:i(382),alt:"IAM-7",title:"IAM-7"}})]),t._v(" "),r("h3",{attrs:{id:"iam-lab步驟"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#iam-lab步驟"}},[t._v("#")]),t._v(" IAM LAB步驟")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("登入 Root Account"),r("br"),t._v(" "),r("img",{attrs:{src:i(383),alt:"IAM-8",title:"IAM-8"}})])]),t._v(" "),r("li",[r("p",[t._v("進入主控台，搜尋 IAM"),r("br"),t._v(" "),r("img",{attrs:{src:i(384),alt:"IAM-9",title:"IAM-9"}})])]),t._v(" "),r("li",[r("p",[t._v("更改 IAM USER 登入 URL 的別名"),r("br"),t._v(" "),r("img",{attrs:{src:i(385),alt:"IAM-10",title:"IAM-10"}}),r("br"),t._v(" "),r("img",{attrs:{src:i(386),alt:"IAM-11",title:"IAM-11"}})])]),t._v(" "),r("li",[r("p",[t._v("創建 IAM USER 給專案各部門使用"),r("br"),t._v(" "),r("img",{attrs:{src:i(387),alt:"IAM-12",title:"IAM-12"}}),r("br"),t._v(" "),r("img",{attrs:{src:i(388),alt:"IAM-13",title:"IAM-13"}}),r("br"),t._v(" "),r("img",{attrs:{src:i(389),alt:"IAM-14",title:"IAM-14"}}),r("br"),t._v(" "),r("img",{attrs:{src:i(390),alt:"IAM-15",title:"IAM-15"}}),r("br"),t._v(" "),r("img",{attrs:{src:i(391),alt:"IAM-16",title:"IAM-16"}}),r("br"),t._v(" "),r("img",{attrs:{src:i(392),alt:"IAM-17",title:"IAM-17"}})])]),t._v(" "),r("li",[r("p",[t._v("創建 IAM Group，部署政策至群組，將使用者加入"),r("br"),t._v(" "),r("img",{attrs:{src:i(393),alt:"IAM-18",title:"IAM-18"}}),r("br"),t._v(" "),r("img",{attrs:{src:i(394),alt:"IAM-19",title:"IAM-19"}}),r("br"),t._v(" "),r("img",{attrs:{src:i(395),alt:"IAM-20",title:"IAM-20"}}),r("br"),t._v(" "),r("img",{attrs:{src:i(396),alt:"IAM-21",title:"IAM-21"}}),r("br"),t._v(" "),r("img",{attrs:{src:i(397),alt:"IAM-22",title:"IAM-22"}})])]),t._v(" "),r("li",[r("p",[t._v("創建 Role，提供 AWS 服務與服務之間資源的調用或是外部帳號的連接"),r("br"),t._v(" "),r("img",{attrs:{src:i(398),alt:"IAM-23",title:"IAM-23"}}),r("br"),t._v(" "),r("img",{attrs:{src:i(399),alt:"IAM-24",title:"IAM-24"}}),r("br"),t._v(" "),r("img",{attrs:{src:i(400),alt:"IAM-25",title:"IAM-25"}}),r("br"),t._v(" "),r("img",{attrs:{src:i(401),alt:"IAM-26",title:"IAM-26"}}),r("br"),t._v(" "),r("img",{attrs:{src:i(402),alt:"IAM-27",title:"IAM-27"}}),r("br"),t._v(" "),r("img",{attrs:{src:i(403),alt:"IAM-28",title:"IAM-28"}})])])])])}),[],!1,null,null,null);s.default=a.exports}}]);