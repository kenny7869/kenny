# Spring Core

## Why Spring

- 用於構建 Java 應用程序非常流行的框架
- 是 J2EE 更簡單和輕量級的替代品
- 提供大量的輔助……讓事情變得更容易

## Java EE 演進

![springO_1_1](./springO/SpringO_1_1.jpg "springO_1_1")

## Java EE & Spring

![springO_2_1](./springO/SpringO_2_1.jpg "springO_2_1")

## Spring 5

- 使用 Java 8 或更高的版本
- 棄用舊版集成：Tiles、Velocity、Portlet、Guava 等
- 升級 Spring MVC 以使用新版本的 Servlet API 4.0
- 添加了新的反應式編程框架：Spring WebFlux

## Spring 框架概述

- 使用 Java POJO (Plain-Old-Java-Objects) 進行輕量級開發
- 依賴注入(Dependency Injection) 將物件的建立、物件的儲存、物件的管理交給了 Spring 容器
- 宣告使用 Aspect-Oriented-Programming (AOP) 面向切面編程
- Core Container（核心容器）：Spring 的其他一切元件都是建立在此基礎之上的，包含有 Beans、Core、SpEL(Spring Expression Language) 和 Context 

    ![springO_3_1](./springO/SpringO_3_1.jpg "springO_3_1")

- Web Layer：Spring MVC的主要模組，包括 Servlet、WebSocket、Web 和 Portlet 模塊

    ![springO_3_2](./springO/SpringO_3_2.jpg "springO_3_2")

- Data Access Layer：Spring的資料訪問模組，提供對JDBC、Hibernate等資料訪問的支援和整合，包括JDBC、ORM、Transactions、OXM、JMS 模塊

    ![springO_3_3](./springO/SpringO_3_3.jpg "springO_3_3")

- Infrastructure：包含 AOP、Aspects、Instrumentation 以及 Messaging 模塊

    ![springO_3_4](./springO/SpringO_3_4.jpg "springO_3_4")

- Test Layer：包含JUint等測試單元的支援

    ![springO_3_5](./springO/SpringO_3_5.jpg "springO_3_5")

## Inversion of Control (IoC)

- 概念圖：

![springO_4_1](./springO/SpringO_4_1.jpg "springO_4_1")

- 主要功能：
    - 創建和管理物件（控制反轉）
    - 依賴注入 (Dependency injection)

- Spring 開發流程
    1. 配置你的 Spring Beans 於 xml 檔

   ![springO_4_2](./springO/SpringO_4_2.jpg "springO_4_2")

   2. 創建一個 Spring 容器
        - Spring 容器一般稱為 ApplicationContext
    
    ![springO_4_3](./springO/SpringO_4_3.jpg "springO_4_3")

    3. 從 Spring 容器中檢索 Beans

    ![springO_4_4](./springO/SpringO_4_4.jpg "springO_4_4")

## What is a Spring Bean

- Spring Bean 只是一個簡單的 Java 物件
- 當 Java 物件由 Spring Container 創建時，Spring 將它們稱為 “Spring Beans”
- 綜上所述，每當看到 Spring Bean 時，就聯想到 Java 物件

### Dependency Injection

- 給予調用方它所需要的事物，「Dependency」是指可被方法調用的事物。「Injection」是指將「Dependency」傳遞給調用方的過程
    示意圖：

    ![springO_5_1](./springO/SpringO_5_1.jpg "springO_5_1")

- Injection Types：Spring 有多種注入方式最常見的兩種為 Constructor Injection、Setter Injection
- Constructor Injection 開發步驟：
    1. 定義 dependency interface 和 class

    ![springO_5_2](./springO/SpringO_5_2.jpg "springO_5_2")

    2. 在 class 中創建一個用於 injections 的構造函數

    ![springO_5_3](./springO/SpringO_5_3.jpg "springO_5_3")

    3. 在 Spring 配置文件中配置 dependency injection

     ![springO_5_4](./springO/SpringO_5_4.jpg "springO_5_4")
   
