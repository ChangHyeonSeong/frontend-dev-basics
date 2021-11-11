package com.douzone.ch08.controller.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.douzone.ch08.controller.vo.GuestbookVo;

@Controller
@RequestMapping("/api")
public class ApiController {
	
	@ResponseBody
	@RequestMapping("/text")
	public String text() {
		return "Text 데이타";
	}
	
	@RequestMapping("/html")
	public String html() {
		return "html";
	}
	
	@ResponseBody
	@RequestMapping("/xml")
	public Object xml() {
		GuestbookVo vo = new GuestbookVo();
		vo.setNo(1L);
		vo.setName("둘리");
		vo.setMessage("호이~");
		
		return vo;
	}
	
}
