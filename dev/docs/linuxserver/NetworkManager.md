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

## 使用 NetworkManager 工具並使用 ifcfg 文件

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
vim /etc/sysconfig/network-scripts/ifcfg-ens33
#主要是看要設定的網卡是哪一張，ens編號會有不同
```

```sh
TYPE=Ethernet
PROXY_METHOD=none
BROWSER_ONLY=no
BOOTPROTO=none
DEFROUTE=yes
IPV4_FAILURE_FATAL=no
IPV6INIT=yes
IPV6_AUTOCONF=yes
IPV6_DEFROUTE=yes
IPV6_FAILURE_FATAL=no
IPV6_ADDR_GEN_MODE=stable-privacy
NAME=ens33
UUID=ffd19ca9-17a4-41f0-ab82-4d40a5df0337
DEVICE=ens33
ONBOOT=yes
IPADDR=192.168.0.110
PREFIX=24
GATEWAY=192.168.0.1
DNS1=8.8.8.8
PEERDNS=no
```

- 保存更改後，需要重新加載所有連接配置文件或重新啟動 NetworkManager 以應用新更改

```sh
nmcli connection reload
# or
systemctl restart NetworkManager
```