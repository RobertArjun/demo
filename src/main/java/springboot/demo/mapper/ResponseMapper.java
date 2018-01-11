package springboot.demo.mapper;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;

import springboot.demo.response.SuccessResponse;

public class ResponseMapper {
	private static final SimpleDateFormat sdf = new SimpleDateFormat("yyyy.MM.dd.HH.mm.ss");
	private static final String POSTAL_CODE = "PostalCode/ZipCode";
	private static final String CITY = "City";

	public static SuccessResponse setPostalSuccessResponse(boolean status) {
		SuccessResponse response = null;
		response = setResponse(status, POSTAL_CODE);
		return response;
	}

	private static SuccessResponse setResponse(boolean status, String value) {
		SuccessResponse response = new SuccessResponse();
		Timestamp timestamp = new Timestamp(System.currentTimeMillis());

		if (status) {
			response.setCode(11111);
			response.setStatus(true);
			response.setDate(sdf.format(timestamp));
			response.setDescription("Valid " + value);
		} else {
			response = new SuccessResponse();
			response.setCode(00000);
			response.setDate(sdf.format(timestamp));
			response.setDescription("Invalid " + value);
		}
		return response;
	}

	public static SuccessResponse setCitySuccessResponse(boolean status) {
		SuccessResponse response = null;
		response = setResponse(status, CITY);
		return response;
	}

}
