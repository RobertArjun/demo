package springboot.demo.response;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class SuccessResponse implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 2514812464225841952L;
	private long code;
	private boolean status;
	private String description;
	private String date;
	
	@JsonProperty("code")
	public long getCode() {
		return code;
	}

	public void setCode(long code) {
		this.code = code;
	}
	@JsonProperty("status")
	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}
	@JsonProperty("description")
	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	@JsonProperty("timestamp")
	public String getDate() {
		return date;
	}

	public void setDate(String string) {
		this.date = string;
	}

}
