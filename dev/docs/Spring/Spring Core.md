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

## Dependency Injection

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

## Bean Scopes 

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

## Bean Lifecycle Methods

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
    







   


 





