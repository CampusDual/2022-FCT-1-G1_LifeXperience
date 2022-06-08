package com.campusdual.fct22g1.model.core.dao;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

@Repository("ExperienceBoxExperienceDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/ExperienceExperienceBoxDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class ExperienceBoxExperienceDao extends OntimizeJdbcDaoSupport{
    public static final String ATTR_ID = "id";
    public static final String ATTR_IDEXP = "idexp";
    public static final String ATTR_IDPACK = "idpack";
    
    public static final String QUERY_EXPERIENCE_BOX_EXPERIENCE = "details";
}
