package com.campusdual.fct22g1.model.core.dao;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

@Repository("ClientExperienceDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/ClientExperienceDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class ClientExperienceDao extends OntimizeJdbcDaoSupport {

    public static final String ATTR_ID = "id";
    public static final String ATTR_ID_CLIENT = "id_client";
    public static final String ATTR_ID_EXPERIENCE = "id_experience";
    
    public static final String ATTR_PAYMENTDATE = "paymentdate";
    public static final String ATTR_AMOUNTPAID = "amountpaid";
    public static final String ATTR_ASSISTANCE="assistance";
    public static final String QUERY_CLIENT_EXPERIENCE = "details";
    
    public static final String QUERY_CLIENT_EXPERIENCE_ASSISTANCE = "client_experience_assistance_false";  
    public static final String QUERY_LAST_THREE_MONTHS_GAIN_EXPERIENCES = "last_three_months_gain_experiences";
    public static final String QUERY_TOTAL_AMOUNTS_OF_THE_MONTHS_OF_A_YEAR = "total_amounts_of_the_months_of_a_year";

}