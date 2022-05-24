package com.campusdual.fct22g1.ws.core.rest;

import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.campusdual.fct22g1.api.core.service.IClientService;

@RestController
@RequestMapping("/clients")
public class ClientRestController extends ORestController<IClientService> {

    @Autowired
    private IClientService clientService;

    @Override
    public IClientService getService() {
        return this.clientService;
    }
}
