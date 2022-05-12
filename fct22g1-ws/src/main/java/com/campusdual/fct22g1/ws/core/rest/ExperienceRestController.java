package com.campusdual.fct22g1.ws.core.rest;

<<<<<<< HEAD
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.campusdual.fct22g1.api.core.service.IExperienceService;
import com.ontimize.jee.server.rest.ORestController;
=======
import com.campusdual.fct22g1.api.core.service.IExperienceService;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
>>>>>>> 2dc6b3e6791dcb47aecac1cc79d93f1f0ebddd6c

@RestController
@RequestMapping("/experiences")
public class ExperienceRestController extends ORestController<IExperienceService> {

<<<<<<< HEAD
 @Autowired
 private IExperienceService experienceService;

 @Override
 public IExperienceService getService() {
  return this.experienceService;
 }
=======
    @Autowired
    private IExperienceService experienceService;

    @Override
    public IExperienceService getService() {
        return this.experienceService;
    }
>>>>>>> 2dc6b3e6791dcb47aecac1cc79d93f1f0ebddd6c
}
