package com.lizard.app.dao;

import java.util.List;

import javax.ejb.Local;

import com.lizard.app.model.Task;

@Local
public interface TaskDao extends GenericDao<Task, Long> {

	public List<Task> queryAll();
}
