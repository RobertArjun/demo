package com.springboot.demo.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.springboot.demo.domain.ShipFromToDomain;
import com.springboot.demo.models.Country;
import com.springboot.demo.models.CountryDetails;

/**
 * 
 * @author Robert Jenifer Vilbert Jul 24, 2017 12:05:38 AM 12:05:38 AM
 *         UserDaoImpl.java
 */
@Repository
@Transactional
public class UserDaoImpl implements UserDao {
	// An EntityManager will be automatically injected from entityManagerFactory
	// setup on DatabaseConfig class.
	@PersistenceContext
	private EntityManager entityManager;

	private static final String GET_COUNTRY_LIST = "from Country where country_code = ? and status = ?";
	private static final String GET_COUNTRY_DETAILS_LIST_BY_POSTAL = "from CountryDetails where country_country_id = ? and country_zip = ?";
	private static final String GET_COUNTRY_DETAILS_LIST_BY_CITY = "from CountryDetails where country_country_id = ? and country_city = ?";

	@SuppressWarnings("unchecked")
	@Override
	public boolean postalValidate(ShipFromToDomain shipFromToDomain) {
		Query q = null, q1 = null;
		boolean valid = false;
		try {

			q = entityManager.createQuery(GET_COUNTRY_LIST);
			q.setParameter(1, shipFromToDomain.getCountryCode());
			q.setParameter(2, "Active");
			List<Country> countryList = (List<Country>) q.getResultList();
			if (countryList.size() > 0) {
				q1 = entityManager.createQuery(GET_COUNTRY_DETAILS_LIST_BY_POSTAL);
				q1.setParameter(1, countryList.get(0).getCountry_id());
				q1.setParameter(2, shipFromToDomain.getPostalCode());
				List<CountryDetails> countryDetailsList = (List<CountryDetails>) q1.getResultList();
				if (countryDetailsList.size() > 0)
					valid = true;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return valid;
	}

	@SuppressWarnings("unchecked")
	@Override
	public boolean CityValidate(ShipFromToDomain shipFromToDomain) {
		Query q = null, q1 = null;
		boolean valid = false;
		try {

			q = entityManager.createQuery(GET_COUNTRY_LIST);
			q.setParameter(1, shipFromToDomain.getCountryCode());
			q.setParameter(2, "Active");
			List<Country> countryList = (List<Country>) q.getResultList();
			System.out.println("countryList.size()" + countryList.size());
			if (countryList.size() > 0) {
				q1 = entityManager.createQuery(GET_COUNTRY_DETAILS_LIST_BY_CITY);
				q1.setParameter(1, countryList.get(0).getCountry_id());
				q1.setParameter(2, shipFromToDomain.getCity());
				List<CountryDetails> countryDetailsList = (List<CountryDetails>) q1.getResultList();
				if (countryDetailsList.size() > 0)
					valid = true;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return valid;
	}
}
