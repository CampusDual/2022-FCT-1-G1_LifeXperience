package com.campusdual.fct22g1.model.core.service;

import com.campusdual.fct22g1.model.core.dao.ExperienceBoxDao;
import com.campusdual.fct22g1.model.core.dao.BoxClientDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;

import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import com.campusdual.fct22g1.api.core.service.IExperienceBoxService;

@Service("ExperienceBoxService")
@Lazy
public class ExperienceBoxService implements IExperienceBoxService {

    @Autowired
    private ExperienceBoxDao experienceBoxDao;
    
    @Autowired
    private BoxClientDao boxClientDao;

    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;

    @Override
    public EntityResult experienceboxQuery(Map<String, Object> keyMap, List<String> attrList)
            throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.experienceBoxDao, keyMap, attrList);
    }

    @Override
    public EntityResult experienceboxInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
        // TODO Auto-generated method stub
        return this.daoHelper.insert(this.experienceBoxDao, attrMap);
    }

    @Override
    public EntityResult experienceboxUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
            throws OntimizeJEERuntimeException {
        // TODO Auto-generated method stub
        return this.daoHelper.update(this.experienceBoxDao, attrMap, keyMap);
    }

    @Override
    public EntityResult experienceboxDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
        // TODO Auto-generated method stub
        return this.daoHelper.delete(this.experienceBoxDao, keyMap);
    }

    @Override
    public EntityResult clientExperienceBoxQuery(Map<String, Object> keyMap, List<String> attrList)
            throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.boxClientDao, keyMap, attrList);

    }

    @Override
    public EntityResult clientExperienceBoxInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
        return this.daoHelper.insert(this.boxClientDao, attrMap);

    }

    @Override
    public EntityResult clientExperienceBoxUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
            throws OntimizeJEERuntimeException {
        return this.daoHelper.update(this.boxClientDao, attrMap, keyMap);

    }

    @Override
    public EntityResult clientExperienceBoxDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
        return this.daoHelper.delete(this.boxClientDao, keyMap);

    }

    @Override
    public EntityResult clientExperienceBoxDefaultQuery(Map<String, Object> keyMap, List<String> attrList)
            throws OntimizeJEERuntimeException {

        return this.daoHelper.query(this.boxClientDao, keyMap, attrList,
                BoxClientDao.QUERY_CLIENT_BOX_EXPERIENCE);
    }

	@Override
	public EntityResult clientExperienceBoxTotalAmountsQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException {
		
		return this.daoHelper.query(this.boxClientDao, keyMap, attrList,
                BoxClientDao.QUERY_TOTAL_AMOUNTS_BOXES);
	}

}
