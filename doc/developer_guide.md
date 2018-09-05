### Developer Guide (DRAFT)

#### Build package
````
 mvn -Dhttps.protocols=TLSv1.2 clean install
````

#### Deployment - Wildfly
Wildfly: Download the wildfly [here](http://wildfly.org/downloads/) first, or use the [docker one](https://github.com/sswguo/lizard/tree/master/server/wildfly13/docker)  

JDBC Driver: After downloading the wildfly, we need to install the related modules for dirver, see [here](https://github.com/sswguo/lizard/tree/master/server/wildfly13/modules)  

(for how to add module)
````
 wguo  ~  apps  wildfly-13.0.0.Final  bin/jboss-cli.sh 
You are disconnected at the moment. Type 'connect' to connect to the server or 'help' for the list of supported commands.
[disconnected /] connect
[standalone@localhost:9990 /] module add --name=org.mariadb.jdbc --dependencies=javax.api,javax.transaction.api --resources=~/GitRepo/lizard/server/wildfly13/modules/org/mariadb/jdbc/main/mariadb-java-client-1.1.7.jar
[standalone@localhost:9990 /] reload
[standalone@localhost:9990 /] exit
 
````

Datasource: Developer can install db manually or run [the docker ones](https://github.com/sswguo/lizard/tree/master/db),
then update the following configuration based on your db instance. 
````
 <datasource jta="false" jndi-name="java:jboss/datasources/lizardDS" pool-name="lizardDS" enabled="true" use-java-context="true">
      <connection-url>jdbc:mariadb://localhost:3307/lizard</connection-url>
      <driver>mariadb</driver>
      <security>
          <user-name>root</user-name>
          <password>password</password>
       </security>
 </datasource>
 <drivers>
    <driver name="h2" module="com.h2database.h2">
        <xa-datasource-class>org.h2.jdbcx.JdbcDataSource</xa-datasource-class>
    </driver>
    <driver name="mariadb" module="org.mariadb.jdbc">
         <xa-datasource-class>org.mariadb.jdbc.MySQLDataSource</xa-datasource-class>
    </driver>
    <driver name="mysql" module="com.mysql">
           <xa-datasource-class>com.mysql.cj.jdbc.MysqlXADataSource</xa-datasource-class>
    </driver>
</drivers>

````
Security domain
````
<security-domain name="LIZARD.COM">
  <authentication>
    <login-module code="UsersRoles" flag="required">
       <module-option name="usersProperties" value="users.properties"/>
       <module-option name="rolesProperties" value="roles.properties"/>
    </login-module>
  </authentication>
</security-domain>

````

#### Service Implementation 
Add method in TaskResources in lizard-server-client  
Add service method in TaskService/TaskServiceBean in lizard-server-ejb

#### Interceptor
Ref the example: com.lizard.app.interceptors.LoggedInterceptor
- Define the inteceptor in: com.lizard.app.interceptors
````
@Logged
@Interceptor
public class LoggedInterceptor {
}
````
The @Logged annotation is used to apply the interceptor to a bean:
````
@Logged
public class TaskAdditionHandler implements Serializable {
}
````
- Declare it in the beans.xml 
````
<interceptors>
	  <class>com.lizard.app.interceptors.LoggedInterceptor</class>
</interceptors>
````


#### Event
- Define the event in: com.lizard.app.event
- Fire the event
````
@Inject Event<TaskAdditionEvent> taskAdditionEvent;

taskAdditionEvent.fire(event);
````
- Observes the event
````
public void commonTaskAddition(@Observes TaskAdditionEvent event){
	logger.info("Task addition handler: " + event.toString());
}
````

#### Log
The project had default produced the java.util.logging.Logger, and using it via @inject 
````
@Inject @LizardLog Logger log;
````

#### Web
Currently there are examples using React and Vue.
````
.
├── React
│   ├── alertComponent.js
│   ├── app.js
│   ├── examples
│   │   ├── ajaxCall.js
│   │   ├── dataTableAdvance.js
│   │   ├── dataTable.js
│   │   ├── formValidation.js
│   │   └── taskDetail.js
│   ├── README.md
│   └── taskForm.js
└── Vue
    ├── app.js
    └── README.md

````


