package com.campusdual.fct22g1.api.core.service;

<<<<<<< HEAD
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import java.util.List;
import java.util.Map;

public interface IPackageService {

    public EntityResult packageQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;

    public EntityResult packageInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;

    public EntityResult packageUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) throws OntimizeJEERuntimeException;

    public EntityResult packageDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
=======

import com.ontimize.jee.common.dto.EntityResult;

import java.util.List;
import java.util.Map;


public interface IPackageService {

	public EntityResult packageQuery(Map<?, ?> keyMap, List<?> attrList);
	public EntityResult packageInsert(Map<?, ?> attrMap);
	public EntityResult packageUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap);
	public EntityResult packageDelete(Map<?, ?> keyMap);
>>>>>>> main

}
