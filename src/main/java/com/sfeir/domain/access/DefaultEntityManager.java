package com.sfeir.domain.access;

import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class DefaultEntityManager {

    private static final EntityManagerFactory emf = Persistence
            .createEntityManagerFactory("transactions-optional");

    private DefaultEntityManager() {
    }

    public static EntityManagerFactory get() {
        return emf;
    }
}
