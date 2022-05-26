package com.campusdual.fct22g1.ws.core.rest;

import com.campusdual.fct22g1.api.core.service.IExperienceBoxService;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/experienceboxes")
public class ExperienceBoxRestController extends ORestController<IExperienceBoxService> {

    @Autowired
    private IExperienceBoxService packageService;

    @Override
    public IExperienceBoxService getService() {
        return this.packageService;
    }
}
