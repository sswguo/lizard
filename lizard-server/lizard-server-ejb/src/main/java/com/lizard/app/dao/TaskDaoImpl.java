package com.lizard.app.dao;

import java.util.List;

import javax.ejb.Stateless;

import com.lizard.app.model.Task;

@Stateless(name="TaskDAO")
public class TaskDaoImpl extends GenericDaoImpl<Task, Long> implements TaskDao {

	public List<Task> queryAll() {
		List<Task> tasks = findByNamedQuery(Task.QUERY_ALL);
		return tasks;
	}


}
