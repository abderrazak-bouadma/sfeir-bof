package com.sfeir.resource.business;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "attender")
public class AttenderVO {
    private String id;
    private String nickname;
    private String email;
    private String password;
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getNickname() {
        return nickname;
    }
    public void setNickname(String nickname) {
        this.nickname = nickname;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
}
