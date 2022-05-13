package com.campusdual.fct22g1.ws.core.rest;

import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.campusdual.fct22g1.api.core.service.ISubscriptionService;

@RestController
@RequestMapping("/subscriptions")
public class SubscriptionRestController extends ORestController<ISubscriptionService> {

    @Autowired
    private ISubscriptionService subscriptionService;

    @Override
    public ISubscriptionService getService() {
        return this.subscriptionService;
    }
}
