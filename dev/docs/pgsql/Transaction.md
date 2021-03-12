# 交易管理 (Transaction Management)

對資料庫執⾏一個交易可能包含一連串的新增、修改或刪除指令，意旨包含對資料庫進行多個異動。為了保證交易的正確與可靠，必須符合ACID (Atomicity, Consistency, Isolation, Durability)

- Atomicity (單元性)：⼀個交易中所含有的所有運算要就全部被執行，要就都不執行，即在交易當中的所有異動都必須要成功，才能算是成功
  例如：A 從自⼰帳⼾匯款1000元到 B 的帳⼾。A 帳⼾扣除1000元，B 帳戶增加1000元必須都做完，執⾏過程中發⽣錯誤必須回復 (roll back) 到尚未匯款前的狀態

- Consistency (⼀致性)：交易前與交易後的結果都沒有破壞資料庫的完整性，也就是完全符合資料庫設定的規則
  例如：A 從自⼰帳⼾匯款1000元到 B 的帳戶。A 帳⼾扣除的金額，必須與 B 帳戶增加的金額一致

- Isolation (隔離性)：同⼀筆資料在一個交易尚未完成前不可讓其他交易執行更改，也就是預防同步化 (synchronization) 可能造成的錯誤
  例如：A、B 同時從自⼰帳⼾匯款1000元到 C 的帳⼾。當 A 匯款⾄ C 帳⼾時，必須鎖定 C 帳戶直到匯款結束才能讓 B 匯款至 C 帳⼾

- Durability (永久性)：一旦交易成功，對資料的變更即永久有效，即使系統故障也不影響，須仰賴資料庫備份與交易易⽇誌 (log)
  例如：系統告訴 A 提款成功，但其實這筆交易記錄還在磁碟暫存區等待確定；如果此時停電，交易資料會遺失

交易 (transaction) 可將多個異動視為一體，通常會搭配

- ROLLBACK 還原執行過的異動

語法：

```SQL
ROLLBACK;
```

- COMMIT 確定交易 (無法還原執行過的異動)

語法：

```SQL
COMMIT;
```

若要將多個異動視為同⼀個交易 (transaction)

- 異異動前加上 BEGIN
  
語法：

```SQL
BEGIN;
```

範例：

```SQL
BEGIN;
INSERT INTO PUBLISHER (PUBLISHER_ID, PUBLISHER_NAME, CONTACT, PHONE) 
VALUES ('P00A', 'Publisher A', 'Sue' , '04-45678901');
INSERT INTO PUBLISHER (PUBLISHER_ID, PUBLISHER_NAME, CONTACT, PHONE) 
VALUES ('P00B', 'Publisher B', 'Hellen' , '07-78907890');

SELECT * FROM PUBLISHER; -- 先查看結果
ROLLBACK;
SELECT * FROM PUBLISHER; -- 再查看結果	

COMMIT; -- 無法還原
```

