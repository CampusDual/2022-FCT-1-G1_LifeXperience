package com.campusdual.fct22g1.model.core.dao;


import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;


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
}
