const {Kafka} = require("kafkajs")
const msg = process.argv[2]; //get from terminal
produce();
async function produce(){
    try
    {
         const kafka = new Kafka({
              "clientId": "kafkademo",
              "brokers" :["localhost:9092"]
         })

        const producer = kafka.producer();
        console.log("Connecting.....")
        await producer.connect()
        console.log("Connected!")
        //A-M partition 0 , N-Z partition 1 
        const partition = msg[0] < "N" ? 0 : 1;
        const result =  await producer.send({
            "topic": "Lexicon",
            "messages": [
                {
                    "value": msg,
                    "partition": partition
                }
            ]
        })

        console.log(`Send Successfully! ${JSON.stringify(result)}`)
        await producer.disconnect();
    }
    catch(ex)
    {
        console.error(`Error ${ex}`)
    }
    finally{
        process.exit(0);
    }


}