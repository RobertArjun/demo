package com.springboot.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.springboot.demo.domain.ShipFromToDomain;
import com.springboot.demo.service.UserSevice;

import springboot.demo.mapper.ResponseMapper;
import springboot.demo.response.SuccessResponse;

/**
 * 
 * @author Robert Jenifer Vilbert Jul 24, 2017 12:05:56 AM 12:05:56 AM
 *         UserController.java
 */
@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*", maxAge = 3600)
public class UserController {

	@Autowired
	private UserSevice userservice;

	@RequestMapping(value = "/postalvalidate", method = RequestMethod.POST)
	public ResponseEntity<?> zipcodeValidation(@RequestBody ShipFromToDomain shipFromToDomain)
			throws JsonProcessingException {
		// ObjectMapper mapper= new ObjectMapper();
		// return mapper.writeValueAsString(shipFromToDomain);
		boolean status = false;
		// ErrorResponse errorResponse= new ErrorResponse();
		SuccessResponse response = new SuccessResponse();

		HttpHeaders responseHeaders = new HttpHeaders();

		switch (shipFromToDomain.getValidCode()) {
		case 1:
			status = userservice.postalValidate(shipFromToDomain);
			response = ResponseMapper.setPostalSuccessResponse(status);
			return new ResponseEntity<SuccessResponse>(response, responseHeaders, HttpStatus.OK);
		
		case 2: 
			status = userservice.CityValidate(shipFromToDomain);
			response = ResponseMapper.setCitySuccessResponse(status);
			return new ResponseEntity<SuccessResponse>(response, responseHeaders, HttpStatus.OK);
		
		default:
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}
}
