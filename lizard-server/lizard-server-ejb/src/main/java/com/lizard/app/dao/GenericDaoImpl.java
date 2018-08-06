package com.lizard.app.dao;

import java.io.Serializable;
import java.lang.reflect.ParameterizedType;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import javax.inject.Inject;
import javax.inject.Named;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceUnit;
import javax.persistence.TypedQuery;

public class GenericDaoImpl<T, PK extends Serializable> implements GenericDao<T, PK> {

    private Class<T> persistentClass;

    //@Inject
	//@Named("lizardEm")
    @PersistenceContext(unitName = "com.lizard.app")
	protected EntityManager entityManager;

    @SuppressWarnings("unchecked")
    public GenericDaoImpl() {
        this.persistentClass = (Class<T>) ((ParameterizedType) getClass().getGenericSuperclass()).getActualTypeArguments()[0];
    }

    public void create(T entity) {
        entityManager.persist(entity);
    }

    public T update(T entity) {
        return entityManager.merge(entity);
    }

    public void delete(T entity) {
        entityManager.remove(entity);
    }

    public T findByPk(PK id) {
        return entityManager.find(persistentClass, id);
    }

    protected List<T> findByNamedQuery(String queryName, Map<String, Object> parameters) {
        TypedQuery<T> query = entityManager.createNamedQuery(queryName, persistentClass);

        if (parameters != null) {
            for (String param : parameters.keySet()) {
                query.setParameter(param, parameters.get(param));
            }

        }

        return query.getResultList();
    }

    protected List<T> findByNamedQuery(String queryName, String param, Object value) {
        return findByNamedQuery(queryName, Collections.singletonMap(param, value));
    }

    protected List<T> findByNamedQuery(String queryName) {
        return findByNamedQuery(queryName, null);
    }

	public void deleteByHQL(String hql, Object... params) {
		// TODO Auto-generated method stub
		
	}

}
