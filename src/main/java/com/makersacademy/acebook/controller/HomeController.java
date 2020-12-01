package com.makersacademy.acebook.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class HomeController {

	@GetMapping(value = "/")
	public String index() {
		return "index";
	}

	// @PostMapping(value = "/")
	// public String index() {
	// 	return "index";
	// }

}
