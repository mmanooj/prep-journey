# prep-journey
My Interview Preparation Journey recorded here. Will try to keep things interesting here to the best of my abilities :)

# My study resources
- **System Design**
  - System Design, Alex Xu - Vol1, Vol2
  - Designing Data-Intensive Applications, Martin Kleppmann
  - [Complete System Design Videos](https://takeuforward.org/system-design/complete-system-design-roadmap-with-videos-for-sdes/)
  - [System Design, Karan Pratap Singh](https://github.com/karanpratapsingh/system-design)
  - Undertanding Distributed Systems, Robert Vitilio
  - [System Design 101](https://github.com/ByteByteGoHq/system-design-101)
  - [System Design Primer](https://github.com/donnemartin/system-design-primer)
  - [System Design Challenges](https://www.systemsdesignchallenges.com/) 
  
  ***youtube videos***
  - [System Design Interview](https://interviewing.io/guides/system-design-interview)
  - [System Design Fight Club](https://www.youtube.com/@SDFC)
  - [Tech dummies](https://www.youtube.com/@TechDummiesNarendraL)
  - [Gaurav Sen](https://www.youtube.com/@gkcs)
 
- **Algorithms & Data structures**
  - Cracking the coding interview, Gayle Laakmann
  - Data Structures and Algorithms made easy, Narasimha Karumanchi
  - [Algorithms Notes](https://github.com/mmanooj/study/blob/main/Algorithms.pdf)
  - [Top Google Questions](https://github.com/mmanooj/study/blob/main/Algorithms_GoogleQnA.pdf)  
  
  ***youtube videos***
  - [William Fiset](https://www.youtube.com/@WilliamFiset-videos)

- **Design patterns**
  - Object Oriented Design patterns
  - [Microservices](https://microservices.io/)
  - [Microservice Design Patterns](https://dzone.com/articles/design-patterns-for-microservices-ambassador-anti)
  - SOLID

- **AWS**
  - [AWS Skill Builder](https://s6hqndkr.r.us-west-2.awstrack.me/L0/https:%2F%2Fexplore.skillbuilder.aws%2Flearn/1/0101018b3f2c11f2-2ad67291-84d6-4f83-b9d0-5c20783234eb-000000/bJtr_7vKMb1Ym4Bt6fEGApt6gfg=345)
  - [AWS Tutorial for Beginners](https://www.youtube.com/watch?v=k1RI5locZE4&t=8405s)

- **Miscellaneous**
  - https://github.com/bradtraversy/traversy-js-challenges
  - http://highscalability.com/
  - https://www.designgurus.io/
  - https://github.com/dttung2905/kafka-in-production
  - https://github.com/open-source-labs/ReacType
  - https://books.goalkicker.com/
  - https://ottverse.com/
  - https://sqlbolt.com/

# Interview questions
- Design a system where users can configure to receive alerts when a stock touches a threshold. The user shall be notified via push notification, email etc.
- Implement a Mean priority queue
- Implement a builder pattern that returns an immutable object
- Design an earthquake monitoring system where,
  - the censors installed at the locations shall send stats to a localized control center
  - the localized control center shall then forward it to the monitoring system to analyse and predict
  - The system should support functions like login, visualize stats in the user's location, receive alerts via push notification, sms, email etc.
- Design a service that consumes records via a CSV and uploads it to a 3rd party service using it's API. The considerations are,
  - The service should be able to process large size of CSV's with millions of records
  - The 3rd party service API has a rate limit
  - The service should always upload the records from the CSV in the same order onto the 3rd party service
- Design a chat system
- Design a system to store the stock ticker
  - Sample schema fields > company_code, timestamp, price
- Design an event ticket booking system supporting both booking and cancellation requests
- Design a data model to store heirarchy's in an organization and write API & SQL query to fetch all employees above, below and at the same level
- Design a data model for storing history of stocks over several days. Create a Master Table for StockId - Name & Transaction table for Stock price information.
  - Write a query to fetch the most recent prices of a stock today
  - Write a query to fetch all stocks that gained on a particular day
  - Indexes that would build for the above queries
  - Design the system to ingest the stock price info that arrives at a high frequency and volume
- Design a multi-step workflow
  - A step may be configured to execute either all(AND) or one(OR) of the preceeding steps
  - System should generate stats for jobs at various steps like jobs success/failure, time taken to execute the step etc.
  - Handle transient and permanent failure at the steps
- [Trapping rain water problem](https://www.geeksforgeeks.org/trapping-rain-water/)
- [k-subarrays-minimizing-the-difference-between-their-maximum-and-minimum](https://www.geeksforgeeks.org/split-a-given-array-into-k-subarrays-minimizing-the-difference-between-their-maximum-and-minimum/)
- [Smallest positive missing number](https://www.geeksforgeeks.org/find-the-smallest-positive-number-missing-from-an-unsorted-array/)
- [Minimum platforms](https://practice.geeksforgeeks.org/problems/minimum-platforms-1587115620/1)
- [Magic square](https://www.geeksforgeeks.org/check-given-matrix-is-magic-square-or-not/)
- [Sum of two numbers is K](https://medium.com/weekly-webtips/find-two-numbers-in-an-array-that-sums-up-to-k-2f7490482d9d#:~:text=Solution%201%3A%20Brute%20force%20algorithm,it%20is%2C%20return%20the%20pair.)
- [Find pair with K difference](https://www.geeksforgeeks.org/find-a-pair-with-the-given-difference/)
- Given price movement of stock throughout the day, 
  - example: (1, 120.5), (4, 123.25), (5, 122.95), (11, 120.5), each price movement is a tuple (timestamp, price), design API/Query for:
  - get most recent price of the stock (in the above example, ans: 120.5)
	- get price of stock at a specific time, get_at(4)=123.25, get_at(6)=122.95
- Given stock prices for the entire year(date_time, stock_symbol, price), design two APIs:
  - fetch most recent price of any stock
	- fetch daily closing price of a stock between any two days
  - DB indexes(stock_symbol, date_time), caching layer, load balancer, HTTP caching headers
	- Handling db bottleneck, cache layer bottleneck

