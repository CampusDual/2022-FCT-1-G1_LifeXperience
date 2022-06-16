package com.campusdual.fct22g1.api.core.service;

import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import java.util.List;
import java.util.Map;

public interface IExperienceBoxService {

        public EntityResult experienceboxQuery(Map<String, Object> keyMap, List<String> attrList)
                        throws OntimizeJEERuntimeException;

        public EntityResult experienceboxInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;

        public EntityResult experienceboxUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
                        throws OntimizeJEERuntimeException;

        public EntityResult experienceboxDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;

        public EntityResult clientExperienceBoxQuery(Map<String, Object> keyMap, List<String> attrList)
                        throws OntimizeJEERuntimeException;

        public EntityResult clientExperienceBoxInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;

        public EntityResult clientExperienceBoxUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
                        throws OntimizeJEERuntimeException;

        public EntityResult clientExperienceBoxDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;

        public EntityResult clientExperienceBoxDefaultQuery(Map<String, Object> keyMap, List<String> attrList)
                        throws OntimizeJEERuntimeException;

        public EntityResult clientExperienceBoxTotalAmountsQuery(Map<String, Object> keyMap, List<String> attrList)
                        throws OntimizeJEERuntimeException;

        public EntityResult clientExperienceBoxLastThreeMonthSoldBoxesQuery(Map<String, Object> keyMap, List<String> attrList)
                        throws OntimizeJEERuntimeException;

}
