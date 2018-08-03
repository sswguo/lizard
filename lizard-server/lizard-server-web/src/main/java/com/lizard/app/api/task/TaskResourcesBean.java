package com.lizard.app.api.task;

import java.util.ArrayList;
import java.util.List;

public class TaskResourcesBean implements TaskResources {

	public List<TaskResource> listAllTasks() {
		TaskResource tr = new TaskResource();
		tr.setId(1);
		tr.setName("Fee payment");
		tr.setDescription("Test task");
		List<TaskResource> trList = new ArrayList<TaskResource>();
		trList.add(tr);
		return trList;
	}

}
