package com.lizard.app.services.impl;

import java.util.List;
import java.util.logging.Logger;

import javax.ejb.Local;
import javax.ejb.Stateless;
import javax.enterprise.event.Event;
import javax.inject.Inject;

import com.lizard.app.audit.LizardLog;
import com.lizard.app.dao.TaskDao;
import com.lizard.app.event.TaskAdditionEvent;
import com.lizard.app.interceptors.Logged;
import com.lizard.app.model.Task;
import com.lizard.app.services.TaskService;

@Stateless
@Local(TaskService.class)
public class TaskServiceBean implements TaskService {

	@Inject TaskDao taskDAO;
	@Inject Event<TaskAdditionEvent> taskAdditionEvent;
	@Inject @LizardLog Logger log;

	@Logged
	public List<Task> getTasks() throws Exception {
		List<Task> tasks = taskDAO.queryAll();
		return tasks;
	}

	public void createTask(Task task) throws Exception {
		log.info("Test logger ....");
		taskDAO.create(task);
		// Fire the task addition event after create successfully
		TaskAdditionEvent event = new TaskAdditionEvent();
		event.setTaskId(String.valueOf(task.getId()));
		event.setTaskName(task.getName());
		taskAdditionEvent.fire(event);
		
	}

}
