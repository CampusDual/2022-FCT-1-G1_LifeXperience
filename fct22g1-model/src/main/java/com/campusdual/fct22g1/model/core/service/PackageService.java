package com.campusdual.fct22g1.model.core.service;

<<<<<<< HEAD
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
=======
>>>>>>> 2dc6b3e6791dcb47aecac1cc79d93f1f0ebddd6c

import com.campusdual.fct22g1.api.core.service.IPackageService;
import com.campusdual.fct22g1.model.core.dao.PackageDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
<<<<<<< HEAD

@Service("PackageService")
@Lazy
public class PackageService implements IPackageService{

 @Autowired private PackageDao packageDao;
 @Autowired private DefaultOntimizeDaoHelper daoHelper;
 
 @Override
 public EntityResult packageQuery(Map<String, Object> keyMap, List<String> attrList)
   throws OntimizeJEERuntimeException {
  return this.daoHelper.query(this.packageDao, keyMap, attrList);
 }

 @Override
 public EntityResult packageInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
  return this.daoHelper.insert(this.packageDao, attrMap);
 }

 @Override
 public EntityResult packageUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
   throws OntimizeJEERuntimeException {
  return this.daoHelper.update(this.packageDao, attrMap, keyMap);
 }

 @Override
 public EntityResult packageDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
  return this.daoHelper.delete(this.packageDao, keyMap);
 }

}
=======
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
@Service("PackageService")
@Lazy
public class PackageService implements IPackageService {

    @Autowired
    private PackageDao packageDao;
    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;

    @Override
    public EntityResult packageQuery(Map<String, Object> keyMap, List<String> attrList)
            throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.packageDao, keyMap, attrList);
    }

    @Override
    public EntityResult packageInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
        return this.daoHelper.insert(this.packageDao, attrMap);
    }

    //TODO: Implementar
    @Override
    public EntityResult packageUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
            throws OntimizeJEERuntimeException {
        return this.daoHelper.update(this.packageDao, attrMap, keyMap);
    }

    @Override
    public EntityResult packageDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
        return this.daoHelper.delete(this.packageDao, keyMap);
    }

}
>>>>>>> 2dc6b3e6791dcb47aecac1cc79d93f1f0ebddd6c