- Spring 如何處理配置文件

    ![springO_5_5](./springO/SpringO_5_5.jpg "springO_5_5")

- Setter Injection 是透過 Inject dependencies 方式來呼叫 class 的 set 方法，開發步驟如下：
    1. 在 class 中創建 setter 方法進行注入

    ![springO_5_6](./springO/SpringO_5_6.jpg "springO_5_6")

    2. 在 Spring 配置文件中一步步配置 Dependency Injection

     ![springO_5_7](./springO/SpringO_5_7.jpg "springO_5_7")

- Injecting Literal Values 步驟：
    1. 在 class 中創建 setter 方法進行注入

    ![springO_5_8](./springO/SpringO_5_8.jpg "springO_5_8")

    2. 在 Spring 配置文件中配置 setter 注入

    ![springO_5_9](./springO/SpringO_5_9.jpg "springO_5_9")

    3. 以 Properties File 值作為依據

    ![springO_5_10](./springO/SpringO_5_10.jpg "springO_5_10")

### Bean Scopes 

- Default Scope：Singleton
    - Spring Container 預設只創建一個 bean 的 instance
    - 它緩存在記憶體中，之後不再創建
    - 所有對該物件的引用都共享這個 instance

範例：

![springO_6_1](./springO/SpringO_6_1.jpg "springO_6_1")

- 明確指定 Bean 範圍

![springO_6_2](./springO/SpringO_6_2.jpg "springO_6_2")

- 額外的 Spring Bean 範圍

![springO_6_3](./springO/SpringO_6_3.jpg "springO_6_3")

- Prototype Scope ：每次調用或請求這個 bean 都會創建一個新的 instance

![springO_6_4](./springO/SpringO_6_3.jpg "springO_6_4")

### Bean Lifecycle Methods

- Bean Lifecycle

![springO_7_1](./springO/SpringO_7_1.jpg "springO_7_1")

- Bean Lifecycle Methods
    - 可以在 bean 初始化以及銷毀期間添加自定義的 code，像是自訂的邏輯方法或是資源調用(例如：資料庫、檔案、socket)

    初始化範例：

    ![springO_7_2](./springO/SpringO_7_2.jpg "springO_7_2")

    銷毀範例：

    ![springO_7_3](./springO/SpringO_7_3.jpg "springO_7_3")

- 開發步驟：
    1. 定義 init 和 destroy 的方法
    2. 在 Spring 配置文件中配置方法名稱
    
## Annotations Overview

### Java Annotations

- 添加到 Java class 的特殊標籤/標記
- 提供有關 class 的中繼資料(meta-data)
- Annotion (註解) 是一個介面，程式可以通過反射來獲取指定的 Annotion 物件，然後通過 Annotion 物件來獲取註解裡面的中繼資料

- 為什麼 Spring 配置帶有 Annotations？
    - XML 配置可能很冗長
    - 使用 Annotation 配置 Spring bean
    - Annotation 最大限度地減少了 XML 配置

- 掃描 Component Classes
    - Spring 將掃描 Java class 以查找特殊 Annotation
    - 自動註冊 bean 到 Spring container

- 開發步驟：
    1. 在 Spring 配置文件中啟用掃描 Component Classes
    
    ![springO_8_1](./springO/SpringO_8_1.jpg "springO_8_1")

    2. 將 @Component Annotation 添加到 Java class

    ![springO_8_2](./springO/SpringO_8_2.jpg "springO_8_2")

    3. 從 Spring container 中檢索 bean

    ![springO_8_3](./springO/SpringO_8_3.jpg "springO_8_3")

- @Components 預設 Bean ID 名稱為 class 名稱，首字母為小寫

![springO_8_4](./springO/SpringO_8_4.jpg "springO_8_4")

### Dependency Injection with Annotations and Autowiring

- 什麼是 Autowiring？
    - 可以自動連接 dependency injection、Spring
    - Spring 會尋找匹配屬性的 class
    - Spring 會自動 inject

