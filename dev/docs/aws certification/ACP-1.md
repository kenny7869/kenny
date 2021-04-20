# AWS Cloud Practitioner 01

1. VPC gateway endpoint 適用支援的 AWS 服務：**S3**、**DynamoDB** 

2. 可用於分離 AWS Cloud 上基於微服務的應用程序元件的 AWS 服務有：

- Amazon Simple Queue Service (Amazon SQS)：提供安全、耐用且可用的託管佇列，可整合並讓分散式軟體系統和元件分離，使用 SQS 可以在任何數量下的軟體組件之間發送，存儲和接收消息，而不會丟失消息或要求其他可用服務
- Amazon Simple Notification Service （Amazon SNS）： 是高度可用、耐用且安全的全受管發佈/訂閱簡訊服務，可讓您分離微型服務、分散式系統及事件驅動的無伺服器應用程式。Amazon SNS 所提供的主題，皆適用於高傳輸量、以推播為基礎的多對多簡訊

3. 應用程式需要能夠提供快速 I / O 性能的高性能硬件磁碟，哪個存儲選項可以作為 CP 值最高的解決方案？

- Instance Store (執行個體存放區)：Instance Store 提供暫時的區塊層級儲存空間。這個儲存空間位於實際連接到主機電腦的磁碟上，非常適合用來暫時儲存經常變更的資訊，例如緩衝區、快取、臨時資料和其他暫時性的內容，也非常適合複製到整個執行個體機群的資料，例如網頁伺服器的負載平衡集區

4. Which of the following can limit Amazon Storage Service (Amazon S3) bucket access to specific users ?

* [x] **AWS Identity and Access (IAM) policies**

5. The DevOps team at an e-commerce company is trying to debug performance issues for its serverless application built using a microservices architecture. As a Cloud Practitioner, which AWS service would you recommend addressing this use-case? **[錯2]**

* [x] **AWS X-Ray**

6. As per AWS shared responsibility model, which of the following is a responsibility of the customer from a security and compliance point of view? **[錯2]**

* [x] **Manage EBS backups using EBS snapshots**

7. Which of the following is CORRECT regarding removing an AWS account from AWS Organizations？

* [x] **The AWS account must be able to operate as a standalone account. Only then it can be removed from AWS organizations**

8. A unicorn startup is building an analytics application with support for a speech-based interface. The application will accept speech-based input from users and then convey results via speech. As a Cloud Practitioner, which solution would you recommend for the given use-case?

* [x] **Use Amazon Transcribe to convert speech to text for downstream analysis. Then use Amazon Polly to convey the text results via speech**

9. The AWS Well-Architected Framework helps organizations build robust Cloud solutions based on AWS recommended best practices. Which of the following are part of the five pillars mandated in the Well-Architected Framework? (Select two)

* [x] **Performance Efficiency**
* [x] **Security**

10. Which of the following entities applies patches to the underlying OS for AWS Aurora?

* [x] **The AWS Product Team automatically**

11. Which of the following represents a serverless stack on AWS Cloud?

* [x] **Step Function, DynamoDB, Lambda**

12. A startup wants to migrate its data and applications from the on-premises data center to AWS Cloud. Which of the following options can be used by the startup to help with this migration? (Select two) <br/>**[錯2]**

* [x]  **Leverage AWS Professional Services and set up AWS Landing Zone to accelerate the infrastructure migration**
* [x]  **Utilize AWS Partner Network (APN) to build a custom solution for this infrastructure migration**

13. Which of the following AWS services can be used to connect a company's on-premises environment to a VPC without using the public internet?

* [x] **AWS Direct Connect**

14. A company wants to have control over creating and **using its own keys** for encryption on AWS services. Which of the following can be used for this use-case?<br/>**[錯2]**

* [x] **Customer Managed CMK**

