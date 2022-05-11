package com.campusdual.fct22g1.api.core.service;


import com.ontimize.jee.common.dto.EntityResult;

import java.util.List;
import java.util.Map;


public interface IPackageService {

	public EntityResult packageQuery(Map<?, ?> keyMap, List<?> attrList);
	public EntityResult packageInsert(Map<?, ?> attrMap);
	public EntityResult packageUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap);
	public EntityResult packageDelete(Map<?, ?> keyMap);

}
