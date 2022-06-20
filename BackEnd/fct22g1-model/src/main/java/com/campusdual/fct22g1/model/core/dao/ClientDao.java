package com.campusdual.fct22g1.model.core.dao;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

@Repository(value = "ClientDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/ClientDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")

public class ClientDao extends OntimizeJdbcDaoSupport {
    public static final String ATTR_ID = "id";
    public static final String ATTR_NAME = "name";
    public static final String ATTR_SURNAME = "surname";
    public static final String ATTR_NIF = "nif";
    public static final String ATTR_BIRTHDATE = "birthdate";
    public static final String ATTR_EMAIL = "email";
    public static final String ATTR_PHONE = "phonenumber";
    public static final String ATTR_ADDRESS = "address";
    public static final String ATTR_ASSOCIATE_IMAGE_CLIENT="associate_image_client";
    public static final String ATTR_HIGH_DATE = "high_date";
    
    public static final String QUERY_HIGH_DATE = "details_high_date";

}
