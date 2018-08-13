package com.lizard.app.services.impl;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.Local;
import javax.ejb.Stateless;
import javax.inject.Inject;

import com.lizard.app.dao.TaskDao;
import com.lizard.app.model.Task;
import com.lizard.app.services.TaskService;

@Stateless
@Local(TaskService.class)
public class TaskServiceBean implements TaskService {

	@Inject TaskDao taskDAO;

	public List<Task> getTasks() throws Exception {
		List<Task> tasks = taskDAO.queryAll();
		return tasks;
	}

	public void createTask(Task task) throws Exception {
		taskDAO.create(task);
		
	}

}
