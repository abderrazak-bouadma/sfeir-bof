package com.sfeir.domain;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.google.appengine.api.datastore.Key;

@Entity
public class Talk {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Key key;
    private String subject;
    private String description;
    
    @OneToMany(cascade = CascadeType.PERSIST, mappedBy = "talk")
    private List<Attender> speakers;
    private List<String> tags;
    private String gitHubLink;
    private String slideShareLink;
    
    @ManyToOne
    private Conference conference;

    public Key getKey() {
        return key;
    }

    public void setKey(Key key) {
        this.key = key;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Attender> getSpeakers() {
        return speakers;
    }

    public void setSpeakers(List<Attender> speakers) {
        this.speakers = speakers;
    }

    public List<String> getTags() {
        return tags;
    }

    public void setTags(List<String> tags) {
        this.tags = tags;
    }

    public String getGitHubLink() {
        return gitHubLink;
    }

    public void setGitHubLink(String gitHubLink) {
        this.gitHubLink = gitHubLink;
    }

    public String getSlideShareLink() {
        return slideShareLink;
    }

    public void setSlideShareLink(String slideShareLink) {
        this.slideShareLink = slideShareLink;
    }

    public Conference getConference() {
        return conference;
    }

    public void setConference(Conference conference) {
        this.conference = conference;
    }
 

}
