package com.lizard.app.services.impl;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.Local;
import javax.ejb.Stateless;

import com.lizard.app.model.Task;
import com.lizard.app.services.TaskService;

@Stateless
@Local(TaskService.class)
public class TaskServiceBean implements TaskService {

	public List<Task> getTasks() throws Exception {
		List<Task> tasks = new ArrayList<Task>();
		Task t1 = new Task();
		t1.setId(Long.valueOf(1));
		t1.setName("task 1");
		t1.setDescription("Lizard test task 1");
		tasks.add(t1);
		return tasks;
	}

}
