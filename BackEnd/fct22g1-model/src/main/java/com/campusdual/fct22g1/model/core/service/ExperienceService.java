package com.campusdual.fct22g1.model.core.service;

import com.campusdual.fct22g1.api.core.service.IExperienceService;
import com.campusdual.fct22g1.model.core.dao.ClientExperienceDao;
import com.campusdual.fct22g1.model.core.dao.ExperienceDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

@Service("ExperienceService")
@Lazy
public class ExperienceService implements IExperienceService {

    @Autowired
    private ExperienceDao experienceDao;
    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;
    @Autowired
    private ClientExperienceDao clientExperienceDao;

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

	@Override
	public EntityResult clientExperienceQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.query(this.clientExperienceDao, keyMap, attrList);
		
	}

	@Override
	public EntityResult clientExperienceInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
		return this.daoHelper.insert(this.clientExperienceDao, attrMap);
		
	}

	@Override
	public EntityResult clientExperienceUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.update(this.clientExperienceDao,attrMap, keyMap);
		
	}

	@Override
	public EntityResult clientExperienceDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
		return this.daoHelper.delete(this.clientExperienceDao, keyMap);
		
	}

	@Override
	public EntityResult clientExperienceDetailsQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.query(this.clientExperienceDao, keyMap, attrList,ClientExperienceDao.QUERY_CLIENT_EXPERIENCE);
	}
    	

}
