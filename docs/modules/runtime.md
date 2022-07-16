---
sidebar_position: 2
---

# Runtime

The runtime contains API's that run an integration function. There are two type of API's:

1. Java API
2. REST API


## Integration

The integration API's are an interface to run integrations (services, api, connectors). Currently there is one implementation for Apache Camel. These modules 
can be embedded into a Java application to provide a runtime (it runs Apache Camel) with various API's to interact with integrations. 

There are two modules:

1. Integration (The Java API)
2. IntegrationRest (The REST API)

 
## Broker

The brokers API's are an interface to run brokers. Currently there are two implementation. One for ActiveMQ Classic and one for AcitveMQ Artemis. These modules 
can be embedded into a Java application to provide a runtime (it runs Apache ActiveMQ) with various API's to interact with the brokers. 

There are two modules:

1. Broker (The Java API)
2. BrokerRest (The REST API)


## Github repository

https://github.com/assimbly/modules