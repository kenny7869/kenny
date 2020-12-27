# Network Manager

## 安裝及配置

- NetworkManager 應該預先安裝在CentOS 8 基本安裝上，否則，您可以使用 DNF 軟件包管理器進行安裝

```sh
dnf install NetworkManager
```

- NetworkManager 的整體配置文件位於 `/etc/NetworkManager/NetworkManager.conf`，其他配置文件位於 `/etc/NetworkManager/`

- 檢查 NetworkManager  服務是否正在運行

```sh
systemctl is-active NetworkManager
```

- 檢查 NetworkManager  服務是否有設定開機自動啟動

```sh
systemctl is-enabled NetworkManager
```

- 顯示 NetworkManager 服務狀態

```sh
systemctl status NetworkManager
```

## 使用 NetworkManager 工具並使用 ifcfg 文件配置

- nmcli：用於配置網絡的命令行工具。
- nmtui：一個簡單的基於 curses 的文本用戶界面，還用於配置和管理 newtwork 界面連接。
- 列出 NetworkManager 檢測到的設備

```sh
nmcli device
# or
nmcli device status
```

- 要查看所有活動連接，請運行以下命令(注意，如果沒有-a，它將列出可用的連接配置文件)。

```
nmcli connection show -a
```

- 在 CentOS/RHEL 8 上設置靜態 IP 地址

```sh
vim /etc/sysconfig/network-scripts/ifcfg-eth0
#主要是看要設定的網卡是哪一張，ens編號會有不同
```

```sh
DEVICE="eth0"               <==網路卡代號，必須要 ifcfg-eth0 相對應
HWADDR="08:00:27:71:85:BD"  <==就是網路卡位址，若只有一張網卡，可省略此項目
NM_CONTROLLED="no"          <==不要受到其他軟體的網路管理！
ONBOOT="yes"                <==是否預設啟動此介面的意思
BOOTPROTO=none              <==取得IP的方式，其實關鍵字只有dhcp，手動可輸入none
IPADDR=192.168.1.100        <==就是 IP 啊
NETMASK=255.255.255.0       <==就是子網路遮罩
GATEWAY=192.168.1.254       <==就是預設匝道
# 重點是上面這幾個設定項目，底下的則可以省略的囉！
NETWORK=192.168.1.0         <==就是該網段的第一個 IP，可省略
BROADCAST=192.168.1.255     <==就是廣播位址囉，可省略
MTU=1500                    <==就是最大傳輸單元的設定值，若不更改則可省略
```
- DEVICE：這個設定值後面接的裝置代號需要與檔名 (ifcfg-eth0) 那個裝置代號相同才行！否則可能會造成一些裝置名稱找不到的困擾
- HWADDR：這個東西就是網路卡的 MAC 位址
- BOOTPROTO：啟動該網路介面時，使用何種協定？ 如果是手動給予 IP 的環境，請輸入 static 或 none ，如果是自動取得 IP 的時候，請輸入 dhcp
- GATEWAY：代表的是『整個主機系統的 default gateway』，有 ifcfg-eth0, ifcfg-eth1.... 等多個檔案，**只要在其中一個檔案設定 GATEWAY 即可**
- 保存更改後，需要重新加載所有連接配置文件或重新啟動 NetworkManager 以應用新更改

```sh
nmcli connection reload
# or
systemctl restart NetworkManager
```

- DNS 亦可進入 `/etc/resolv.conf ` 進行修改

```sh
vim /etc/resolv.conf

nameserver 10.160.1.9
nameserver 10.160.128.9
```

## Linux 網路相關設定檔案

| 所需網路參數                      | 主要設定檔檔名                              | 重要參數                                                                   |  
|----------------------------------|-------------------------------------------|----------------------------------------------------------------------------------------|
| IP、Netmask、DHCP 與否Gateway 等  | /etc/sysconfig/network-scripts/ifcfg-eth0 | DEVICE=網卡的代號<br>BOOTPROTO=是否使用 dhcp<br>HWADDR=是否加入網卡卡號(MAC)<br>IPADDR=就是IP位址<br>NETMASK=子網路遮罩啦<br>ONBOOT=要不要預設啟動此介面<br>GATEWAY=就是通訊閘啦<br>NM_CONTROLLED=額外的網管軟體，鳥哥建議取消這個項目！       | 
| 主機名稱                          | /etc/sysconfig/network                    | NETWORKING=要不要有網路<br>NETWORKING_IPV6=是否支援IPv6<br>HOSTNAME=你的主機名   | 
| DNS IP                           | /etc/resolv.conf                           | nameserver DNS的IP |
| 私有 IP 對應的主機名稱        	 | /etc/hosts                                | 私有IP 主機名稱 別名   |
