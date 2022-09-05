package com.example.usersmanagerbackend.entity;

import javax.persistence.* ;
import java.time.LocalDate;

@Entity
@Table(name = "Users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "surname")
    private String surname;

    @Column(name = "registration_date")
    private LocalDate registrationDate;

    @Column(name = "premium")
    private Boolean premium;

    public User(){};

    public User(Long id, String name, String surname, LocalDate registrationDate, Boolean premium) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.registrationDate = registrationDate;
        this.premium = premium;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public LocalDate getRegistrationDate() {
        return registrationDate;
    }

    public void setRegistrationDate(LocalDate registrationDate) {
        this.registrationDate = registrationDate;
    }

    public Boolean getPremium() {
        return premium;
    }

    public void setPremium(Boolean premium) {
        this.premium = premium;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", surname='" + surname + '\'' +
                ", registrationDate=" + registrationDate +
                ", premium=" + premium +
                '}';
    }
}
