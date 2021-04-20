# 控制流程語法

## for 迴圈

for 迴圈可以不斷重複某項動作直到某個條件成立時，動作才會停止，所以在 for 迴圈會有幾個重要參數

1. 宣告變數，並設定初始值
2. for 迴圈的結束條件
3. 調整變數的值

語法：

```java
for ( 初始運算設定; 比較運算設定; 增量運算設定){
			... 敘述區塊 ...
		} 
```

範例(九九乘法表)：

```java
for (int i = 1 ; i < 10; i ++) {
		for (int j = 1; j < 10; j++) {
			System.out.println(i + " x " + j + " = " + i*j);
		}
		}
```

## foreach

用來簡化陣列與集合的存取方式

- 原始 for 迴圈取陣列

```java
int[] array = {1,2,3};
		
	for (int k=0; k<array.length; k++) {
		System.out.println(array[k]);
	}
```

- 使用 foreach 來取陣列

```java
int[] array = {1,2,3};

	for (int k : array){
			System.out.println(k);
	}
```

## if (單選擇)

if 敘述就是當某個條件運算成立之後，就去做某個動作，當條件運算不成立，就不去做某個動作，回傳值為布林值
語法：

```java
if (條件運算)
{
		... 動作區塊 ...
}
```

## if else (雙選擇)

if else 當條件運算不成立，轉而去執行其他動作，回傳值為布林值
語法：

```java
if (條件運算)
{
條件成立時執行動作
}
else
{
條件不成立時執行動作
}
```

範例：

```java
int i=-1;
		
		if (i>0) 
		{
			System.out.print("i>0");
		}
		else
		{
			System.out.print("i<0");
		}
```

## else if (多選擇)

語法：

```java
if (條件運算)
{
動作區塊 A
}
else if 
{
動作區塊 B
}
else
{
動作區塊 C
}
```

範例：

```java
int i=0;
		
		if (i>0) 
		{
			System.out.print("i>0");
		}
		else if (i<0)
		{
			System.out.print("i<0");
		}
		else
		{
			System.out.print("i=0");
		}
```

## switch

條件判斷陳述式，變數必須要是整數或是字元
語法：

```java
switch (整數運算式)
{
	case 整數條件值 1 :
		...敘述區塊 1 ...
		break;
	case 整數條件值 N :
		...敘述區塊 N ...
		break;
	default :
		...敘述區塊...
		break;
}
```

- case 敘述區塊可以是空敘述
- break 的功能是跳離內部迴圈
- 將 default 放在最後面的時候 default 內的 break 敘述可以省略，未將 default 放在最後面的時候，則 break 敘述不可省略

範例：

```java
int i = 2;

switch(i){
	case 1:
	System.out.println("1");
	break;
	case 2:
	System.out.println(“2");
	break;
	default:
	System.out.println("default");
}
```

## while (前測式迴圈)

依據條件式判斷是否執行 while 內的動作，執行迴圈前先檢查條件式是否為 true，是則進入，否則離開
語法：

```java
while(條件式)
{
	...敘述區塊...
}
```

- break 敘述用來強制立刻中途跳離迴圈，在無窮迴圈時必須配合 break 來強制跳離

範例：

```java
int i = 11;
		
			while (i<10) {
			System.out.println(i);
			i++;
		}
```

## do-while(後測式迴圈)

在不使用 break 與 continue 的狀況下，while 迴圈內的敘述區塊會至少被執行一次
語法：

```java
do
{
	...敘述區塊...
}while(條件式);
```

範例：

```java
int i = 11;
do{
			System.out.println(i);
			i++;
		}while(i<10);
```

