package com.meddi.rest.webservices.restfullwebservices.jwt.resource;

import java.io.Serializable;

public class  JwtTokenRequest implements Serializable {
  
  private static final long serialVersionUID = -5616176897013108345L;

  private String username;
    private String password;

  //  	{
  //  	"token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtZWRkaSIsImV4cCI6MTYyMjU3NTU2NCwiaWF0IjoxNjIxOTcwNzY0fQ.C-aEHejrnprdq8HN_NsFJcAyYEo9SFJNuiI961d3P6LRs-3zN9lHq63mPNK3-5wp81WO8Vd2165UmzIsHwrQNA"
  //  	}
    
    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

