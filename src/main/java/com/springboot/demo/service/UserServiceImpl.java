package com.springboot.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.demo.dao.UserDao;
import com.springboot.demo.domain.ShipFromToDomain;

/**
 * 
 * @author Robert Jenifer Vilbert Jul 24, 2017 12:04:35 AM 12:04:35 AM
 *         UserServiceImpl.java
 */
@Service
public class UserServiceImpl implements UserSevice {

	@Autowired
	private UserDao userDao;

	@Override
	public boolean postalValidate(ShipFromToDomain shipFromToDomain) {
		return userDao.postalValidate(shipFromToDomain);
	}

	@Override
	public boolean CityValidate(ShipFromToDomain shipFromToDomain) {
		return userDao.CityValidate(shipFromToDomain);
	}

}
