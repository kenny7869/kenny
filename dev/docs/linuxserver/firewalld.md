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

#狀態 (state) 查詢，running 表示正常運行中
firewall-cmd --state
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
## 允許服務連線規則

- `–add-service`：透過服務名稱開放
- `-remove-service`：透過服務名稱移除

```sh
firewall-cmd --zone=public --add-service=http --permanent

firewall-cmd --zone=public --remove-service=http --permanent
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
  
- 允許 (accept) 特定 IP 連線

```sh
firewall-cmd --zone=public --add-rich-rule 'rule family="ipv4" \
source address=192.168.10.10 accept' --permanent
```

- 允許 (accept) 特定 IP **使用特定服務**連線

```sh
firewall-cmd --add-rich-rule 'rule family="ipv4" \
source address="192.168.2.0/24" service name="ssh" accept' \
--permanent
```

- 允許 (accept) 特定 IP **使用特定port**連線

```sh
firewall-cmd --add-rich-rule 'rule family="ipv4" \
source address="192.168.2.0/24" port port="22" accept' \
--permanent
```

- 拒絕 (reject) 或阻擋 (drop) 特定 IP 連線

```sh
firewall-cmd --add-rich-rule 'rule \
family="ipv4" source address="110.88.4.5/32" reject' \
--permanent 
```

- 拒絕 (reject) 或阻擋 (drop) **使用特定服務**連線

```sh
firewall-cmd --add-rich-rule 'rule family="ipv4" \
source address="192.168.2.0/24" service name="ssh" reject' \
--permanent
```

- 拒絕 (reject) 或阻擋 (drop) 特定 IP **使用特定port**連線

```sh
firewall-cmd --add-rich-rule 'rule family="ipv4" \
source address="192.168.2.0/24" port port="22" reject' \
--permanent
```

- 也可以利用rich rules來設定連接埠轉發，如果轉發至不同主機的話，masquerade要開啟

```sh
firewall-cmd --zone=public --add-rich-rule 'rule family=ipv4 source address=192.168.10.1 forward-port port=80 protocol=tcp to-port=8080'
```

- 接受特定 IP any port 都可連入，大部分用來主機弱點掃描，zone 選擇為 trusted

```sh
firewall-cmd --zone=trusted --add-source="192.168.1.1/32" --permanent
```

## 關於zone的說明

| Zone            | Dedfault configuration                   |   
|-----------------|----------------------------------------------------------------------------------------------------------------------------------|
| trusted         | 完全信任的區域，接受所有連線                                                                                                        |  
| public          | 公開區域，預設不信任其他電腦與網路，只有被允許的連線才能進入。通常大部分的連線設定都會放在這裡                                            |  
| external        | 公開區域，適用於 NAT 網路環境                                                                                                       | 
| internal        | 內部網路區域，在此區域中不應該會有惡意的攻擊者。只有被允許的連線可以進入                                                                | 
| dmz             | 非軍事區域（demilitarized zone，有點像是放在外頭的危險區域），允許外部的連線進入，但其對內的連線則有限制，只有被允許的連線才能連進內部網路   |
| work            | 公司內部等工作區域，在此區域中不應該會有惡意的攻擊者。只有被允許的連線可以進入                                                           |   
| home            | 家裡頭的網路區域，在此區域中不應該會有惡意的攻擊者。只有被允許的連線可以進入                                                             | 
| block           | 任何來自於外部的連線都會被阻擋，只允許自己系統主動建立的連線                                                                           | 
| drop            | 任何往內的封包都會被丟棄，只允許往外傳送的封包                                                                                         | 