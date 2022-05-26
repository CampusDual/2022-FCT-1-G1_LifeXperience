package com.campusdual.fct22g1.model.core.dao;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;

@Repository("ClientExperienceDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/ClientExperienceDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class ClientExperienceDao extends OntimizeJdbcDaoSupport {

 public static final String ATTR_ID ="id";
 public static final String ATTR_ID_CLIENT ="id_client";
 public static final String ATTR_ID_EXPERIENCE ="id_experience";
  
}