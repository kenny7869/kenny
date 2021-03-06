# Linux 系統目錄結構與管理

## 目錄結構

登錄系統後，在當前命令窗口下輸入命令：

```sh
ls /
```

你會看到如下圖所示：

![dir-1](./dir/dir-1.png "dir-1")

Linux 的目錄結構為樹狀結構，最頂級的目錄為根目錄`/`

樹狀目錄結構：

![dir-2](./dir/dir-2.jpg "dir-2")

以下是對這些目錄的解釋：

- /bin：bin 是 Binaries (二進製文件) 的縮寫，這個目錄存放著最經常使用的命令
  
- /boot：這裡存放的是啟動 Linux 時使用的一些核心文件，包括一些連接文件以及鏡像文件
  
- /dev：dev 是 Device (設備) 的縮寫，該目錄下存放的是 Linux 的外部設備，在 Linux 中訪問設備的方式和訪問文件的方式是相同的
  
- /etc：etc 是 Etcetera (等等) 的縮寫，這個目錄用來存放所有的系統管理所需要的配置文件和子目錄
  
- /home：用戶的主目錄，在 Linux 中，每個用戶都有一個自己的目錄，一般該目錄名是以用戶的賬號命名的，如上圖中的 alice、bob 和 eve
  
- /lib：lib 是 Library 的縮寫這個目錄裡存放著系統最基本的動態連接共享庫，其作用類似於 Windows 裡的 DLL 文件，幾乎所有的應用程序都需要用到這些共享庫
  
- /lost+found：這個目錄一般情況下是空的，當系統非法關機後，這裡就存放了一些文件
  
- /media：Linux 系統會自動識別一些設備，例如USB、光碟機等等，當識別後，Linux 會把識別的設備掛載到這個目錄下
  
- /mnt：系統提供該目錄是為了讓用戶臨時掛載別的文件系統的，我們可以將硬碟掛載在`/mnt/`上，然後進入該目錄就可以查看硬碟裡的內容了
  
- /opt：opt 是 optional (可選) 的縮寫，這是給主機額外安裝軟件所擺放的目錄。比如你安裝 Tomcat 就可以放到這個目錄下，預設是空的
  
- /proc：proc 是 Processes (程序) 的縮寫，`/proc` 是一種虛擬文件系統，存儲的是當前 Kernel 運行狀態的一系列特殊文件，這個目錄是一個虛擬的目錄，它是系統記憶體的映射，我們可以通過直接訪問這個目錄來獲取系統信息，這個目錄的內容不在硬碟上而是在記憶體裡，我們也可以直接修改裡面的某些文件，比如可以通過下面的命令來阻隔主機的 ping 命令，使別人無法 ping 你的主機：

```sh
echo 1 > /proc/ sys / net / ipv4 / icmp_echo_ignore_all  
```

- /root：該目錄為系統管理員，也稱作超級權限的用戶主目錄
  
- /sbin：s 就是 Super User 的意思，是 Superuser Binaries (超級用戶的二進製文件) 的縮寫，這裡存放的是系統管理員使用的系統管理程序
  
- /selinux：這個目錄是 Redhat/CentOS 所特有的目錄，Selinux 是一個安全機制，這個目錄就是存放 selinux 相關的文件的
  
- /srv： 該目錄存放一些服務啟動之後需要提取的數據
  
- /sys：這是 Linux2.6 Kernel 的一個很大的變化。該目錄下安裝了 2.6 Kernel 中新出現的一個文件系統 sysfs，該文件系統集成了下面 3 種文件系統的信息：針對程序資訊的 proc 文件系統、針對設備的 devfs 文件系統以及針對虛擬終端的 devpts 文件系統，該文件系統是 Kernel 設備樹的一個直接反饋。當一個 Kernel 對像被創建的時候，對應的文件和目錄也在 Kernel 對象子系統中被創建
  
- /tmp：tmp 是 temporary (臨時) 的縮寫這個目錄是用來存放一些臨時文件的
  
- /usr：usr 是 unix shared resources (共享資源) 的縮寫，這是一個非常重要的目錄，用戶的很多應用程式和文件都放在這個目錄下，類似於 windows下的 program files 目錄
  
- /usr/bin：系統用戶使用的應用程式

- /usr/sbin：超級用戶使用的比較高級的管理程式和系統守護程式

- /usr/src：Kernel 源代碼預設的放置目錄

- /var：var 是 variable (變量) 的縮寫，這個目錄中存放著在不斷擴充著的東西，我們習慣將那些經常被修改的目錄放在這個目錄下，包括各種 log (日誌) 文件

- /run：是一個臨時文件系統，存儲系統啟動以來的資訊。當系統重啟時，這個目錄下的文件應該被刪掉或清除。如果你的系統上有`/var/run`目錄，應該讓它指向run

在 Linux 系統中，有幾個目錄是比較重要的，平時需要注意不要誤刪除或者隨意更改內部文件

`/etc`：上邊也提到了，這個是系統中的配置文件，如果你更改了該目錄下的某個文件可能會導致系統不能啟動

`/bin` `/sbin` `/usr/bin` `/usr/sbin`：這是系統預設的執行文件的放置目錄，比如 ls 就是在`/bin/ls`目錄下的

`bin` `/usr/bin` 是給系統用戶使用的指令（除 root 外的用戶），而`/sbin` `/usr/sbin` 則是給 root 使用的指令

`/var`：這是一個非常重要的目錄，系統上跑了很多程式，那麼每個程式都會有相應的日誌產生，而這些日誌就被記錄到這個目錄下，具體在`/var/log`目錄下，另外 mail 的預設放置也是在這裡

## 目錄管理

