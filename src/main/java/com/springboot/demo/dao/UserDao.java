package com.springboot.demo.dao;

import com.springboot.demo.domain.ShipFromToDomain;

/**
 * 
 * @author Robert Jenifer Vilbert Jul 24, 2017 12:05:20 AM 12:05:20 AM
 *         UserDao.java
 */
public interface UserDao {
	public boolean postalValidate(ShipFromToDomain shipFromToDomain);

	public boolean CityValidate(ShipFromToDomain shipFromToDomain);

}