15. A startup wants to set up its IT infrastructure on AWS Cloud. The CTO would like to get an estimate of the **monthly AWS bill** based on the AWS services that the startup wants to use. As a Cloud Practitioner, which AWS service would you suggest for this use-case?

* [x] **AWS Simple Monthly Calculator**

16. A research group wants to use EC2 instances to run a scientific computation application that has a fault tolerant architecture. The application needs high-performance hardware disks that provide fast I/O performance. As a Cloud Practitioner, which of the following storage options would you recommend as the MOST cost-effective solution?

* [x] **Instance Store**

17. As per the AWS shared responsibility model, which of the following is a responsibility of the customer from a security and compliance point of view?

* [x] **Managing patches of the guest operating system on Amazon EC2**

18. Which AWS service can be used to review the compliance and governance-related documents on AWS?

* [x] **Artifact**

19. A photo sharing web application wants to store thumbnails of user-uploaded images on Amazon S3. The thumbnails are rarely used but need to be immediately accessible from the web application. The thumbnails can be regenerated easily if they are lost. Which is the most cost-effective way to store these thumbnails on S3?

* [x] **Use S3 One-Zone Infrequent Access (One-Zone IA) to store the thumbnails**

20. Which of the following options can be used to access and manage all AWS services?

* [x] **AWS Software Developer Kit (SDK)** - You can also access via AWS SDK that provides language-specific abstracted APIs for AWS services.
* [x] **AWS Management Console** - This is a simple web interface for accessing AWS services.
* [x] **AWS Command Line Interface (CLI)** - You can access AWS services from the command line and automate service management with scripts.

21. Which service gives a personalized view of the status of the AWS services that are part of your Cloud architecture so that you can quickly assess the impact on your business when AWS service(s) are experiencing issues?

* [x] **AWS Personal Health Dashboard**

22. A startup is looking for 24x7 phone based technical support for his AWS account. Which of the following is the MOST cost-effective AWS support plan for this use-case?

* [x] **Business** - AWS recommends Business Support if you have production workloads on AWS and want 24x7 phone, email and chat access to technical support and architectural guidance in the context of your specific use-cases. Enterprise Support plan also provides 24x7 phone, email and chat access to technical support however it's much costlier than Business Support plan. Developer plan does not provide 24x7 phone based technical support. Therefore Business Support plan is the correct option for the given use-case.

23. Which of the following statements are true about AWS Lambda?

* [x] **AWS Lambda lets you run code without provisioning or managing servers**
* [x] **You pay only for the compute time you consume**

24. Which of the following statements are CORRECT regarding the Availability Zone (AZ) specific characteristics of EBS and EFS storage types?

* [x] **EBS volume can be attached to a single instance in the same Availability Zone whereas EFS file system can be mounted on instances across multiple Availability Zones**

25. AWS Shield Advanced provides expanded DDoS attack protection for web applications running on which of the following resources? (Select two)

* [x] **Amazon Route 53**
* [x] **AWS Global Accelerator**

26. A startup wants to provision an EC2 instance for the lowest possible cost for a long-term duration but needs to make sure that the instance would never be interrupted. As a Cloud Practitioner, which of the following options would you recommend?

* [x] **Reserved Instance**

27. Which AWS Route 53 routing policy would you use to route traffic to multiple resources and also choose how much traffic is routed to each resource?

* [x] **Weighted routing policy**

28. Which of the following AWS services support reservations to optimize costs? (Select three)

* [x] **EC2 Instances**
* [x] **DynamoDB**
* [x] **RDS**

29. Which of the following is a hybrid storage service that allows on-premises applications to access data on AWS Cloud?

* [x] **AWS Storage Gateway**

30. Which AWS service will help you receive alerts when the reservation utilization falls below the defined threshold?

* [x] **AWS Budgets**

31. Which of the following AWS Support plans provides access to Infrastructure Event Management for an additional fee?

* [x] **Business**

