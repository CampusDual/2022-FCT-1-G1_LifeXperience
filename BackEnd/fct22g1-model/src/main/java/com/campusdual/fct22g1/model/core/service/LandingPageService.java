package com.campusdual.fct22g1.model.core.service;

import com.campusdual.fct22g1.api.core.service.ILandingPageService;
import com.campusdual.fct22g1.model.core.dao.ClientExperienceDao;
import com.campusdual.fct22g1.model.core.dao.ExperienceBoxDao;
import com.campusdual.fct22g1.model.core.dao.ExperienceDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;


@Service("LandingPageService")
@Lazy
public class LandingPageService implements ILandingPageService{

    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;

    @Autowired
    private ExperienceDao experienceDao;
    
    @Autowired
    private ExperienceBoxDao experienceBoxDao;
    
    @Override
    public EntityResult experienceboxQuery(Map<String, Object> keyMap, List<String> attrList)
            throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.experienceBoxDao, keyMap, attrList);
    }
    
    @Override
    public EntityResult experienceQuery(Map<String, Object> keyMap, List<String> attrList)
            throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.experienceDao, keyMap, attrList);
    }

}
