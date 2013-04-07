package com.sfeir.domain;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;

import com.sfeir.domain.access.DefaultEntityManager;

public class JpaAppDao implements AppDao {

    @Override
    public Attender save(Attender attender) {
        EntityManager em = DefaultEntityManager.get().createEntityManager();
        EntityTransaction tx = em.getTransaction();
        tx.begin();
        em.persist(attender);
        tx.commit();
        if (attender.getKey() != null)
            return attender;
        return null;
    }

}
