const {Kafka} = require("kafkajs")

generateTopic();

async function generateTopic(){
    try
    {
         const kafka = new Kafka({
              "clientId": "kafkademo",
              "brokers" :["localhost:9092"]
         })

        const admin = kafka.admin(); // connect as admin
        console.log("Connecting.....")
        await admin.connect()
        console.log("Connected!")
        
        await admin.createTopics({
            "topics": [{
                "topic" : "Lexicon", // can be anything
                "numPartitions": 2
            }]
        })
        console.log("Created Successfully!")
        await admin.disconnect();
    }
    catch(ex)
    {
        console.error(`Error ${ex}`)
    }
    finally{
        process.exit(0);
    }


}
