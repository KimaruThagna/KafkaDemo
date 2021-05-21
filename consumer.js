//const Kafka = require("kafkajs").Kafka
const {Kafka} = require("kafkajs")

consume();
async function consume(){
    try
    {
         const kafka = new Kafka({
              "clientId": "kafkademo",
              "brokers" :["localhost:9092"]
         })

        const consumer = kafka.consumer({"groupId": "FooBar"})
        console.log("Connecting.....")
        await consumer.connect()
        console.log("Connected!")
        
        await consumer.subscribe({
            "topic": "Lexicon",
            "fromBeginning": true //read everything 
        }) //listening
        
        await consumer.run({
            "eachMessage": async result => {
                console.log(`Retrieved Msg ${result.message.value} on partition ${result.partition}`)
            }
        })
 

    }
    catch(ex)
    {
        console.error(`Something bad happened ${ex}`)
    }
     


}
