package com.springboot.demo.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "country")
public class Country {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long country_id;
	
	@NotNull
	private String country_code;
	
	@NotNull
	private String status;

	public Country() {
	}

	public Country(long country_id) {
		this.country_id = country_id;
	}

	public Country(long country_id, String country_code, String status) {
		this.country_id = country_id;
		this.country_code = country_code;
		this.status = status;
	}

	public long getCountry_id() {
		return country_id;
	}

	public void setCountry_id(long country_id) {
		this.country_id = country_id;
	}

	public String getCountry_code() {
		return country_code;
	}

	public void setCountry_code(String country_code) {
		this.country_code = country_code;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

}
