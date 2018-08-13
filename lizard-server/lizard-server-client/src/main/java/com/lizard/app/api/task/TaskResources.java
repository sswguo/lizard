package com.lizard.app.api.task;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Consumes("application/json")
@Produces("application/json")
@Path("/tasks")
public interface TaskResources {

	@GET
	public List<TaskResource> listAllTasks();

	@POST
	@Path("/add")
	public void createTask(TaskResource task) throws Exception;
}
