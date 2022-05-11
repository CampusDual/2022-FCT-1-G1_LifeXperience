package com.campusdual.fct22g1.api.core.service;


import com.ontimize.jee.common.dto.EntityResult;

import java.util.List;
import java.util.Map;


public interface IExperienceService {

	public EntityResult experienceQuery(Map<?, ?> keyMap, List<?> attrList);
	public EntityResult experienceInsert(Map<?, ?> attrMap);
	public EntityResult experienceUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap);
	public EntityResult experienceDelete(Map<?, ?> keyMap);

}
