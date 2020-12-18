# Route Table

## route 指令說明

**route [-A family] add [-host|-net] target [netmask] [gw] [dev if]**

- add：新增路由
- del：刪除路由
- host：表示目標是主機
- net：表示目標是網路區段
- target：目的地的網路或主機，可用host/network表示(ex: 192.168.10.10/32)
- netmask：子網路遮罩
- gw：透過gateway來路由封包。要特別注意必須要先能連到gateway
- dev if：例如 dev eth0，若dev參數放在最後可以省略
- metric：hop的數量，愈多hop表示通過的節點愈多

## EXAMPLE

1. 新增一個靜態路由，該路由透過eth0傳送
**EX：route add -net 192.168.10.0/24 gw 192.168.1.254 dev eth0**

2. 新增預設閘道
**EX：route add default gw 192.168.1.254**

3. 新增靜態主機路由
**EX：route add 192.168.20.10/32 gw 192.168.1.254 dev eth0**

4. 查看路由表
**route -n**

## 永久路由設定

- route指令不支援永久路由，重開機後之前的設定就洗掉了，要建立永久路由有以下幾種方式

1. 設定在/etc/sysconfig/network-scripts/route-xxx  註：xxx為網卡編號
- 此檔案的語法如下

```sh
ADDRESSn=
NETMASKn=
GATEWAYn=
```
**註1：n建議由0開始慢慢加上去**
**註2：若沒有GATEWAY參數就不需要寫**
**註3：若有GATEWAY參數那GATEWAY要能連的到，否則GATEWAY設定不會生效**
**註4：若有好幾組靜態路由，就一直寫下去，記得n的號碼要加1**

2. 設定在/etc/rc.local (此方法已逐漸棄用)：直接把要新增的route指令貼在裡面即可

- DNS 修改 `/etc/resolv.conf`

```sh
vim /etc/resolv.conf

nameserver 8.8.8.8
nameserver 8.8.4.4
```


