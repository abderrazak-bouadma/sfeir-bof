package com.sfeir.resource;

import com.google.inject.Guice;
import com.google.inject.Injector;
import com.sfeir.AppModule;

public abstract class CommonResource {
    private Injector injector = Guice.createInjector(new AppModule());
}
