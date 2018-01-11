package com.springboot.demo.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "country_details")
public class CountryDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long country_details_id;

	private String country_city;

	private String country_zip;

	@ManyToOne
	private Country country;

	public CountryDetails() {
	}

	public CountryDetails(long country_details_id, String country_city, String country_zip) {
		this.country_details_id = country_details_id;
		this.country_city = country_city;
		this.country_zip = country_zip;
	}

	public long getCountry_details_id() {
		return country_details_id;
	}

	public void setCountry_details_id(long country_details_id) {
		this.country_details_id = country_details_id;
	}

	public String getCountry_city() {
		return country_city;
	}

	public void setCountry_city(String country_city) {
		this.country_city = country_city;
	}

	public String getCountry_zip() {
		return country_zip;
	}

	public void setCountry_zip(String country_zip) {
		this.country_zip = country_zip;
	}

	public Country getCountry() {
		return country;
	}

	public void setCountry(Country country) {
		this.country = country;
	}

}
