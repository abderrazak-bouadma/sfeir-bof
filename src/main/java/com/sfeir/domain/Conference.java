package com.sfeir.domain;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.google.appengine.api.datastore.Key;

@Entity
public class Conference {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Key key;
    private Date date;
    private String name;
    @OneToMany(mappedBy = "conference")
    private List<Talk> talks;
    @OneToMany(mappedBy = "conference")
    private List<Attender> attendiees;

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Talk> getTalks() {
        return talks;
    }

    public void setTalks(List<Talk> talks) {
        this.talks = talks;
    }

    public List<Attender> getAttendiees() {
        return attendiees;
    }

    public void setAttendiees(List<Attender> attendiees) {
        this.attendiees = attendiees;
    }
}
