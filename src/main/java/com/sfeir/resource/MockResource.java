package com.sfeir.resource;

import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;
import com.google.inject.Guice;
import com.google.inject.Injector;
import com.sfeir.MockModule;

public abstract class MockResource {
    protected Injector injector = Guice.createInjector(new MockModule());

    protected String getCurrentUserEmail() {
        UserService userService = UserServiceFactory.getUserService();
        return userService.getCurrentUser().getEmail();
    }
}