32. The DevOps team at an IT company is moving 500 GB of data from an EC2 instance to an S3 bucket in the same region. Which of the following scenario captures the correct charges for this data transfer?

* [x] **The company would not be charged for this data transfer**

33. Which AWS services can be used to facilitate organizational change management, part of the Reliability pillar of AWS Well-Architected Framework? (Select three)

* [x] **AWS Config**
* [x] **AWS CloudTrail**
* [x] **Amazon CloudWatch**

34. Which of the following statements are CORRECT regarding the AWS VPC service? (Select two)

* [x] **A Security Group can have allow rules only**
* [x] **A NAT Gateway is managed by AWS**

35. Which of the following AWS Support plans provide access to guidance, configuration, and troubleshooting of AWS interoperability with third-party software? (Select two)

* [x] **Enterprise**
* [x] **Business**

36. A big data analytics company is moving its IT infrastructure from an on-premises data center to AWS Cloud. The company has some server-bound software licenses that it wants to use on AWS. As a Cloud Practitioner, which of the following EC2 instance types would you recommend to the company?

* [x] **Dedicated host**

37. An intern at an IT company provisioned a Linux based On-demand EC2 instance with per-second billing but terminated it within 30 seconds as he wanted to provision another instance type. What is the duration for which the instance would be charged?

* [x] **60 seconds** - There is a one-minute minimum charge for Linux based EC2 instances, so this is the correct option.

38. A financial services company wants to ensure that its AWS account activity meets the governance, compliance and auditing norms. As a Cloud Practitioner, which AWS service would you recommend for this use-case?

* [x] **CloudTrail**
![CloudTrail](./ACP/AWS-CloudTrail_How-it-Works.png "CloudTrail")

39. Which AWS services can be used to decouple components of a microservices based application on AWS Cloud? (Select two)

* [x] **SQS** - Amazon Simple Queue Service (SQS) is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications. Using SQS, you can send, store, and receive messages between software components at any volume, without losing messages or requiring other services to be available.
* [x] **SNS** - Amazon Simple Notification Service (SNS) is a highly available, durable, secure, fully managed pub/sub messaging service that enables you to decouple microservices, distributed systems, and serverless applications. Using Amazon SNS topics, your publisher systems can fan-out messages to a large number of subscriber endpoints for parallel processing, including Amazon SQS queues, AWS Lambda functions, and HTTP/S webhooks. Additionally, SNS can be used to fan out notifications to end users using mobile push, SMS, and email.

Therefore, both SNS and SQS can be used to decouple components of a microservices-based application.

40. Which of the following are correct statements regarding the AWS Global Infrastructure? (Select two)

* [x] **Each AWS Region consists of two or more Availability Zones**
* [x] **Each Availability Zone (AZ) consists of one or more discrete data centers**

41. Which of the following AWS services has encryption enabled by default?

* [x] **CloudTrail Logs**

42. A multi-national company has just moved its infrastructure from its on-premises data center to AWS Cloud. As part of the shared responsibility model, AWS is responsible for which of the following?

* [x] **Physical and Environmental controls**

43. Which of the following S3 storage classes takes the most time to retrieve data (also known as first byte latency)?

* [x] **S3 Glacier Deep Archive**

44. Which of the following is a benefit of using AWS managed services such as Amazon RDS?

* [x] **The performance of AWS managed RDS instance is better than a customer-managed database instance**

45. Which of the following AWS Support plans provide access to only 7 core checks from the AWS Trusted Advisor Best Practice Checks? (Select two)

* [x] **Basic**
* [x] **Developer**

46. Which security service of AWS is enabled for all AWS customers, by default, at no additional cost?

* [x] **AWS Shield Standard**

47. A cyber forensics team has detected that AWS owned IP-addresses are being used to carry out malicious attacks. As this constitutes prohibited use of AWS services, which of the following is the correct solution to address this issue?

* [x] **Contact AWS Abuse Team**
