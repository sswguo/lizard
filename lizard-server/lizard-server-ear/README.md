Adding datasource in the file: standalone-full.xml

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
