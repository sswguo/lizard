package com.lizard.app.services;

import java.util.List;

import com.lizard.app.model.Task;

public interface TaskService {

	public List<Task> getTasks() throws Exception;

	public void createTask(Task task) throws Exception;
}
