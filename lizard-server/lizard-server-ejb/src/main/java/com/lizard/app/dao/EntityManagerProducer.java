package com.lizard.app.dao;

import javax.enterprise.inject.Produces;
import javax.inject.Named;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceUnit;

public class EntityManagerProducer {

	//@Produces
	//@Named("lizardEm")
	//@PersistenceContext(unitName = "com.lizard.app")
	private EntityManager entityManager;
}
