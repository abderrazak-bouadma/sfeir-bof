package com.sfeir;

import com.google.inject.AbstractModule;
import com.sfeir.domain.AppDao;
import com.sfeir.domain.MockAppDao;

public class MockModule extends AbstractModule {

    @Override
    protected void configure() {
        bind(AppDao.class).to(MockAppDao.class);
    }

}
