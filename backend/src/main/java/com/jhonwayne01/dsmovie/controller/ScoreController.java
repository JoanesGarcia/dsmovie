package com.jhonwayne01.dsmovie.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jhonwayne01.dsmovie.dto.MovieDTO;
import com.jhonwayne01.dsmovie.dto.ScoreDTO;
import com.jhonwayne01.dsmovie.services.ScoreService;

@RestController
@RequestMapping(value = "/scores")
public class ScoreController {
	
	@Autowired
	private ScoreService service;
		
	@PutMapping()
	public MovieDTO sabeScore(@RequestBody ScoreDTO dto){			
		MovieDTO movieDTO = service.saveScore(dto);
		return movieDTO;
	}

}
