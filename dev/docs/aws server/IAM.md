# Introduction to IAM

## 應用場景

AWS root account 權限非常大，為了避免被盜取的風險，因此透過 Identity and Access Management (IAM) 服務把 root 權限切割成多個用戶與群組權限

## 核心名詞

- Permission：多筆政策 (Policy) 組合而成，用來管理 Policy
- Policy：一個規定好格式的 JSON 檔，用來管理 AWS 的存取權限，可區分以身分(Identity)為基礎的政策和以資源(Resource)為基礎的政策
**以身分(Identity)為基礎的政策** – 將受管和內嵌政策連接到 IAM 身分，例如使用者與使用者所屬的群組和角色。
**以資源(Resource)為基礎的政策** – 將內嵌政策連接到資源。以資源為基礎的政策的最常見範例是 Amazon S3 儲存貯體政策和 IAM 角色信任政策。
![IAM-1](./IAM/IAM-1.jpg "IAM-1")

    Policy JSON 語法包含：Effect、Principal、Condition、Action、Resource
![IAM-2](./IAM/IAM-2.jpg "IAM-2")

    1. Effect：允許或拒絕存取，預設為拒絕存取
    2. Principal：受政策約束的單位，ex：IAM USER、S3 Bucket
    3. Condition：必須具備那些條件政策才能生效
    4. Action：允許 AWS 服務的動作
    5. Resource：允許對其動作的 AWS 資源

- IAM Group：IAM 使用者 (User) 的集合，群組可以指定多個使用者的許可 (permission)，輕鬆的管理這些使用者，但無法自動包含多個使用者
![IAM-3](./IAM/IAM-3.jpg "IAM-3")

- IAM User：root account 之下建立的使用者，每個使用者都有密碼可以登入 console，也可以為每個使用者建立存取憑證 (Credential)
- IAM Role：具有特定權限的一種身分，目的是用來委派 AWS 的服務與資源的存取，因此可以將存取權設定在 Role 上，提供服務與服務之間的溝通橋樑
- Credential：當程式語言或命令列工具( AWS API、AWS CLI 等) 在跟 AWS 服務做資源調度時，用此來做憑證判斷

## IAM 帳號管理歸納圖

![IAM-4](./IAM/IAM-4.jpg "IAM-4")

## Role 的應用情境圖

1. 其他 AWS 帳號、社群帳號、本地帳號串接 AWS
![IAM-5](./IAM/IAM-5.jpg "IAM-5")

2. AWS 服務資源相互調用
![IAM-6](./IAM/IAM-6.jpg "IAM-6")

## 小結
IAM 是 AWS 服務最重要的一環，業界經常依照專案開發角度區分為設置、開發、生產三個階段
- 設置：透過 Group、User、Policy 建置一個安全的開發環境
- 開發：依照開發現實需求，撰寫多個 Policy，並進行監控
- 生產：把所需應用部屬到 AWS 的服務上，服務與服務之間有調用之需求，便使用到 Role 的機制，建立 Role 來協助應用

## IAM LAB 實作

### IAM LAB 實作流程圖
![IAM-7](./IAM/IAM-7.jpg "IAM-7")

### IAM LAB步驟

1. 登入 Root Account
![IAM-8](./IAM/IAM-8.jpg "IAM-8")

2. 進入主控台，搜尋 IAM
![IAM-9](./IAM/IAM-9.jpg "IAM-9")

3. 更改 IAM USER 登入 URL 的別名
![IAM-10](./IAM/IAM-10.jpg "IAM-10")
![IAM-11](./IAM/IAM-11.jpg "IAM-11")

4. 創建 IAM USER 給專案各部門使用
![IAM-12](./IAM/IAM-12.jpg "IAM-12")
![IAM-13](./IAM/IAM-13.jpg "IAM-13")
![IAM-14](./IAM/IAM-14.jpg "IAM-14")
![IAM-15](./IAM/IAM-15.jpg "IAM-15")
![IAM-16](./IAM/IAM-16.jpg "IAM-16")
![IAM-17](./IAM/IAM-17.jpg "IAM-17")

5. 創建 IAM Group，部署政策至群組，將使用者加入
![IAM-18](./IAM/IAM-18.jpg "IAM-18")
![IAM-19](./IAM/IAM-19.jpg "IAM-19")
![IAM-20](./IAM/IAM-20.jpg "IAM-20")
![IAM-21](./IAM/IAM-21.jpg "IAM-21")
![IAM-22](./IAM/IAM-22.jpg "IAM-22")

6. 創建 Role，提供 AWS 服務與服務之間資源的調用或是外部帳號的連接
![IAM-23](./IAM/IAM-23.jpg "IAM-23")
![IAM-24](./IAM/IAM-24.jpg "IAM-24")
![IAM-25](./IAM/IAM-25.jpg "IAM-25")
![IAM-26](./IAM/IAM-26.jpg "IAM-26")
![IAM-27](./IAM/IAM-27.jpg "IAM-27")
![IAM-28](./IAM/IAM-28.jpg "IAM-28")



