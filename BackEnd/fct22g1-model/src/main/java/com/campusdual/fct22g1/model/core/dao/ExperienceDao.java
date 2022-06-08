package com.campusdual.fct22g1.model.core.dao;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

@Repository("ExperienceDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/ExperienceDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class ExperienceDao extends OntimizeJdbcDaoSupport {

    public static final String ATTR_ID = "id";
    public static final String ATTR_NAME = "name";
    public static final String ATTR_DESCRIPTION = "description";
    public static final String ATTR_ENDDATE = "enddate";
    public static final String ATTR_PRICE = "price";
    public static final String ATTR_ASSOCIATE_IMAGE = "associate_image";
    public static final String ATTR_LATITUDE="latitude";

    public static final String QUERY_EXPERIENCES_THAT_THEY_ARE_NOT_IN_A_BOX = "experiences_that_they_are_not_in_a_box";
    public static final String ATTR_LONGITUDE="longitude";
    public static final String ATTR_ADDRESS="address";
}
