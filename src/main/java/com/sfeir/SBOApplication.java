package com.sfeir;

import java.util.HashSet;
import java.util.Set;

import javax.ws.rs.core.Application;

import com.sfeir.resource.AttenderResource;

public class SBOApplication extends Application {
    @Override
    public Set<Class<?>> getClasses() {
        Set<Class<?>> s = new HashSet<Class<?>>();
        s.add(AttenderResource.class);
        return super.getClasses();
    }
}
