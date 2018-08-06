package com.lizard.app.dao;

import java.io.Serializable;

public interface GenericDao <T, PK extends Serializable> {

	void create(T entity);

    T findByPk(PK id);

    T update(T entity);

    void delete(T entity);

    void deleteByHQL(String hql,Object... params);
}
