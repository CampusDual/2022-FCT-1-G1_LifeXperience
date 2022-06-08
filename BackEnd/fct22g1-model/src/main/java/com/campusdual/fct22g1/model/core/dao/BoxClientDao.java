package com.campusdual.fct22g1.model.core.dao;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

@Repository(value = "BoxClientDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/BoxClientDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class BoxClientDao extends OntimizeJdbcDaoSupport {
    public static final String ATTR_ID = "id";
    public static final String ATTR_ID_USER = "iduser";
    public static final String ATTR_ID_BOX = "idbox";
    public static final String QUERY_CLIENT_BOX_EXPERIENCE = "default";
}
