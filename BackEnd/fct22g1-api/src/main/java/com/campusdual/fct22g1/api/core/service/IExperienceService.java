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

    public EntityResult experiencesThatTheyAreNotInABoxQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;

    public EntityResult experiencesOfABoxQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;

    //CLIENT EXPERIENCE
    public EntityResult clientExperienceQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;
    public EntityResult clientExperienceInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;
    public EntityResult clientExperienceUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
    public EntityResult clientExperienceDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
    public EntityResult clientExperienceDetailsQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;
    
    //EXPERIENCE BOX EXPERIENCES
    public EntityResult experienceBoxExperienceQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;
    public EntityResult experienceBoxExperienceInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;
    public EntityResult experienceBoxExperienceUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
    public EntityResult experienceBoxExperienceDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
    public EntityResult experienceBoxExperienceDetailsQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;
}
