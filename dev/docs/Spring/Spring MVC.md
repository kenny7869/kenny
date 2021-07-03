# Spring MVC

## SPRING MVC OVERVIEW

- What is Spring MVC？
    - 用 Java 構建的 Web 應用的框架
    - 基於 Model-View-Controller 設計模式
    - 利用核心 Spring 框架（IoC、DI）的特性來建構

- Model-View-Controller (MVC)

![MVC1_1](./MVC/MVC1_1.jpg "MVC1_1")

- Spring MVC 的好處
    - 採用 Spring 方式在 Java 中構建 web app UI 的應用
    - 利用一組可重複使用的 UI 組件
    - 幫助管理 Web 請求的應用狀態
    - 處理表單數據：驗證、轉換等
    - view layer 的靈活配置

### Spring MVC Behind the Scenes

- Spring MVC 應用程序的組件
    - 一組用於佈局 UI 組件的網頁
    - Spring bean（controllers, services等）的集合
    - Spring 配置（XML、Annotations 或 Java）

- Spring MVC Front Controller
    - 開發人員只要專注 Model objects、View templates 以及 Controller classes 的開發
    - 前端控制器稱為 DispatcherServlet，屬於 Spring 框架的一部分，已經由 Spring Dev Team 開發

- Model
    - 包含著資料，通過後端系統存儲/檢索資料，像是 database, web service 等，當然可以使用 Spring bean
    - 將 Java object/collection 放入 model

- Controller
    - 開發者創建的 Code
    - 包含整個專案的邏輯，例如：如何處理請求、如何存儲/檢索資料(db, web service…)、如何將資料放入 model
    - 將資料傳入適當的 view template

- View Template
    - Spring MVC 是靈活的，支援多種 View Template
    - 最常見的是 JSP+JSTL
    - 開發人員創建一個頁面展示資料

### Spring MVC Configuration

- 開發步驟：
    - 將配置添加 WEB-INF/web.xml
        1. 配置 Spring MVC Dispatcher Servlet

        ![MVC2_1](./MVC/MVC2_1.jpg "MVC2_1")

        2. 設置 URL mappings 到 Spring MVC Dispatcher Servlet

        ![MVC2_2](./MVC/MVC2_2.jpg "MVC2_2")

    - 在文件中配置 WEB-INF/spring-mvc-demo-servlet.xml
        1. 添加 Spring component scanning

        ![MVC2_3](./MVC/MVC2_3.jpg "MVC2_3")

        2. 添加 conversion, formatting and validation

        ![MVC2_4](./MVC/MVC2_4.jpg "MVC2_4")

        3. 配置 Spring MVC View Resolver

        ![MVC2_5](./MVC/MVC2_5.jpg "MVC2_5")

    - View Resolver Configs
        - 當應用提供 view 名稱時，Spring MVC 會加上 prefix  以及 suffix


## Developing Spring Controllers and Views

- 開發步驟：
    1. 創建 Controller class
        - 添加 @Controller 註記

        ![MVC3_1](./MVC/MVC3_1.jpg "MVC3_1")

    2. 定義 Controller 方法

        ![MVC3_2](./MVC/MVC3_2.jpg "MVC3_2")

    3. 添加 Request Mapping 到 Controller 方法

        ![MVC3_3](./MVC/MVC3_3.jpg "MVC3_3")

    4. 回到 View Name

        ![MVC3_4](./MVC/MVC3_4.jpg "MVC3_4")

    5. 開發 View Page

        ![MVC3_5](./MVC/MVC3_5.jpg "MVC3_5")

### Reading Form Data with Spring MVC

- 使用者角度

    ![MVC3_6](./MVC/MVC3_6.jpg "MVC3_6")

- 開發步驟：
    1. 創建 Controller class

        ![MVC3_7](./MVC/MVC3_7.jpg "MVC3_7")

    2. 顯示 HTML 表單
        - 創建 Controller method 以顯示 HTML 表單
        - 為 HTML 表單創建 View Page

        ![MVC3_8](./MVC/MVC3_8.jpg "MVC3_8")

    3. 處理 HTML 表單
        - 創建 Controller method 以處理 HTML 表單
        - 開發確認的 View Page

        ![MVC3_9](./MVC/MVC3_9.jpg "MVC3_9")

### Adding Data to Spring Model

- Spring Model
    - Model 是應用程式資料的容器
    - 在 Controller 中，可以在 Model 中放入任何東西，strings, objects, info from database 等
    - View page (JSP) 可以訪問 Model 中的資料

- 將 Model 傳遞給 Controller 

    ![MVC3_10](./MVC/MVC3_10.jpg "MVC3_10")

- 向 Model 添加更多資料

    ![MVC3_11](./MVC/MVC3_11.jpg "MVC3_11")

## Request Params and Request Mappings

### Binding Request Params

- 使用 @RequestParam Annotation 綁定變量步驟

    1. 創建新方法處理表單資料
    2. 讀取表單資料
    3. 將名稱傳送到 UpperCase
    4. 將 UpperCase 添加到 model 中

    ![MVC4_1](./MVC/MVC4_1.jpg "MVC4_1")

### Controller Level Request Mapping

- 添加 Request Mappings 到 Controller 
    - 作為 Controller  的 parent mapping
    - Controller  方法中的所有 Request Mappings 都是相對應的
    - 類似於文件目錄結構

    ![MVC4_2](./MVC/MVC4_2.jpg "MVC4_2")

## Form Tags and Data Binding

### Spring MVC Form Tags

- Spring MVC Form Tags (表單標籤)

    - Spring MVC 表單標籤是網頁的建構區塊
    - 表單標籤可配置並可重用於網頁
    - 標籤生成 HTML

    ![MVC5_1](./MVC/MVC5_1.jpg "MVC5_1")

