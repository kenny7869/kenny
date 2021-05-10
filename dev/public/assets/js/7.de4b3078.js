(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{376:function(t,v,r){t.exports=r.p+"assets/img/VLAN-1.12eed654.jpg"},377:function(t,v,r){t.exports=r.p+"assets/img/VLAN-2.18a47398.jpg"},378:function(t,v,r){t.exports=r.p+"assets/img/VLAN-3.30b697d2.jpg"},379:function(t,v,r){t.exports=r.p+"assets/img/VLAN-4.de0becf0.jpg"},380:function(t,v,r){t.exports=r.p+"assets/img/VLAN-6.f92daaa4.jpg"},381:function(t,v,r){t.exports=r.p+"assets/img/VLAN-5.c3672781.jpg"},515:function(t,v,r){"use strict";r.r(v);var _=r(43),a=Object(_.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"vlan"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vlan"}},[t._v("#")]),t._v(" VLAN")]),t._v(" "),_("h2",{attrs:{id:"應用場景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#應用場景"}},[t._v("#")]),t._v(" 應用場景")]),t._v(" "),_("p",[t._v("當大型企業組織需要進行整體網路設計，而管理人員希望將整個大型網路區分成幾個小型的網段，每個網段都能針對不同的使用者，例如工程師應該存取同一個網段的網路，而銷售人員可能會存取另一個不同網段等等。"),_("br"),_("br"),t._v("\nVLAN技術就可以應用在這樣的環境之下，利用VLAN區分不同的網段，將工程師全部分到同一個VLAN中，而把銷售人員都分到另一個相同的VLAN中，這樣就不用牽扯到實體的網路連線而達到網段區分的效果。當然也可以根據公司裡的各個單位來區分網段，或是根據各種其他的區分條件而做不同的設定。")]),t._v(" "),_("h2",{attrs:{id:"核心名詞"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#核心名詞"}},[t._v("#")]),t._v(" 核心名詞")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("Virtual Local Area Network (VLAN)")]),t._v(" "),_("ul",[_("li",[t._v("VLAN技術允許網路管理者將一個物理的LAN邏輯地劃分成不同的廣播域（或稱虛擬LAN，即VLAN）"),_("br"),t._v(" "),_("strong",[t._v("A VLAN = A broadcast")]),_("br"),t._v(" "),_("img",{attrs:{src:r(376),alt:"VLAN-1",title:"VLAN-1"}})])])]),t._v(" "),_("li",[_("p",[t._v("Trunk")]),t._v(" "),_("ul",[_("li",[t._v("Switch port 是結合實體埠的第二層介面。如果該交換機埠是 "),_("code",[t._v("access port")]),t._v("，則只能屬於一個VLAN；如果是 "),_("code",[t._v("Trunk port")]),t._v("，則可以屬於所有的 VLAN")]),t._v(" "),_("li",[t._v("Trunk 就是利用單一線路讓所有相對應 VLAN 互通(在此之前兩台 switch 的同 VLAN 要相連就要一條線兩個port，兩個vlan兩條線四個port，以此類推疊加)")]),t._v(" "),_("li",[t._v("Trunk上使用的協定：IEEE 802.1Q(dot1q)、Cisco ISL(CCNA不討論)")]),t._v(" "),_("li",[t._v("原理："),_("br"),t._v("\n交換器為 L2 設備，主要辨識 Ethernet Header (乙太網表頭)，乙太網表頭中沒有 VLAN 的資訊，802.1Q 協定的主要功用就是將 VLAN ID 用 tag 方式加到乙太網表頭，用以區別資料該送到哪個 VLAN；當資料經過 Trunk 時，802.1Q 協定會將 tag 拿掉(untag)")])])]),t._v(" "),_("li",[_("p",[t._v("IEEE 802.1Q"),_("br"),t._v("\n是訊框加標的標準方法。插入一個4bytes欄位至訊框中，以識別VLAN。若要跨廠牌交換器間建立主幹鏈路，必須使用802.1q才能運作。重點在於12位元的VLAN ID，它的值可以到212-2(0和4095為保留VLAN)，代表802.1q的加標訊框可以攜帶4094個VLAN資訊。(VLAN ID 12bits)")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Ether Type NO.")]),t._v(" "),_("th",[t._v("Prtocol")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("0x0800")]),t._v(" "),_("td",[t._v("IPv4")])]),t._v(" "),_("tr",[_("td",[t._v("0x0806")]),t._v(" "),_("td",[t._v("ARP")])]),t._v(" "),_("tr",[_("td",[t._v("0x86DD")]),t._v(" "),_("td",[t._v("IPv6")])]),t._v(" "),_("tr",[_("td",[t._v("0x8100")]),t._v(" "),_("td",[t._v("IEEE 802.1Q")])])])]),t._v(" "),_("p",[_("img",{attrs:{src:r(377),alt:"VLAN-2",title:"VLAN-2"}})]),t._v(" "),_("p",[t._v("理論上可建立VLAN為1-4094，但實際"),_("strong",[t._v("可建立的VLAN為1-1001，1、1002-1005為保留VLAN，不可變動")]),t._v("。編號超過1005的VLAN稱為延伸式VLAN；除非交換器設定為VTP，否則它們不會被儲存在資料庫中。(VLAN 1006-4095只有Cisco Core Switch可用)")]),t._v(" "),_("ul",[_("li",[t._v("Frame tagging(訊框加標)"),_("br"),t._v("\n每部交換器收到訊框時必須先從訊框的標籤中識別出它的 VLAN ID，然後檢視過濾表中的資訊，看要如何處理該訊框。如果訊框抵達的是一部連有其他 Trunk port 的交換器，就會從 Trunk port轉送出去。當訊框抵達出口時，交換器就會移除 VLAN 識別子，所以目的裝置可以接收訊框，而不必瞭解他們的 VLAN 識別。另外如果使用802.1q的主幹通訊，它們同時支援加標與沒有加標的交通")])])]),t._v(" "),_("li",[_("p",[t._v("Inter Vlan Routing (IVR)"),_("br"),t._v("\n又稱為upstream routing(上行遶送)，由於 VLAN 隔離了 Layer 2 廣播域，也間接的隔離了各個 VLAN 之間的其他 Layer 2 流量交換，這樣導致屬於不同 VLAN 之間的用戶不能進行 Layer 2 的通信。")])])]),t._v(" "),_("p",[_("img",{attrs:{src:r(378),alt:"VLAN-3",title:"VLAN-3"}})]),t._v(" "),_("p",[t._v("為了解決這樣的問題，衍生出三種方法")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("通過路由器接上多個實體端口"),_("br"),t._v("\n在路由器上為每一個 VLAN 都配置一個實體端口連接。將不同 VLAN 分流到路由器上不同的邏輯端口中，再通過路由器進行路由的轉發，以實現 VLAN 之間的通信"),_("br"),t._v(" "),_("img",{attrs:{src:r(379),alt:"VLAN-4",title:"VLAN-4"}})])]),t._v(" "),_("li",[_("p",[t._v("單臂路由"),_("br"),t._v("\n使用路由器的單一實體端口做 Trunk，此種做法需在該端口底下建立 Sub-interface 也就是邏輯子端口"),_("br"),t._v(" "),_("img",{attrs:{src:r(380),alt:"VLAN-6",title:"VLAN-6"}}),_("br"),t._v(" "),_("img",{attrs:{src:r(381),alt:"VLAN-5",title:"VLAN-5"}})])])]),t._v(" "),_("ul",[_("li",[t._v("Cisco 修改 Native VLAN 的單臂路由指令")])]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("Router(config-subif)# encapsulation dot1q x native\n")])])]),_("ol",{attrs:{start:"3"}},[_("li",[t._v("通過三層交換實現"),_("br"),t._v("\n在三層交換機配置 VLAN 虛擬端口來實現 VLAN 之間的路由，每個 VLAN 配置一個虛擬端口並配置一個 IP 地址（用戶設備設置的匝道作為 VLAN 虛擬端口的 IP 地址）")])]),t._v(" "),_("ul",[_("li",[_("p",[t._v("Native VLAN"),_("br"),t._v("\nTrunk port 的 Native VLAN 預設為 VALN 1，在 802.1Q 主幹協定中，當資料目的是 Native VLAN時，該資料經過 Trunk port 不用 tag，即沒有 tag 的資料都往 Native VLAN丟"),_("br"),t._v("\n有一種網路攻擊針對 Native VLAN 稱為 VLAN hopping，所以從資安角度來說會想辦法關閉Native VLAN 的功能，或是將未使用之 VLAN 作為 Native VLAN")]),t._v(" "),_("ul",[_("li",[t._v("修改 Native VLAN 為其它 VLAN 指令")])]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("Switch(config)# int f/x\nSwitch(config-if)# switchport trunk native vlan x    \n#要注意另一台switch相對應的trunk port也要改native vlan，否則無法建立trunk\n")])])])]),t._v(" "),_("li",[_("p",[t._v("VTP (VLAN Trunking Protocol)"),_("br"),t._v("\n是 Cisco 專利，主要用作 VLAN 管理，話說要在網路裡加入⼀個新的 VLAN，需要在該 VLAN Traffic 所經過的每⼀台 Switch 創建此 VLAN。使⽤ VTP 則可以實施中央管理，只需在⼀台 VTP Server 新增 VLAN，VLAN 資訊就會自動發怖到其他 Switch，其他 Switch 就會新增此 VLAN")]),t._v(" "),_("ul",[_("li",[t._v("Server mode：這是所有 Catalyst Switch 的預設模式。在 VTP 網域中至少要有一台伺服器，以便傳播 VLAN 資訊。此外這台交換器必須處於伺服器模式，以便在 VTP 網域中建立、新增、和移除 VLAN。VLAN 資訊必須要在伺服器模式下變動，而且在 Server mode 的 Switch 上所做的任何 VLAN 變動都會傳播到整個 VTP 網域。在 VTP Server mode 中，VLAN 組態是存放在交換器的 NVRAM 中")]),t._v(" "),_("li",[t._v("Client mode：在Client mode下的 Switch 會接收來自 VTP Server 的 資訊；最大差異在於它們不能建立、變動移除VLAN。VTP 伺服器傳送的 VLAN 資訊不是存放在 NVRAM—這很重要，因為它意味著當 Switch 重新開機或重新載入時，VLAN 的資訊會被刪除")]),t._v(" "),_("li",[t._v("Transparent mode：Switch 不會參與 VTP 網域或是分享它的 VLAN 資料庫，但是它們還是會透過設定的主幹鏈路轉送 VTP 。它們可以建立、修改、和移除VLAN，會保管自己的資料庫但不會與其它的交換器共享，VLAN 資料庫會保存在NVRAM中。但其實它只對本機有意義，透通模式的完整目標是要讓遠端交換器能透過不參與相 VLAN 指派的交換器，然後從VTP伺服器端接收到VLAN資料庫。")]),t._v(" "),_("li",[t._v("VTP要在交換器間溝通VLAN資訊，必須滿足下面4個要求：")])]),t._v(" "),_("ol",[_("li",[t._v("VTP 版本必須相同")]),t._v(" "),_("li",[t._v("Switch 的 VTP 管理網域名稱必須相同")]),t._v(" "),_("li",[t._v("其中一台 Switch 必須設定為 VTP Server")]),t._v(" "),_("li",[t._v("視需要設定 VTP 密碼")]),t._v(" "),_("li",[t._v("Switch 間必須為 "),_("strong",[t._v("Trunk")])])])])]),t._v(" "),_("h2",{attrs:{id:"vlan-基礎設定相關指令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vlan-基礎設定相關指令"}},[t._v("#")]),t._v(" VLAN 基礎設定相關指令")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("指令")]),t._v(" "),_("th",[t._v("說明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Switch#show vlan"),_("br"),t._v("Switch#show vlan id xx"),_("br"),t._v("Switch#show interface trunk")]),t._v(" "),_("td",[t._v("．查詢現有vlan狀態，只能顯示access port"),_("br"),t._v("．查詢特定vlan狀態"),_("br"),t._v("．查詢trunk port狀態")])]),t._v(" "),_("tr",[_("td",[t._v("Switch#show int fx/x switchport")]),t._v(" "),_("td",[t._v("查詢特定介面的vlan設定")])]),t._v(" "),_("tr",[_("td",[t._v("Switch(conf)#vlan x"),_("br"),t._v("↑設定完要no shutdown"),_("br"),t._v("↑視情況給VLAN IP & Mask(如果要telnet switch的話)")]),t._v(" "),_("td",[t._v("建立vlan編號x")])]),t._v(" "),_("tr",[_("td",[t._v("Switch(conf-vlan)#name happy")]),t._v(" "),_("td",[t._v("將vlan x命名為happy")])]),t._v(" "),_("tr",[_("td",[t._v("Switch#vlan database"),_("br"),t._v("Switch(conf)#vlan xx name yyy")]),t._v(" "),_("td",[t._v("非主流配置vlan")])]),t._v(" "),_("tr",[_("td",[t._v("Switch(conf-if)#switchport access vlan y")]),t._v(" "),_("td",[t._v("在fx/x介面下，指定該port到vlan y")])]),t._v(" "),_("tr",[_("td",[t._v("Switch(config)#interface range f0/1-2"),_("br"),t._v("Switch(config-if)#switchport access vlan XX"),_("br"),t._v("Switch(config)#interface range f0/3,f0/13"),_("br"),t._v("Switch(config-if)#switchport access vlan XX")]),t._v(" "),_("td",[t._v("一次加入多個介面到vlan")])]),t._v(" "),_("tr",[_("td",[t._v("Switch(conf-if)#switchport voice vlan z")]),t._v(" "),_("td",[t._v("將該介面指定到voice vlan z(要先建立z)")])]),t._v(" "),_("tr",[_("td",[t._v("Switch#del flash:vlan.dat"),_("br"),t._v("Switch#reload")]),t._v(" "),_("td",[t._v("清除原有vlan database")])]),t._v(" "),_("tr",[_("td",[t._v("Switch(config-if)#ip address dhcp")]),t._v(" "),_("td",[t._v("VLAN使用DHCP")])]),t._v(" "),_("tr",[_("td",[t._v("Switch#show dhcp lease")]),t._v(" "),_("td",[t._v("承上，查詢DHCP狀態")])])])]),t._v(" "),_("h2",{attrs:{id:"trunk相關指令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#trunk相關指令"}},[t._v("#")]),t._v(" Trunk相關指令")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("指令")]),t._v(" "),_("th",[t._v("說明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Switch(config)#int fx/x"),_("br"),t._v("Switch(config-if)#switchport trunk encapsulation dot1q"),_("br"),t._v("Switch(config-if)#switchport mode trunk")]),t._v(" "),_("td",[t._v("設定fx/x介面為trunk port"),_("br"),t._v("#在較新的IOS版本可省略dot1Q那行")])]),t._v(" "),_("tr",[_("td",[t._v("Switch(config-if)#switchport trunk allowed vlan y"),_("br"),t._v("Switch(config-if)#switchport trunk allowed vlan remove y"),_("br"),t._v("△y可以設定範圍比如4-8"),_("br"),t._v("Switch(config-if)#switchport trunk allowed vlan all")]),t._v(" "),_("td",[t._v("讓特定vlan通過trunk"),_("br"),t._v("讓特定vlan不能通過trunk"),_("br"),t._v(" "),_("br"),t._v("讓所有vlan通過trunk(回復預設)")])]),t._v(" "),_("tr",[_("td",[t._v("Switch(config-if)#switchport trunk native vlan y"),_("br"),t._v("#no switchport trunk native vlan →復原")]),t._v(" "),_("td",[t._v("修改trunk port的native vlan (要802.1q)"),_("br"),t._v("#trunk的兩邊都要修改才能溝通")])]),t._v(" "),_("tr",[_("td",[t._v("Switch#show int f0/24 switchport")]),t._v(" "),_("td",[t._v("查詢fx/x是否為Trunk Port")])]),t._v(" "),_("tr",[_("td",[t._v("Switch#show interface trunk"),_("br"),t._v("Operational mode：目前的trunk模式")]),t._v(" "),_("td",[t._v("查詢trunk資訊"),_("br"),t._v("查詢有哪些是trunk port與哪些vlan可通")])]),t._v(" "),_("tr",[_("td",[t._v("Switch#traceroute ip")]),t._v(" "),_("td",[t._v("查詢路由是否有經過Trunk")])])])])])}),[],!1,null,null,null);v.default=a.exports}}]);