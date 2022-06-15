package com.campusdual.fct22g1.model.core.service;

import com.campusdual.fct22g1.api.core.service.IExperienceService;
import com.campusdual.fct22g1.model.core.dao.ClientExperienceDao;
import com.campusdual.fct22g1.model.core.dao.ExperienceBoxExperienceDao;
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
    @Autowired
    private ExperienceBoxExperienceDao experienceBoxExperienceDao;

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
    public EntityResult experiencesThatTheyAreNotInABoxQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.experienceDao, keyMap, attrList, ExperienceDao.QUERY_EXPERIENCES_THAT_THEY_ARE_NOT_IN_A_BOX);
    }

    @Override
    public EntityResult experiencesOfABoxQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.experienceDao, keyMap, attrList, ExperienceDao.QUERY_EXPERIENCES_OF_A_BOX);
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
        return this.daoHelper.update(this.clientExperienceDao, attrMap, keyMap);

    }

    @Override
    public EntityResult clientExperienceDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
        return this.daoHelper.delete(this.clientExperienceDao, keyMap);

    }

    @Override
    public EntityResult clientExperienceDetailsQuery(Map<String, Object> keyMap, List<String> attrList)
            throws OntimizeJEERuntimeException {

        return this.daoHelper.query(this.clientExperienceDao, keyMap, attrList, ClientExperienceDao.QUERY_CLIENT_EXPERIENCE);
    }
    
    @Override
    public EntityResult clientExperienceAssistanceFalseQuery(Map<String, Object> keyMap, List<String> attrList)
            throws OntimizeJEERuntimeException {

        return this.daoHelper.query(this.clientExperienceDao, keyMap, attrList, ClientExperienceDao.QUERY_CLIENT_EXPERIENCE_ASSISTANCE);
    }
    
    @Override
    public EntityResult lastThreeMonthsGainExperiencesQuery(Map<String, Object> keyMap, List<String> attrList)
        throws OntimizeJEERuntimeException {
            return this.daoHelper.query(this.clientExperienceDao, keyMap, attrList, ClientExperienceDao.QUERY_LAST_THREE_MONTHS_GAIN_EXPERIENCES);
    }

    public EntityResult clientExperienceTotalAmountsOfTheMonthsOfAYearQuery(Map<String, Object> keyMap, List<String> attrList)
            throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.clientExperienceDao, keyMap, attrList, ClientExperienceDao.QUERY_TOTAL_AMOUNTS_OF_THE_MONTHS_OF_A_YEAR);
    }

    @Override
    public EntityResult experienceBoxExperienceQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.experienceBoxExperienceDao, keyMap, attrList);
    }

    @Override
    public EntityResult experienceBoxExperienceInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
        return this.daoHelper.insert(this.experienceBoxExperienceDao, attrMap);
    }

    @Override
    public EntityResult experienceBoxExperienceUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
        return this.daoHelper.update(this.experienceBoxExperienceDao, attrMap, keyMap);
    }

    @Override
    public EntityResult experienceBoxExperienceDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
        return this.daoHelper.delete(this.experienceBoxExperienceDao, keyMap);
    }

    @Override
    public EntityResult experienceBoxExperienceDetailsQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.experienceBoxExperienceDao, keyMap, attrList, ExperienceBoxExperienceDao.QUERY_EXPERIENCE_BOX_EXPERIENCE);
    }

}