- Data Binding (資料綁定)

    - Spring MVC Form Tags 可以使用資料綁定
    - 自動從 Java 物件或bean 來設置或檢索資料

- 帶有特殊 Spring MVC 表單標籤的 JSP 頁面範例

    ![MVC5_2](./MVC/MVC5_2.jpg "MVC5_2")

- 使用 Spring MVC 表單標籤，必須在 JSP 文件的開頭指定 Spring Namespace 如下：

    ```
    <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
    ```

### Text Field

- 顯示表單開發步驟

    1. 創建一個 Java class 作為 model 並添加 setter 和 getter 方法

    ![MVC5_3](./MVC/MVC5_3.jpg "MVC5_3")

    2. 再創建一個 Controller class，必須在 Controller 中添加一個 model attribute

    ![MVC5_4](./MVC/MVC5_4.jpg "MVC5_4")

    3. 創建一個 HTML 表單，這是一個 bean，將保存資料綁定的表單資料

    ![MVC5_5](./MVC/MVC5_5.jpg "MVC5_5")

    4. 在 Controller 中添加處理表單的方法

    ![MVC5_6](./MVC/MVC5_6.jpg "MVC5_6")

    ![MVC5_7](./MVC/MVC5_7.jpg "MVC5_7")

    ![MVC5_8](./MVC/MVC5_8.jpg "MVC5_8")

    5. 創建一個顯示頁面

    ![MVC5_9](./MVC/MVC5_9.jpg "MVC5_9")

### Drop Down List

- 開發步驟：

    1. 在 HTML 頁面添加 <form:select> 標籤

    ![MVC5_10](./MVC/MVC5_10.jpg "MVC5_10")

    2. 在 model 中添加 setter 和 getter 方法

    3. 創建顯示頁面

### Radio Buttons

- 開發步驟：

    1. 在 HTML 頁面添加 <form:radiobutton> 標籤

    ![MVC5_11](./MVC/MVC5_11.jpg "MVC5_11")

    2. 在 model 中添加 setter 和 getter 方法

    3. 創建顯示頁面

### Check Box

- 開發步驟：

    1. 在 HTML 頁面添加 <form:checkbox> 標籤

    ![MVC5_12](./MVC/MVC5_12.jpg "MVC5_12")

    2. 在 model 中添加 setter 和 getter 方法

    3. 創建顯示頁面

### Form Validation

- Java 標準的 Bean 驗證 API
    - 定義中繼資料模型和 API 用於實體驗證
    - 不綁定到 Web 層或持久層 (persistence tier)
    - 適用於服務器端應用程式和客戶端 JavaFX/Swing 應用程式

- Spring 與驗證
    - Spring 4 及更高版本支援 Bean Validation API
    - 構建 Spring 應用程式時的首選驗證方法
    - 只需將驗證 JAR 添加到專案當中

- Bean 包含的驗證功能

    ![MVC5_13](./MVC/MVC5_13.jpg "MVC5_13")

- 驗證的 Annotations

    ![MVC5_14](./MVC/MVC5_14.jpg "MVC5_14")

- 設置開發環境
    1. 從 Hibernate Validator 下載  JAR 文件

        - 如果使用的是 Spring 5 ... ，使用 Hibernate Validator 6.x
        - 如果使用 Jakarta EE 9 ...，使用 Hibernate Validator 7.x

    2. 將 JAR 文件添加到專案

    3. 必填欄位開發步驟

        1. 在 model Java class 中添加驗證規則

            ![MVC5_15](./MVC/MVC5_15.jpg "MVC5_15")

        2. 在 HTML 表單上顯示錯誤消息

            ![MVC5_16](./MVC/MVC5_16.jpg "MVC5_16")

        3. 在 Controller class 中執行驗證

            ![MVC5_17](./MVC/MVC5_17.jpg "MVC5_17")

        4. 更新確認頁面

            ![MVC5_18](./MVC/MVC5_18.jpg "MVC5_18")
        
### InitBinder

- 在必填欄位當中，有可能輸入空白即可通過驗證，因此必須在輸入的字串中排除掉
- @InitBinder 可以做為一個 pre-processor，它將對 controller 中的每個 Web 請求進行預先處理，並利用它來排除字串空白驗證

     ![MVC5_19](./MVC/MVC5_19.jpg "MVC5_19")

### Validating a Number Range

- 利用 @Min 和 @Max 來設定數字的最大、最小值

    ![MVC5_20](./MVC/MVC5_20.jpg "MVC5_20")

### Applying Regular Expressions

- 正規表示式 (Regular Expressions)
    - 定義搜索模式的字串序列，通常用於查找或匹配字符
    - 利用 @Pattern 來做

    ![MVC5_21](./MVC/MVC5_21.jpg "MVC5_21")

### Custom Validation

- 根據需求規則執行自定義驗證，讓 Spring MVC 調用自定義驗證，自定義驗證傳回布林值驗證通過或失敗

- 開發步驟：
    1. 創建自定義驗證規則
        - 添加一個自定義的 Java Annotation

        ![MVC5_22](./MVC/MVC5_22.jpg "MVC5_22")

        ![MVC5_23](./MVC/MVC5_23.jpg "MVC5_23")

        ![MVC5_24](./MVC/MVC5_24.jpg "MVC5_24")

        - 創建一個 class 定義 Annotation 的邏輯方法

        ![MVC5_25](./MVC/MVC5_25.jpg "MVC5_25")

    2. 添加到 model class

    3. 在 HTML 表單上顯示錯誤消息
    
    4. 更新確認頁面

