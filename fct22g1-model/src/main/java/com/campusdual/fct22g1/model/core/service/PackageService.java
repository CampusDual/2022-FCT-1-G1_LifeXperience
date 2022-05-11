package com.campusdual.fct22g1.model.core.service;


import com.campusdual.fct22g1.api.core.service.IPackageService;
import com.campusdual.fct22g1.api.core.service.IUserService;
import com.campusdual.fct22g1.model.core.dao.PackageDao;
import com.campusdual.fct22g1.model.core.dao.UserDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Lazy
@Service("PackageService")
public class PackageService implements IPackageService {

	@Autowired
	private PackageDao packageDao;

	@Autowired
	private DefaultOntimizeDaoHelper daoHelper;

	@Override
	public EntityResult packageQuery(Map<?, ?> keyMap, List<?> attrList) {
		return this.daoHelper.query(packageDao, keyMap, attrList);
	}

	@Override
	public EntityResult packageInsert(Map<?, ?> attrMap) {
		return this.daoHelper.insert(packageDao, attrMap);
	}

	@Override
	public EntityResult packageUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap) {
		return this.daoHelper.update(packageDao, attrMap, keyMap);
	}

	@Override
	public EntityResult packageDelete(Map<?, ?> keyMap) {
		return this.daoHelper.delete(this.packageDao, keyMap);
	}
}
