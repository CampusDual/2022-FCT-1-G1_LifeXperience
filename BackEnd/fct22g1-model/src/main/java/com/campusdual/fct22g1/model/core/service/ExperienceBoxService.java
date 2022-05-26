package com.campusdual.fct22g1.model.core.service;

import com.campusdual.fct22g1.model.core.dao.ExperienceBoxDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
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
    private DefaultOntimizeDaoHelper daoHelper;

    @Override
    public EntityResult experienceBoxQuery(Map<String, Object> keyMap, List<String> attrList)
            throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.experienceBoxDao, keyMap, attrList);
    }

    @Override
    public EntityResult experienceBoxInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
        // TODO Auto-generated method stub
        return this.daoHelper.insert(this.experienceBoxDao, attrMap);
    }

    @Override
    public EntityResult experienceBoxUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
            throws OntimizeJEERuntimeException {
        // TODO Auto-generated method stub
        return this.daoHelper.update(this.experienceBoxDao, attrMap, keyMap);
    }

    @Override
    public EntityResult experienceBoxDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
        // TODO Auto-generated method stub
        return this.daoHelper.delete(this.experienceBoxDao, keyMap);
    }

}
