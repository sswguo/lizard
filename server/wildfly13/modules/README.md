How to add module:

````
 wguo  ~  apps  wildfly-13.0.0.Final  bin/jboss-cli.sh 
You are disconnected at the moment. Type 'connect' to connect to the server or 'help' for the list of supported commands.
[disconnected /] connect
[standalone@localhost:9990 /] module add --name=org.mariadb.jdbc --dependencies=javax.api,javax.transaction.api --resources=/var/lib/jboss-as/modules/org/mariadb/jdbc/main/mariadb-java-client-1.1.7.jar
[standalone@localhost:9990 /] reload
[standalone@localhost:9990 /] exit
````
