package com.campusdual.fct22g1.api.core.service;

import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import java.util.List;
import java.util.Map;

public interface IExperienceService {

    // Experience
    public EntityResult experienceQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;

    public EntityResult experienceInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;

    public EntityResult experienceUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) throws OntimizeJEERuntimeException;

    public EntityResult experienceDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
}