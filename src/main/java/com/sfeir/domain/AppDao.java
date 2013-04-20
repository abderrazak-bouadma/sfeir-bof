package com.sfeir.domain;

import java.util.List;

public interface AppDao {

    List<Attender> all();

    Attender save(Attender attender);
    
    Attender findByNickname(String nickname);

}
