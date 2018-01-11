package com.springboot.demo.domain;

import java.io.Serializable;
/**
 * 
 * @author Robert Jenifer Vilbert
 * Jul 05, 2017 12:02:38 AM 12:02:38 AM 
 * UserDomain.java
 */
public class UserDomain implements Serializable {
	private static final long serialVersionUID = 5121784553873678901L;
	private String name;
	private String email;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public UserDomain(String name, String email) {
		super();
		this.name = name;
		this.email = email;
	}

	@Override
	public String toString() {
		return "UserDomain [name=" + name + ", email=" + email + "]";
	}

}
