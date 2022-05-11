package com.campusdual.fct22g1.model.core.dao;

<<<<<<< HEAD
=======

>>>>>>> main
import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

<<<<<<< HEAD
@Repository(value = "PackageDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/PackageDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")

public class PackageDao extends OntimizeJdbcDaoSupport {
    public static final String ATTR_ID = "id";
    public static final String ATTR_NAME = "name";
    public static final String ATTR_PRICE = "price";
    public static final String ATTR_DESCRIPTION = "description";
    public static final String ATTR_DURACTION = "duration";
=======

@Lazy
@Repository(value = "PackageDao")
@ConfigurationFile(
	configurationFile = "dao/PackageDao.xml",
	configurationFilePlaceholder = "dao/placeholders.properties")
public class PackageDao extends OntimizeJdbcDaoSupport {

	public static final String ID            = "package_id";
	public static final String NAME         = "package_name";
	public static final String PRICE     = "package_price";
	public static final String DESCRIPTION          = "package_description";
	public static final String DURATION       = "package_duration";
>>>>>>> main
}
