package com.springboot.demo.service;

import com.springboot.demo.domain.ShipFromToDomain;

/**
 * 
 * @author Robert Jenifer Vilbert Jul 24, 2017 12:04:17 AM 12:04:17 AM
 *         UserSevice.java
 */
public interface UserSevice {

	public boolean postalValidate(ShipFromToDomain shipFromToDomain);

	public boolean CityValidate(ShipFromToDomain shipFromToDomain);

}
