package com.sfeir;

import com.google.inject.AbstractModule;
import com.sfeir.domain.AppDao;
import com.sfeir.domain.JpaAppDao;

public class AppModule extends AbstractModule {

    @Override
    protected void configure() {
        bind(AppDao.class).to(JpaAppDao.class);
    }

}
