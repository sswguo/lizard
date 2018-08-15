package com.lizard.app.event;

import java.io.Serializable;

public class TaskAdditionEvent implements Serializable {

	private static final long serialVersionUID = 1L;

	public String taskId;
	public String taskName;

	public TaskAdditionEvent(){
		
	}

	public String getTaskId() {
		return taskId;
	}

	public void setTaskId(String taskId) {
		this.taskId = taskId;
	}

	public String getTaskName() {
		return taskName;
	}

	public void setTaskName(String taskName) {
		this.taskName = taskName;
	}

	@Override
	public String toString() {
		return "TaskAdditionEvent [taskId=" + taskId + ", taskName=" + taskName + "]";
	}
}