- Autowiring Injection 型態
    - Constructor Injection 開發步驟：
        1. 定義 dependency 的 interface 和 class

        ![springO_9_1](./springO/SpringO_9_1.jpg "springO_9_1")

        2. 在 class 中創建一個 Constructor Injection

        ![springO_9_2](./springO/SpringO_9_2.jpg "springO_9_2")

        3. 使用@Autowired Annotation 配置 Dependency Injection

        ![springO_9_3](./springO/SpringO_9_3.jpg "springO_9_3")

    - Setter Injection 開發步驟
        1. 在 class 中創建 setter 方法進行注入

        ![springO_9_4](./springO/SpringO_9_4.jpg "springO_9_4")

        2. 使用 @Autowired Annotation 配置 Dependency Injection

        ![springO_9_5](./springO/SpringO_9_5.jpg "springO_9_5")

    - Field Injections 開發步驟
        1. 使用 Autowired Annotation 配置 Dependency Injection，不須使用 setter 方法，直接調用變數

        ![springO_9_6](./springO/SpringO_9_6.jpg "springO_9_6")

- Annotation Autowiring and Qualifiers
    - 當有兩個 Bean Instance，此時可加上@Qualifier 來決定要注入哪個 Instance

    ![springO_9_7](./springO/SpringO_9_7.jpg "springO_9_7")

- Bean Scopes with Annotations
    - Singleton Scope Example

    ![springO_9_8](./springO/SpringO_9_8.jpg "springO_9_8")

    - Prototype Scope Example

    ![springO_9_9](./springO/SpringO_9_9.jpg "springO_9_9")

- Bean Lifecycle Methods with Annotations
    - 定義 init 和 destroy 的方法，加入 Annotations @PostConstruct 和 @PreDestroy

    ![springO_9_10](./springO/SpringO_9_10.jpg "springO_9_10")

    ![springO_9_11](./springO/SpringO_9_11.jpg "springO_9_11")

### Spring Configuration with Java Code

- 使用 Spring container 取代 XML
- 使用 Java 代碼配置 Spring container
- 配置 Spring container 的3種方式
    1. 完整的 XML 配置

    ![springO_10_1](./springO/SpringO_10_1.jpg "springO_10_1")

    2. XML Component 掃描

    ![springO_10_2](./springO/SpringO_10_2.jpg "springO_10_2")

    3. Java 配置 class

    ![springO_10_3](./springO/SpringO_10_3.jpg "springO_10_3")

    - 開發步驟
        1. 創建一個Java class 並註解為@Configuration

        ![springO_10_4](./springO/SpringO_10_4.jpg "springO_10_4")

        2. 添加 Component 掃描 @ComponentScan（可選）

        ![springO_10_5](./springO/SpringO_10_5.jpg "springO_10_5")

        3. 讀取 Spring Java 配置 class

        ![springO_10_6](./springO/SpringO_10_6.jpg "springO_10_6")

        4. 從 Spring container 中檢索 bean

        ![springO_10_7](./springO/SpringO_10_7.jpg "springO_10_7")

- Defining Beans with Java Code
    - 開發步驟
        1. 定義 bean 的方法

        ![springO_10_8](./springO/SpringO_10_8.jpg "springO_10_8")

        2. 注入 bean dependencies

        ![springO_10_9](./springO/SpringO_10_9.jpg "springO_10_9")

        3. 讀取 Spring Java 配置 class

        ![springO_10_10](./springO/SpringO_10_10.jpg "springO_10_10")

        4. 從 Spring container 中檢索 bean

        ![springO_10_11](./springO/SpringO_10_11.jpg "springO_10_11")

- Injecting Values from Properties File
    - 開發步驟
        1. 創建 Properties File

        ![springO_10_12](./springO/SpringO_10_12.jpg "springO_10_12")

        2. 在 Spring 配置文件中加載 Properties File

        ![springO_10_13](./springO/SpringO_10_13.jpg "springO_10_13")

        3. 以 Properties File 值作為依據

        ![springO_10_14](./springO/SpringO_10_14.jpg "springO_10_14")


        























    









   


 





