package com.springboot.demo.domain;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ShipFromToDomain implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 5019926252670988762L;

	private String countryCode;
	
	private String postalCode;
	
	private String city;
	
	private int validCode;
	
	@JsonProperty("countryCode")
	public String getCountryCode() {
		return countryCode;
	}

	public void setCountryCode(String countryCode) {
		this.countryCode = countryCode;
	}
	
	@JsonProperty("postalCode")
	public String getPostalCode() {
		return postalCode;
	}

	public void setPostalCode(String postalCode) {
		this.postalCode = postalCode;
	}
	
	@JsonProperty("city")
	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}
	
	@JsonProperty("validCode")
	public int getValidCode() {
		return validCode;
	}

	public void setValidCode(int validCode) {
		this.validCode = validCode;
	}

	@Override
	public String toString() {
		return "ShipFromToDomain [countryCode=" + countryCode + ", postalCode=" + postalCode + ", city=" + city + ",validCode=" + validCode +"]";
	}
	
	

}
