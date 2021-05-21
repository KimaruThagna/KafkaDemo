# KafkaDemo
Demonstrating use of Kafka using Node and Docker
# Kafka setup
## spin zookeeper
Run the docker command
```
docker run --name=zookeeper -p 2181:2181 zookeeper
```
The default port for zookeeper is `2181`

## Spin Kafka broker
Run the docker command
```
docker run --name kafka-server -p 9092:9092 -e KAFKA_ZOOKEEPER_CONNECT= localhost:2181 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://localhost:9092 -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 confluent/cp-kafka
```

## To execute a send from producer
` node producer.js message-that-you-want-to-send`

## To execute a consumer
`node consumer.js` 



