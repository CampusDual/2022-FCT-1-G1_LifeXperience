package com.campusdual.fct22g1.api.core.service;

import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import java.util.List;
import java.util.Map;

public interface ILandingPageService {

    //Experience
    public EntityResult experienceQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;

    //Experiences Box
    public EntityResult experienceboxQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;
}
