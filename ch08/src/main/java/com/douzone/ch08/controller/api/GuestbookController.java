package com.douzone.ch08.controller.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.douzone.ch08.controller.dto.JsonResult;
import com.douzone.ch08.controller.vo.GuestbookVo;

@Controller
@RequestMapping("/api/guestbook")
public class GuestbookController {
	
	@ResponseBody
	@RequestMapping("/add")
	public JsonResult ex1(@RequestBody GuestbookVo vo){
		// guestbookService.addMessage(vo)를 사용해서 등록작업
		vo.setNo(1L);
		vo.setPassword("");
		
		return JsonResult.success(vo);
	}
}
