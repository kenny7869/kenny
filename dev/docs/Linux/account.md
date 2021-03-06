# Linux 用戶和群組管理

Linux 系統是一個多用戶多任務的分時操作系統，任何一個要使用系統資源的用戶，都必須首先向系統管理員申請一個帳號，然後以這個帳號的身份進入系統

## 系統用戶帳號的管理

用戶帳號的管理工作主要涉及到用戶帳號的添加、修改和刪除

### 新增帳戶 useradd 命令

語法：

```sh
useradd [-mMnr][-c <備註>][-d <登入目錄>][-e <有效期限>][-f <緩衝天數>][-g <群组>][-G <群组>][-s <shell>][-u <uid>][用戶帳號]
```

或是

```sh
useradd -D [-b][-e <有效期限>][-f <緩衝天數>][-g <群组>][-G <群组>][-s <shell>]
```

參數說明：

- `-c`：加上帳號的註解說明文字

```sh
useradd -c "Kenny Haung" gtwang
```

- `-d`：指定家目錄的路徑，如果此目錄不存在，則同時使用`-m`選項，可以創建主目錄

```sh
useradd -d /opt/kenny kenny
```

- `-D`：變更預設值
- `-e`：指定帳號的有效期限

```sh
useradd -e 2021-02-14 kenny
```

- `-f`：指定在密碼過期後多少天即關閉該帳號

```sh
useradd -f 7 kenny
```

- `-g`：指定群組的名稱或群組 ID (該群組必須事先建立好)

```sh
useradd -g team kenny
```

- `-G`：指定用戶所屬的附加群組

```sh
useradd -g team -G admin gtwang
```

- `-m`：自動建立用戶的家目錄
- `-M`：新增用戶時不要自動建立家目錄

```sh
useradd -M kenny
```

- `-n`：取消建立以用戶名稱為名的群組
- `-s`：指定 shell 的路徑

```sh
useradd -s /sbin/nologin kenny
```

- `-u`：自行指定使用者的 ID

```sh
useradd -u 1500 kenny
```

- 查詢帳號的使用期限，可以使用 chage 指令 

```sh
chage -l username
```

### 刪除帳號 userdel 命令

語法：

```sh
userdel [-r][用戶帳號]
```

參數說明：

- `-r`：刪除用戶登入目錄以及目錄中所有文件

### 修改帳號 usermod 命令

語法：

```sh
usermod [-LU][-c <備註>][-d <登入目錄>][-e <有效期限>][-f <緩沖天數>][-g <群組>][-G <群組>][-l <帳號名稱>][-s <shell>][-u <uid>][用戶帳號]
```

參數說明：

- `-c`：加上帳號的註解說明文字
- `-d`：修改用戶登入時的目錄
- `-e`：修改帳號的有效期限
- `-f`：修改在密碼過期後多少天即關閉該帳號
- `-g`：修改用戶所屬的群組
- `-G`：修改用戶所屬的附加群組
- `-l`：修改用戶帳號名稱
- `-L`：鎖定用戶密碼，使密碼無效
- `-s`：修改用戶登入後所使用的 shell
- `-u`：修改用戶 ID
- `-U`：解除密碼鎖定

### 用戶密碼的管理 passwd 命令

語法：

```sh
passwd [-d] [-e] [-f] [-l] [-n] [-x] [username]
```

參數選項：

- `-d`：刪除密碼
- `-e`：設定密碼為過期狀態
- `-f`：強迫用戶下次登錄時必須修改密碼
- `-i`：設定密碼過期後可使用的期間
- `-l`：鎖定使用者的密碼
- `-n`：設定密碼的最短變更間隔時間
- `-S`：顯示密碼訊息
- `-u`：解鎖被停止的帳戶
- `-w`：密碼要到期提前警告的天數
- `-x`：設定密碼的有效期限

## 用戶群組的管理

用戶群組的管理涉及用戶群組的添加、刪除和修改。群組的增加、刪除和修改實際上就是對 `/etc/group` 文件的更新

### 增加新群組 groupadd 命令

語法：

```sh
groupadd [-g gid [-o]] [-r] [-f] group
```

參數說明：

- `-g`：指定新建工作群組的 id
- `-K`：覆蓋配置文件 `/ect/login.defs`
- `-o`：一般與 `-g` 選項同時使用，表示新用戶群組的 GID 可以與系統已有用戶群組的 GID 相同

### 刪除一個已有的群組 groupdel 命令

語法：

```sh
groupdel [群组名稱]
```

### 修改群組的屬性 groupmod 命令

語法：

```sh
groupmod [-g <群組ID> <-o>][-n <新群組名稱>][群組名稱]
```

參數說明：

- `-g`：設置欲使用的群組 ID
- `-n`：設置欲使用的群組名稱
- `-o`：重複使用群組識別碼