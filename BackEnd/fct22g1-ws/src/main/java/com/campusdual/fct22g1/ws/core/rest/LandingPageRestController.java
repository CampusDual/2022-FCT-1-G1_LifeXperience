package com.campusdual.fct22g1.ws.core.rest;

import com.campusdual.fct22g1.api.core.service.ILandingPageService;
import com.ontimize.jee.server.rest.ORestController;
import org.apache.catalina.util.SessionIdGeneratorBase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/portalService")
public class LandingPageRestController extends ORestController<ILandingPageService>{
    @Autowired
    private ILandingPageService landingPageService;

    @Override
    public ILandingPageService getService() {
        return this.landingPageService;
    }
}
