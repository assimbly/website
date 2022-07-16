---
sidebar_position: 1
---

# Base

The base modules are modules that can be used as a base for other modules

There are two types of base modules:

1. dependencies
2. utils


## dependencies

Dependencies contain a set of related dependencies. Examples:

- Common: common dependencies like Apache Commons libraries that can be used in other modules.
- Camel: Camel base dependencies to build Camel solutions.
- Camel Components: A set of the most used Camel components.
- Database: A set of Database drivers (MySQL, Oracle, PostgreSQL etc).
- Spring: A set of basic Spring libraries.
- Extra: Extra libraries
- Test: A set of libraries used for testing (Junit, Powermock etc)

## utils

Utilities classes that are practical. Examples:

- CertificatesUtil: Util Class to handle SSL/TLS certificates
- DepdencyUtil: To dynamically load Maven dependencies (based on Jeka)
- EncryptionUtil: To encrypt/decrypt strings (based on Jasypt)
- OSUtil: to check the operation system used
- IntegrationUtil (Misc)
- InetUtil: To check internet connections
- TransformUtil: Transform files with XSLT


## Github repository

https://github.com/assimbly/base

