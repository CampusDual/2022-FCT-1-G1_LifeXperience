package com.campusdual.fct22g1.model.core.service;

<<<<<<< HEAD
import com.campusdual.fct22g1.api.core.service.IExperienceService;
import com.campusdual.fct22g1.model.core.dao.ExperienceDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import java.util.List;
import java.util.Map;
=======

import com.campusdual.fct22g1.api.core.service.IExperienceService;
import com.campusdual.fct22g1.model.core.dao.ExperienceDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
>>>>>>> main
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

<<<<<<< HEAD
@Service("ExperienceService")
@Lazy
public class ExperienceService implements IExperienceService {

    @Autowired
    private ExperienceDao experienceDao;
    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;

    @Override
    public EntityResult experienceQuery(Map<String, Object> keyMap, List<String> attrList)
            throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.experienceDao, keyMap, attrList);
    }

    @Override
    public EntityResult experienceInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
        return this.daoHelper.insert(this.experienceDao, attrMap);
    }

    @Override
    public EntityResult experienceUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
            throws OntimizeJEERuntimeException {
        return this.daoHelper.update(this.experienceDao, attrMap, keyMap);
    }

    @Override
    public EntityResult experienceDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
        return this.daoHelper.delete(this.experienceDao, keyMap);
    }

=======
import java.sql.Timestamp;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Lazy
@Service("ExperienceService")
public class ExperienceService implements IExperienceService {

	@Autowired
	private ExperienceDao experienceDao;

	@Autowired
	private DefaultOntimizeDaoHelper daoHelper;

	@Override
	public EntityResult experienceQuery(Map<?, ?> keyMap, List<?> attrList) {
		return this.daoHelper.query(experienceDao, keyMap, attrList);
	}

	@Override
	public EntityResult experienceInsert(Map<?, ?> attrMap) {
			return this.daoHelper.insert(experienceDao, attrMap);
	}

	@Override
	public EntityResult experienceUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap) {
		return this.daoHelper.update(experienceDao, attrMap, keyMap);
	}

	@Override
	public EntityResult experienceDelete(Map<?, ?> keyMap) {
		return this.daoHelper.delete(this.experienceDao, keyMap);
	}
>>>>>>> main
}
