package com.campusdual.fct22g1.ws.core.rest;

<<<<<<< HEAD
=======

import com.campusdual.fct22g1.api.core.service.IExperienceService;
>>>>>>> main
import com.campusdual.fct22g1.api.core.service.IPackageService;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

<<<<<<< HEAD
=======

>>>>>>> main
@RestController
@RequestMapping("/packages")
public class PackageRestController extends ORestController<IPackageService> {

<<<<<<< HEAD
    @Autowired
    private IPackageService packageService;

    @Override
    public IPackageService getService() {
        return this.packageService;
    }
=======
	@Autowired
	private IPackageService packageSrv;

	@Override
	public IPackageService getService() {
		return this.packageSrv;
	}

>>>>>>> main
}