- **絕對路徑**：路徑的寫法，由根目錄`/`寫起，例如：`/usr/share/doc`這個目錄
- **相對路徑**：路徑的寫法，不是由`/`寫起，例如由`/usr/share/doc`要到`/usr/share/man`底下時，可以寫成：`cd ../man`這就是相對路徑的寫法。

### 處理目錄的常用命令

**ls（list files）**: 列出目錄及文件名

在 Linux 系統當中， ls 命令可能是最常被運行的
選項與參數：
  - `-a`：全部的文件，連同隱藏文件( 開頭為. 的文件) 一起列出來
  - `-d`：僅列出目錄本身，而不是列出目錄內的文件數據
  - `-l`：長數據串列出，包含文件的屬性與權限等等數據
  - `-r`：將文件以相反次序顯示(原定依英文字母次序)
  - `-t`：將文件依建立時間之先後次序列出
  - `-F`：在列出的文件名稱後加上符號；例如可執行檔則加"*"，目錄則加"/"

**cd (Change Directory)**：用來變換工作目錄的命令

**pwd (Print Working Directory)**：顯示目前所在目錄的命令
選項與參數：
- `-P`：顯示出確實的路徑，而非使用連結 (link) 路徑

**mkdir (make directory)**：創建新的目錄的命令
選項與參數：
- `-m`：配置文件的權限，直接配置，不需要看默認權限(umask)
- `-p`：幫助你直接將所需要的目錄(包含上一級目錄)遞迴創建

**rmdir (remove directory)**：刪除空的目錄的命令
選項與參數：
- `-p`：連同上一級『空的』目錄也一起刪除
  
**cp (copy)**：複製文件或目錄

選項與參數：
- `-a`：相當於 -pdr 的意思，至於pdr請參考下列說明
- `-d`：若來源檔為連結檔的屬性 (link file)，則復制連結檔屬性而非文件本身
- `-f`：為強制 (force) 的意思，若目標文件已經存在且無法開啟，則移除後再嘗試一次
- `-i`：若目標檔 (destination) 已經存在時，在覆蓋時會先詢問動作的進行
- `-l`：進行硬式連結 (hard link) 的連結檔創建，而非複製文件本身
- `-p`：連同文件的屬性一起復製過去，而非使用默認屬性(備份常用)
- `-r`：遞歸持續複製，用於目錄的複制行為
- `-s`：複製成為符號連結檔 (symbolic link)，亦即『捷徑』文件
- `-u`：若 destination 比 source 舊才升級 destination

**rm (remove)**：移除文件或目錄

選項與參數：
- `-f`：就是 force 的意思，忽略不存在的文件，不會出現警告信息
- `-i`：互動模式，在刪除前會詢問使用者是否動作
- `-r`：遞迴刪除，最常用在目錄的刪除，這是非常危險的選項！！！

**mv (move)**：移動文件與目錄，或修改名稱的命令

選項與參數：
- `-f`：force 強制的意思，如果目標文件已經存在，不會詢問而直接覆蓋
- `-i`：若目標文件 (destination) 已經存在時，就會詢問是否覆蓋
- `-u`：若目標文件已經存在，且 source 比較新，才會升級 (update)

### 文件內容查看命令

**cat**：由第一行開始顯示文件內容

選項與參數：
- `-A`：相當於 -vET 的整合選項，可列出一些特殊字符而不是空白而已
- `-b`：列出行號，僅針對非空白行做行號顯示，空白行不標行號
- `-E`：將結尾的斷行字節 $ 顯示出來
- `-n`：列印出行號，連同空白行也會有行號，與 `-b` 的選項不同
- `-T`：將 [tab] 按鍵以 `^I` 顯示出來
- `-v`：列出一些看不出來的特殊字符

**tac**：`tac` 與 `cat` 命令剛好相反，文件內容從最後一行開始顯示，可以看出 `tac` 是 `cat` 的倒寫

**nl**：顯示行號

選項與參數：
- `-b`：指定行號指定的方式，主要有兩種：
1. `-ba`：表示不論是否為空行，也同樣列出行號(類似 cat -n)
2. `-bt`：如果有空行，空的那一行不要列出行號(默認值)
- `-n`：列出行號表示的方法，主要有三種：
1. `-n ln`：行號在熒幕的最左方顯示
2. `-n rn`：行號在自己欄位的最右方顯示，且不加 0 
3. `-n rz`：行號在自己欄位的最右方顯示，且加 0 
4. `-w`：行號欄位的佔用的位數

**more**：一頁一頁翻動

在 more 運行過程中，你有幾個按鍵可以按的：

- 空白鍵(space)：代表向下翻一頁
- Enter：代表向下翻『一行』
- /字串：代表在這個顯示的內容當中，向下搜尋『字串』這個關鍵字
- :f：立刻顯示出檔名以及目前顯示的行數
- q：代表立刻離開 `more` ，不再顯示該文件內容
- b 或 `[ctrl]-b` ：代表往回翻頁，不過這動作只對文件有用，對管線無用

**less**：一頁一頁翻動

less運行時可以輸入的命令有：
- 空白鍵 ：向下翻動一頁
- [pagedown]：向下翻動一頁
- [pageup]：向上翻動一頁
- /字串：向下搜尋『字串』的功能
- ?字串：向上搜尋『字串』的功能
- n：重複前一個搜尋(與/ 或? 有關！)
- N：反向的重複前一個搜尋(與/ 或? 有關！)
- q：離開less 這個程序

**head**：取出文件前面幾行，預設的情況中，顯示前面 10 行

選項與參數：
- `-n`：後面接數字，代表顯示幾行的意思

**tail**：取出文件後面幾行

選項與參數：
- `-n`：後面接數字，代表顯示幾行的意思
- `-f`：表示持續偵測後面所接的檔名，要等到按下 `[ctrl]-c` 才會結束tail的偵測