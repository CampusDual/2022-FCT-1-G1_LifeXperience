package com.campusdual.fct22g1.ws.core.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.campusdual.fct22g1.api.core.service.IPackageService;
import com.ontimize.jee.server.rest.ORestController;

@RestController
@RequestMapping("/packages")
public class PackageRestController extends ORestController<IPackageService> {

 @Autowired
 private IPackageService packageService;

 @Override
 public IPackageService getService() {
  return this.packageService;
 }
}
