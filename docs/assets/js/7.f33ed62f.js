(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{508:function(t,e,a){t.exports=a.p+"assets/img/VPC-1.ce44bbfa.jpg"},509:function(t,e,a){t.exports=a.p+"assets/img/VPC-2.426c8937.jpg"},510:function(t,e,a){t.exports=a.p+"assets/img/VPC-3.88cbd5f2.jpg"},511:function(t,e,a){t.exports=a.p+"assets/img/VPC-4.8ca88907.jpg"},512:function(t,e,a){t.exports=a.p+"assets/img/VPC-5.6cc7c094.jpg"},513:function(t,e,a){t.exports=a.p+"assets/img/VPC-6.28f027c5.jpg"},514:function(t,e,a){t.exports=a.p+"assets/img/VPC-7.499cd70c.png"},515:function(t,e,a){t.exports=a.p+"assets/img/VPC-8.53c3972d.png"},516:function(t,e,a){t.exports=a.p+"assets/img/VPC-9.8fde324e.png"},517:function(t,e,a){t.exports=a.p+"assets/img/VPC-10.077c6303.png"},518:function(t,e,a){t.exports=a.p+"assets/img/VPC-11.c53a3d57.png"},519:function(t,e,a){t.exports=a.p+"assets/img/VPC-12.86bac448.png"},520:function(t,e,a){t.exports=a.p+"assets/img/VPC-13.e328748b.png"},521:function(t,e,a){t.exports=a.p+"assets/img/VPC-14.06a9f18b.png"},522:function(t,e,a){t.exports=a.p+"assets/img/VPC-15.cddadbc7.png"},523:function(t,e,a){t.exports=a.p+"assets/img/VPC-16.43831c56.png"},524:function(t,e,a){t.exports=a.p+"assets/img/VPC-17.e8f1ccc9.png"},525:function(t,e,a){t.exports=a.p+"assets/img/VPC-18.bafe8c38.png"},526:function(t,e,a){t.exports=a.p+"assets/img/VPC-19.92df1e4a.png"},527:function(t,e,a){t.exports=a.p+"assets/img/VPC-20.456595a1.png"},528:function(t,e,a){t.exports=a.p+"assets/img/VPC-21.cd1add59.png"},529:function(t,e,a){t.exports=a.p+"assets/img/VPC-22.a2a6f59c.png"},624:function(t,e,a){"use strict";a.r(e);var i=a(45),s=Object(i.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"vpc-basic"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#vpc-basic"}},[t._v("#")]),t._v(" VPC Basic")]),t._v(" "),i("h2",{attrs:{id:"應用場景"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#應用場景"}},[t._v("#")]),t._v(" 應用場景")]),t._v(" "),i("p",[t._v("在傳統業務需求當中，會為資訊產品建立一個獨立網路環境規劃，因此就需要 VPC，VPC 與 VPC 之間會互相隔離，避免之間直接存取資料。VPC 可以在所有可用區域內建立，並新增一個或多個子網路。")]),t._v(" "),i("h2",{attrs:{id:"核心名詞"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#核心名詞"}},[t._v("#")]),t._v(" 核心名詞")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("Internet Gateway (網際網路閘道)：是一種水平擴展、備援且高可用性的 VPC 元件，允許 VPC 與網際網路之間的通訊。Internet Gateway 有兩種用途：在 VPC 路由表中提供可由網際網路路由之流量的目標，以及針對已獲指派公有 IPv4 地址的執行個體執行網路位址轉譯 (NAT)。")])]),t._v(" "),i("li",[i("p",[t._v("路由表 (Route table) ：一組名為路由的規則，用來判斷網路流量的方向")]),t._v(" "),i("ul",[i("li",[t._v("主路由表 (Main route table)：自動隨附於 VPC 的路由表。它會控制所有並未與任何其他路由表明確建立關聯之子網路的路由。")]),t._v(" "),i("li",[t._v("自訂路由表 (Custom route table)：自己為 VPC 建立的路由表。")]),t._v(" "),i("li",[t._v("路由表關聯 (Route table association)：路由表與子網路、網際網路閘道或虛擬私有閘道之間的關聯。")]),t._v(" "),i("li",[t._v("子網路路由表 (Subnet route table)：與子網路相關聯的路由表。")]),t._v(" "),i("li",[t._v("閘道路由表 (Gateway route table)：與網際網路閘道或虛擬私有閘道相關聯的路由表。")]),t._v(" "),i("li",[t._v("本機閘道路由表 (Local gateway route table)：與 Outposts 本機閘道相關聯的路由表。")]),t._v(" "),i("li",[t._v("目的地 (Destination)：想要流量傳送的 IP 位址範圍 (目的地 CIDR)。")]),t._v(" "),i("li",[t._v("目標 (Target)：要透過其傳送目的地流量的閘道、網路介面或連線；例如，網際網路閘道。")]),t._v(" "),i("li",[t._v("本機路由 (Local route)：VPC 內用於通訊的預設路由。")])])]),t._v(" "),i("li",[i("p",[t._v("子網路 (Subnet)： 建立 VPC 之後，可以在各個可用區域 (Availability Zone) 新增一或多個子網路。在業界實務中，會按照產品需求切割網段，並將 Instance 分別擺在不同網段。一個 subnet 只能存在一個 Availability Zone。")])]),t._v(" "),i("li",[i("p",[t._v("NAT Gateway (網路位址轉譯閘道)：讓私有子網路中的執行個體連線至網際網路或其他 AWS 服務，但防止網際網路啟動與這些執行個體的連線。若要建立 NAT 閘道，必須指定 NAT 閘道所在的公有子網路 (Pubilc Subnet)。")])]),t._v(" "),i("li",[i("p",[t._v("VPC 端點 (VPC endpoint)：將 VPC 私下連線至支援的 AWS 服務以及具有 AWS PrivateLink 功能的 VPC 端點服務，而不需要網際網路閘道、NAT 裝置、VPN 連接或 AWS Direct Connect 連線")])]),t._v(" "),i("li",[i("p",[t._v("Peering Connection：有些時候，資料對接時希望不要透過外部網路溝通，此時透過 Peering Connection 可以讓兩個 VPC 之間進行內部網路溝通")]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("注意")]),t._v("：必須確保VPC內沒有重疊的 IPv4 CIDR， 否則 VPC 相互連線會形成 failed")])])]),t._v(" "),i("li",[i("p",[t._v("VPN Connection：以私有 IP 的方式串連本地網路與雲端網路環境")])]),t._v(" "),i("li",[i("p",[t._v("Flow Logs：可以擷取傳入及傳出 VPC 中網路介面之 IP 流量相關資訊，並可發布至  Amazon CloudWatch Logs 與 S3。")])])]),t._v(" "),i("h2",{attrs:{id:"架構"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#架構"}},[t._v("#")]),t._v(" 架構")]),t._v(" "),i("h4",{attrs:{id:"生活場景"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#生活場景"}},[t._v("#")]),t._v(" 生活場景")]),t._v(" "),i("p",[i("img",{attrs:{src:a(508),alt:"VPC-1",title:"VPC-1"}})]),t._v(" "),i("h4",{attrs:{id:"經典雲端網路環境架構"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#經典雲端網路環境架構"}},[t._v("#")]),t._v(" 經典雲端網路環境架構")]),t._v(" "),i("p",[i("img",{attrs:{src:a(509),alt:"VPC-2",title:"VPC-2"}})]),t._v(" "),i("h2",{attrs:{id:"vpc-四大類對接方式"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#vpc-四大類對接方式"}},[t._v("#")]),t._v(" VPC 四大類對接方式")]),t._v(" "),i("ol",[i("li",[t._v("私有網段連接外網：NAT Gateway")])]),t._v(" "),i("p",[i("img",{attrs:{src:a(510),alt:"VPC-3",title:"VPC-3"}})]),t._v(" "),i("ol",{attrs:{start:"2"}},[i("li",[t._v("VPC 以內網方式操作 AWS 服務：VPC Endpoint\n"),i("ul",[i("li",[t._v("AWS 的服務，預設情況下，與 VPC 內的 Instance 進行連線，會從外部網路進行存取，因此若要以內網方式進行連線，便以 VPC Endpoint 讓 VPC 內 Instance 可以內網的方式與 AWS 服務進行串接")])])])]),t._v(" "),i("p",[i("img",{attrs:{src:a(511),alt:"VPC-4",title:"VPC-4"}})]),t._v(" "),i("ol",{attrs:{start:"3"}},[i("li",[t._v("VPC 串接 VPC：Peering Connection\n"),i("ul",[i("li",[t._v("當有多個獨立產品分別採用獨立的 VPC，當需要進行資料共享時，在預設情況下，兩個 VPC 必須透過外部網路相互連線，為了讓兩個 VPC 可以內網方式進行串接，可透過 Peering Connection 讓兩者之間以私有 IP 進行連線")])])])]),t._v(" "),i("p",[i("img",{attrs:{src:a(512),alt:"VPC-5",title:"VPC-5"}})]),t._v(" "),i("ol",{attrs:{start:"4"}},[i("li",[t._v("VPC 串接本地網路：VPN Connection\n"),i("ul",[i("li",[t._v("當公司本地端網路環境要與 VPC 進行串接，預設情況下，必須以外網進行串接，透過 VPN Connection 即可透過內網且加密的方式進行串接")])])])]),t._v(" "),i("p",[i("img",{attrs:{src:a(513),alt:"VPC-6",title:"VPC-6"}})]),t._v(" "),i("h2",{attrs:{id:"vpc-classic-lab"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#vpc-classic-lab"}},[t._v("#")]),t._v(" VPC Classic LAB")]),t._v(" "),i("p",[i("strong",[t._v("創建VPC步驟")])]),t._v(" "),i("ol",[i("li",[i("p",[t._v("通過 AWS 管理控制台找到 VPC"),i("br"),t._v(" "),i("img",{attrs:{src:a(514),alt:"VPC-7",title:"VPC-7"}})])]),t._v(" "),i("li",[i("p",[t._v("從左側邊攔中單擊 "),i("code",[t._v("Your VPCs")])])]),t._v(" "),i("li",[i("p",[t._v("點擊 "),i("code",[t._v("Create VPC")]),i("br"),t._v(" "),i("img",{attrs:{src:a(515),alt:"VPC-8",title:"VPC-8"}})]),t._v(" "),i("ul",[i("li",[t._v("Name tag：輸入一個 VPC 名稱以標識您的 VPC。例如：MyVPC")]),t._v(" "),i("li",[t._v("IPv4 CIDR block：輸入 10.0.0.0/16")]),t._v(" "),i("li",[t._v("Tenancy：不需要更改，確認 Default 已選擇")]),t._v(" "),i("li",[t._v("然後點擊 "),i("code",[t._v("Create VPC")]),i("br"),t._v(" "),i("img",{attrs:{src:a(516),alt:"VPC-9",title:"VPC-9"}})])])]),t._v(" "),i("li",[i("p",[t._v("創建 VPC 後，將顯示詳細信息，如下所示"),i("br"),t._v(" "),i("img",{attrs:{src:a(517),alt:"VPC-10",title:"VPC-10"}})])])]),t._v(" "),i("p",[i("strong",[t._v("創建 Subnet 步驟")])]),t._v(" "),i("ol",[i("li",[i("p",[t._v("創建 Public Subnet")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("單擊左側菜單中的 "),i("code",[t._v("Subnets")]),i("br"),t._v(" "),i("img",{attrs:{src:a(518),alt:"VPC-11",title:"VPC-11"}})])]),t._v(" "),i("li",[i("p",[t._v("再點擊 "),i("code",[t._v("Create subnet")]),i("br"),t._v(" "),i("img",{attrs:{src:a(519),alt:"VPC-12",title:"VPC-12"}})])]),t._v(" "),i("li",[i("p",[t._v("VPC：從先前創建的列表中選擇 MyVPC")])]),t._v(" "),i("li",[i("p",[t._v("Availability Zone : 選擇 us-east-1a")])]),t._v(" "),i("li",[i("p",[t._v("IPv4 CIDR block : 輸入 10.0.1.0/24"),i("br"),t._v(" "),i("img",{attrs:{src:a(520),alt:"VPC-13",title:"VPC-13"}})])])])]),t._v(" "),i("li",[i("p",[t._v("創建 Private Subnet")]),t._v(" "),i("ul",[i("li",[t._v("VPC：從先前創建的列表中選擇 MyVPC")]),t._v(" "),i("li",[t._v("Availability Zone : 選擇 us-east-1b")]),t._v(" "),i("li",[t._v("IPv4 CIDR block : 輸入 10.0.2.0/24"),i("br"),t._v(" "),i("img",{attrs:{src:a(521),alt:"VPC-14",title:"VPC-14"}})])])]),t._v(" "),i("li",[i("p",[t._v("創建和配置 Internet Gateway")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("從左側邊攔中單擊 "),i("code",[t._v("Internet Gateway")]),i("br"),t._v(" "),i("img",{attrs:{src:a(522),alt:"VPC-15",title:"VPC-15"}})])]),t._v(" "),i("li",[i("p",[t._v("創建 "),i("code",[t._v("Internet Gateway")])])]),t._v(" "),i("li",[i("p",[t._v("Name Tag : 輸入 MyInternetGateway"),i("br"),t._v(" "),i("img",{attrs:{src:a(523),alt:"VPC-16",title:"VPC-16"}})])]),t._v(" "),i("li",[i("p",[t._v("從列表中選擇您創建的 Internet Gateway")])]),t._v(" "),i("li",[i("p",[t._v("點擊 "),i("code",[t._v("Actions")])])]),t._v(" "),i("li",[i("p",[t._v("再點擊 "),i("code",[t._v("Click on Attach to VPC")]),i("br"),t._v(" "),i("img",{attrs:{src:a(524),alt:"VPC-17",title:"VPC-17"}})])]),t._v(" "),i("li",[i("p",[t._v("從列表中選擇創建的 MyVPC，然後點擊 "),i("code",[t._v("Attach internet gateway")]),i("br"),t._v(" "),i("img",{attrs:{src:a(525),alt:"VPC-18",title:"VPC-18"}})])])])])]),t._v(" "),i("p",[i("strong",[t._v("創建 Route Tables")])]),t._v(" "),i("ol",[i("li",[i("p",[t._v("創建 PublicRouteTable")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("Name Tag：輸入 PublicRouteTable")])]),t._v(" "),i("li",[i("p",[t._v("VPC：從清單中選擇 MyVPC"),i("br"),t._v(" "),i("img",{attrs:{src:a(526),alt:"VPC-19",title:"VPC-19"}})])]),t._v(" "),i("li",[i("p",[t._v("點選 PublicRouteTable 並選擇 "),i("code",[t._v("Subnet Associations")])])]),t._v(" "),i("li",[i("p",[t._v("點擊 "),i("code",[t._v("Edit subnet associations")]),i("br"),t._v(" "),i("img",{attrs:{src:a(527),alt:"VPC-20",title:"VPC-20"}})])]),t._v(" "),i("li",[i("p",[t._v("從清單中選擇 "),i("strong",[t._v("MyPublicSubnet")]),t._v(" "),i("br"),t._v(" "),i("img",{attrs:{src:a(528),alt:"VPC-21",title:"VPC-21"}})])])])]),t._v(" "),i("li",[i("p",[t._v("創建 PrivateRouteTable")]),t._v(" "),i("ul",[i("li",[t._v("Name Tag：輸入 PrivateRouteTable")]),t._v(" "),i("li",[t._v("VPC：從清單中選擇 MyVPC")]),t._v(" "),i("li",[t._v("點選 PrivateRouteTable 並選擇 Subnet Associations")]),t._v(" "),i("li",[t._v("點擊 "),i("code",[t._v("Edit subnet associations")])]),t._v(" "),i("li",[t._v("從清單中選擇 "),i("strong",[t._v("MyPrivateSubnet")])])])]),t._v(" "),i("li",[i("p",[t._v("PublicRouteTable：添加路由以允許 Internet 流量到達 VPC")]),t._v(" "),i("ul",[i("li",[t._v("選取路由頁簽，單擊 "),i("code",[t._v("Edit Route")])]),t._v(" "),i("li",[t._v("點擊 "),i("code",[t._v("Add Route")])]),t._v(" "),i("li",[t._v("Destination：0.0.0.0/0")]),t._v(" "),i("li",[t._v("Target：從下拉菜單中選擇 Internet Gateway 選擇 MyInternetGateway"),i("br"),t._v(" "),i("img",{attrs:{src:a(529),alt:"VPC-22",title:"VPC-22"}})])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);