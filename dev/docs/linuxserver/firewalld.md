# Firewalld

## 安裝 firewalld

- 請先確認 iptables 是否有被啟用，若系統上原本就有運行 iptables 的防火牆，一定要先將其關閉後，才能啟用 firewalld

```sh
# 檢查 iptables 服務是否正在運行
systemctl status iptables

# 停止正在執行的 iptables 服務
systemctl stop iptables

# 將 iptables 服務永久關閉
systemctl mask iptables
```

- firewalld 在 RHEL/CentOS 7、8，應該是預設就會安裝好的，若您的系統上沒有安裝，可用 yum 安裝

```sh
# 檢查 firewalld 服務狀態
systemctl status firewalld

# 啟動 firewalld 服務
systemctl start firewalld

# 停止 firewalld 服務
systemctl stop firewalld

# 重新啟動 firewalld 服務
systemctl restart firewalld

#重新載入防火牆設定
firewall-cmd --reload
```

## 查詢

- 查詢預設區域

```sh
firewall-cmd --get-default-zone
```

- 查看 `firewalld` 有支援的服務

```sh
firewall-cmd --get-services
```

- 查看目前區域中有開 Port 的服務

```sh
firewall-cmd --list-services
```

- 列出詳細設定

```sh
firewall-cmd  --list-all
```

## 開啟連接埠

- `-zone`：指定區域
- `-add-port`：加入欲開啟的連接埠，並指定通訊協定
- `–remove-port`：移除開啟的連接埠，並指定通訊協定
- `–permanent`：重開系統就會永久生效

```sh
firewall-cmd --zone=public --add-port=6666/tcp --permanent

firewall-cmd --zone=public --remove-port=6666/tcp --permanent

#一次開啟多個
firewall-cmd --zone=public --add-port=6666-6670/tcp
```

- `–add-service`：透過服務名稱開放
- `-remove-service`：透過服務名稱移除

```sh
firewall-cmd --zone=public --add-service=mysql --permanent

firewall-cmd --zone=public --remove-service=mysql --permanent
```

## 連接埠轉發

- `–add-forward-port`：將來自連接埠 A 的資料轉發
- `toport`：轉發至本機其他指定 port

```sh
firewall-cmd --zone=public --add-forward-port=port=22:proto=tcp:toport=2233
```

- `toaddr`：資訊轉發到其他位址的相同連接埠

```sh
firewall-cmd --zone=public --add-forward-port=port=22:proto=tcp:toaddr=192.168.10.1
```

- `-add-masquerade`：連接埠轉發如果是不同主機，就要啟用區域的偽裝功能，將私有網路的地址將隱藏並映射到一個公有 IP
- `–remove-masquerade`：移除偽裝功能

```sh
firewall-cmd --zone=public --add-masquerade
```

## Rich rules

- `–add-rich-rule`：新增
- `–remove-rich-rule`：移除
- IP白名單：允IP存取

```sh
firewall-cmd --zone=public --add-rich-rule 'rule family="ipv4" source address=192.168.10.10 accept'
#執行結果
rule family="ipv4" source address="192.168.10.1" accept
```

- IP黑名單：拒絕IP存取 

```sh
firewall-cmd --zone=public --add-rich-rule 'rule family="ipv4" source address="192.168.10.10" port port=22 protocol=tcp reject'
#執行結果
rule family="ipv4" source address="192.168.10.10" reject
```

- 也可以利用rich rules來設定連接埠轉發，如果轉發至不同主機的話，masquerade要開啟

```sh
firewall-cmd --zone=public --add-rich-rule 'rule family=ipv4 source address=192.168.10.1 forward-port port=80 protocol=tcp to-port=8080'
```