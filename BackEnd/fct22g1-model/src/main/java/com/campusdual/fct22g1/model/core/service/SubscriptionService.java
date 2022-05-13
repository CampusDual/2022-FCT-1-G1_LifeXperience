package com.campusdual.fct22g1.model.core.service;


import com.campusdual.fct22g1.api.core.service.ISubscriptionService;
import com.campusdual.fct22g1.model.core.dao.SubscriptionDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

@Service("SubscriptionService")
@Lazy
public class SubscriptionService implements ISubscriptionService{

 @Autowired private SubscriptionDao subscriptionDao;
 @Autowired private DefaultOntimizeDaoHelper daoHelper;
 
 @Override
 public EntityResult subscriptionQuery(Map<String, Object> keyMap, List<String> attrList)
   throws OntimizeJEERuntimeException {
  return this.daoHelper.query(this.subscriptionDao, keyMap, attrList);
 }

 @Override
 public EntityResult subscriptionInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
  return this.daoHelper.insert(this.subscriptionDao, attrMap);
 }

 @Override
 public EntityResult subscriptionUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
   throws OntimizeJEERuntimeException {
  return this.daoHelper.update(this.subscriptionDao, attrMap, keyMap);
 }

 @Override
 public EntityResult subscriptionDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
  return this.daoHelper.delete(this.subscriptionDao, keyMap);
 }

}
