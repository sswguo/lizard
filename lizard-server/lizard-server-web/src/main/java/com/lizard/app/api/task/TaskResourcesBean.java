package com.lizard.app.api.task;

import java.util.ArrayList;
import java.util.List;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;

import com.lizard.app.model.Task;
import com.lizard.app.services.TaskService;

@RequestScoped
public class TaskResourcesBean implements TaskResources {

	@Inject TaskService taskService;

	public List<TaskResource> listAllTasks() {
		List<Task> tasks = null;
		try {
			tasks = taskService.getTasks();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		List<TaskResource> trList = new ArrayList<TaskResource>();

		for (Task t : tasks) {
			TaskResource tr = new TaskResource();
			tr.setId(t.getId());
			tr.setName(t.getName());
			tr.setDescription(t.getDescription());
			trList.add(tr);
		}
		
		return trList;
	}

	public void createTask(TaskResource task) throws Exception {
		Task t = new Task();
		t.setName(task.getName());
		t.setDescription(task.getDescription());
		try {
			taskService.createTask(t);
		} catch (Exception e) {
			throw e;
		}
		
	}

}
