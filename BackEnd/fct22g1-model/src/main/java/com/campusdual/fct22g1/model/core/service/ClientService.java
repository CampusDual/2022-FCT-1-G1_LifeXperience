package com.campusdual.fct22g1.model.core.service;

import java.util.List;
import java.util.Map;

import com.campusdual.fct22g1.api.core.service.IClientService;
import com.campusdual.fct22g1.model.core.dao.ClientDao;
import com.campusdual.fct22g1.model.core.dao.ClientExperienceDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

@Service("ClientService")
@Lazy
public class ClientService implements IClientService {

    @Autowired
    private ClientDao ClientDao;
    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;

    @Override
    public EntityResult clientQuery(Map<String, Object> keyMap, List<String> attrList)
            throws OntimizeJEERuntimeException {
                return this.daoHelper.query(this.ClientDao, keyMap, attrList);
    }

    @Override
    public EntityResult clientInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
        // TODO Auto-generated method stub
        return this.daoHelper.insert(this.ClientDao, attrMap);
    }

    @Override
    public EntityResult clientUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
            throws OntimizeJEERuntimeException {
        // TODO Auto-generated method stub
        return this.daoHelper.update(this.ClientDao, attrMap, keyMap);
    }

    @Override
    public EntityResult clientDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
        // TODO Auto-generated method stub
        return this.daoHelper.delete(this.ClientDao, keyMap);
    }
    
    @Override
    public EntityResult detailsHighDateQuery(Map<String, Object> keyMap, List<String> attrList)
        throws OntimizeJEERuntimeException {
            return this.daoHelper.query(this.ClientDao, keyMap, attrList, ClientDao.QUERY_HIGH_DATE);
    }

}
