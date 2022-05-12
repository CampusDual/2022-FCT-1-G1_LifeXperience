package com.campusdual.fct22g1.model.core.dao;
<<<<<<< HEAD
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;
import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;

@Repository("ExperienceDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/ExperienceDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class ExperienceDao extends OntimizeJdbcDaoSupport {

 public static final String ATTR_ID = "id"; 
 public static final String ATTR_NAME = "name";
 public static final String ATTR_DESCRIPTION = "description"; 
 public static final String ATTR_STARTDATE = "startdate";
 public static final String ATTR_ENDDATE = "enddate";
 

}
=======

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

@Lazy
@Repository(value = "ExperienceDao")
@ConfigurationFile(
        configurationFile = "dao/ExperienceDao.xml",
        configurationFilePlaceholder = "dao/placeholders.properties")
public class ExperienceDao extends OntimizeJdbcDaoSupport {

    public static final String ID = "experience_id";
    public static final String NAME = "experience_name";
    public static final String DESCRIPTION = "experience_description";
    public static final String STARTDATE = "experience_startdate";
    public static final String ENDDATE = "experience_enddate";

}
>>>>>>> 2dc6b3e6791dcb47aecac1cc79d93f1f0ebddd6c
