Pull images and create db container:
````
sudo docker-compose up
````

Check the container:
````
[wguo@dhcp-136-187 lizard]$ sudo docker ps -a
CONTAINER ID        IMAGE                     COMMAND                  CREATED             STATUS                         PORTS                                                                  NAMES
bcf94d00b432        centos/mariadb:latest     "/docker-entrypoin..."   10 minutes ago      Up 9 minutes                   0.0.0.0:3307->3306/tcp                                                 mariadbdocker_mysql_1

````


