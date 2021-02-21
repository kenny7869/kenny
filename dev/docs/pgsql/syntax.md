# SQL 語法

## SQL 語法種類

- 資料定義語言 ( Data Definition Language, DDL )：用以建立、修改或移除資料庫或其他資料庫物件的語法，以 **CREATE**、 **ALTER**、 **DROP** 語法為主
- 資料處理語法 (Data Manipulation Language, DML)：用以處理理表格內資料的語法，以 **INSERT** 、**UPDATE**、**DELETE**、**SELECT** 語法為主
- 資料控制語⾔言 (Data Control Language, DCL)：對使⽤者設定資料庫或其他資料庫物件使用權限的語法，以**GRANT**、**REVOKE** 語法為主

預設情況下 PostgreSQL 安裝完成後，自帶了一個命令行工具 SQL Shell (psql)
Linux 系統可以直接切換到 postgres 使用這來開啟命令行工具：

```sh
sudo -i -u postgres
```

進入命令行工具，我們可以使用\help來查看各個命令的語法：

```SQL
postgres-# \help <command_name>
```

## 語法結構

SQL 語法包含一連串的命令，命令是由一系列的**指示記號所組合**而成，以**分號結尾**
一個 SQL 語句通常包含了關鍵字、識別項（字段）、文字、特殊符號
實例：

```SQL
SELECT * FROM MY_TABLE;
UPDATE MY_TABLE SET A = 5;
INSERT INTO MY_TABLE VALUES (3, 'hi there');
```

- 關鍵字 （Keyword）：意即在 SQL 語言中，其具有固定的意義
- 識別項（Identifier）：用於識別表格的名稱，欄位名稱，或是其他的資料庫物件

關鍵字和無引號識別項都是不分大小寫：

```SQL
UPDATE MY_TABLE SET A = 5;
```

等同於

```SQL
uPDaTE my_TabLE SeT a = 5;
```

常見寫法，就是把關鍵字用大寫表示，而識別項名稱使用小寫

```SQL
UPDATE my_table SET a = 5;
```

引號識別項（限制的識別項），可以包含任何字元，除了字元碼為 0 的字元以外

```SQL
UPDATE "my_table" SET "a" = 5;
```

以上例子 "my_table" 就會被識別為名稱為「my_table」的表格或欄位，而無引號的 my_table 就會被視為是關鍵字

- 字串常數：指的是用單引號括住的任意字元串列

```SQL
SELECT 'foobar';
```

等同於

```SQL
SELECT 'foo'
'bar';
```

兩個字串常數如果只用空白及至少一個換行符號所分隔的話，那個它們會被連在一起，和寫成一個字串是一樣的
但如果是以下這樣語法上就不正確了

```SQL
SELECT 'foo'      'bar';
```

## 特殊字元

- 錢字號 `$` 其後接著數字的話，用來表示函數宣告或預備指令的參數編號。其他的用法還有識別項的一部份，或是錢字引號常數
- 小括號 `( )` 一般用來強調表示式並且優先運算。還有某些情況用於表示某些 SQL 指令的部份的必要性
- 中括號 `[ ]` 用於組成陣列的各個元素
- 逗號 `,` 用於一般語法上的結構需要，來分隔列表中的單元
- 分號 `;` 表示 SQL 指令的結束。它不能出現在指令中的其他位置，除非是在字串常數當中，或是引號識別項
- 冒號 `:` 用在取得陣列的小項
- 米字號 `*` 用來表示表格中所有的欄位，或複合性的內容。它也可以用於函數宣告時，不限制固定數量的參數
- 頓號 `.` 用在數值常數之中，也用於區分結構、表格、及欄位名稱