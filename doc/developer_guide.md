### Developer Guide (DRAFT)

#### Build package
````
 mvn -Dhttps.protocols=TLSv1.2 clean install
````

#### Deployment - JBossAS
Datasource: Developer can install db manually or run the docker ones, then update the following configuration
based on your db instance. 
````
 <xa-datasource jndi-name="java:jboss/datasources/lizardDS" pool-name="lizardPool" enabled="true">
     <xa-datasource-property name="URL">
        jdbc:mysql://localhost:3306/lizard
     </xa-datasource-property>
     <xa-datasource-property name="PinGlobalTxToPhysicalConnection">
        true
     </xa-datasource-property>
     <driver>com.mysql</driver>
     <security>
       <user-name>root</user-name>
     </security>
 </xa-datasource>

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


