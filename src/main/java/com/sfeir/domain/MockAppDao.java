package com.sfeir.domain;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class MockAppDao implements AppDao {

    @Override
    public Attender save(Attender attender) {
        MockData.ATTENDERS.add(attender);
        return attender;
    }

    @Override
    public List<Attender> all() {
        return MockData.ATTENDERS;
    }

    static class MockData {
        private static final List<Attender> ATTENDERS = Arrays
                .asList(new Attender[] { new Attender("jpuzzler", "bouadma.a@sfeir.com", "test"),
                        new Attender("john.doe", "john.doe@sfeir.com", "test"),
                        new Attender("dider", "girard.d@sfeir.com", "test"),
                        new Attender("dalmaz", "dalmaz.p@sfeir.com", "test"),
                        new Attender("html5", "html5@sfeir.com", "test"), });

        public static List<String> nicknames() {
            List<String> resultSet = new ArrayList<>();
            for (Attender attender : ATTENDERS) {
                resultSet.add(attender.getNickname());
            }
            return resultSet;
        }

        public static List<String> emails() {
            List<String> resultSet = new ArrayList<>();
            for (Attender attender : ATTENDERS) {
                resultSet.add(attender.getEmail());
            }
            return resultSet;
        }

        public static Attender getByNickname(String nickname) {
            if (nickname != null && !nickname.isEmpty())
                for (Attender attender : ATTENDERS) {
                    if (attender.getNickname().equals(nickname))
                        return attender;
                }
            return null;
        }
    }

    @Override
    public Attender findByNickname(String nickname) {
        return MockData.getByNickname(nickname);
    }
}
