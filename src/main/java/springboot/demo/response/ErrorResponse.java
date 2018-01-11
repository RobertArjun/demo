package springboot.demo.response;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ErrorResponse implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -1331291886548175199L;
	
	private String vaild;

	public String getVaild() {
		return vaild;
	}

	public void setVaild(String vaild) {
		this.vaild = vaild;
	}
	
	

}
