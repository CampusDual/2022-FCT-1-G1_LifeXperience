package com.campusdual.fct22g1.ws.core.rest;

<<<<<<< HEAD
=======

>>>>>>> main
import com.campusdual.fct22g1.api.core.service.IExperienceService;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

<<<<<<< HEAD
=======

>>>>>>> main
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
	private IExperienceService experienceSrv;

	@Override
	public IExperienceService getService() {
		return this.experienceSrv;
	}

>>>>>>> main
}
