package com.douzone.ch08.controller.dto;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name="response")//xml 안에 response 태그
public class XmlResult {
	private String result;  /* "success" or "fail" */
	private GuestbookVo data;    /* if success, set */
	private String message; /* if fail, set */
	
	private XmlResult() {};
	private XmlResult(GuestbookVo data) {
		this.result = "success";
		this.data = data; 
	};
	private XmlResult(String message) {
		this.result = "fail";
		this.message = message; 
	};
	
	public static XmlResult success(GuestbookVo data) {
		return new XmlResult(data);
	}
	
	public static XmlResult fail(String message) {
		return new XmlResult(message);
	}
	
	public String getResult() {
		return result;
	}
	public GuestbookVo getData() {
		return data;
	}
	public String getMessage() {
		return message;
	}
	
	public void setResult(String result) {
		this.result = result;
	}
	public void setData(GuestbookVo data) {
		this.data = data;
	}
	public void setMessage(String message) {
		this.message = message;
	}

	@XmlRootElement(name="data")//xml 안에 data 태그
	public static class GuestbookVo {
		private Long no;
	     private String name;
	     private String password;
	     private String message;
	     private String regDate;
	     
		public Long getNo() {
			return no;
		}
		public void setNo(Long no) {
			this.no = no;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public String getMessage() {
			return message;
		}
		public void setMessage(String message) {
			this.message = message;
		}
		public String getRegDate() {
			return regDate;
		}
		public void setRegDate(String regDate) {
			this.regDate = regDate;
		}
		
		@Override
		public String toString() {
			return "GuestbookVo [no=" + no + ", name=" + name + ", password=" + password + ", message=" + message
					+ ", regDate=" + regDate + "]";
		}
	}
}
