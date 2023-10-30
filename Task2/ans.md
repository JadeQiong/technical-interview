Answer the following questions based on our company description:

Nagimo installs interactive devices on indoor climbing walls to enable climbers to track, upload, and share their performance on our dedicated platform. More specifically, we automate the sports activity logging process for climbers – done manually today. Also, our platform allows gyms (managers/route setters) to configure and monitor their climbs, gain insight into their climbers’ behavior, and receive feedback.

1. Translate this description into a database design. You may write or draw it out.
We can use a user db, a performance record db, gym db, feedback db.
a user db(userid, username, password, )
a gym db(gymid, gymname, other_attributes, config,)
performance record db(recordid, userid, gymid, duration, level, timestaml, etc)
feedback db(feedbackid, gymid, userid, timestamp, content)

1. We use Firestore (NoSQL) to store our application data, why do you think that is? Give a brief explanation.
NoSQL enables flexibility since it does not require a fixed schema compared with SQL database. For an initial phase of development, using nosql databases saves much effort when schema and requirements change. Also it provides better performance since it achieves final consistency instead of strong consistency(ACID transactions) like SQL databases. Moreover, it provides better scalability. 