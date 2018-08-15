package com.lizard.app.event.handler;

import java.io.Serializable;
import java.util.logging.Logger;

import javax.enterprise.event.Observes;

import com.lizard.app.event.TaskAdditionEvent;
import com.lizard.app.interceptors.Logged;

@Logged
public class TaskAdditionHandler implements Serializable {

	private static final long serialVersionUID = -6352750282202848572L;

	public static final Logger logger = Logger.getLogger(TaskAdditionHandler.class.getName());
	
	public void commonTaskAddition(@Observes TaskAdditionEvent event){
		logger.info("Task addition handler: " + event.toString());
	}
}
