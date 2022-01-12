package com.jhonwayne01.dsmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jhonwayne01.dsmovie.dto.MovieDTO;
import com.jhonwayne01.dsmovie.dto.ScoreDTO;
import com.jhonwayne01.dsmovie.entities.Movie;
import com.jhonwayne01.dsmovie.entities.Score;
import com.jhonwayne01.dsmovie.entities.User;
import com.jhonwayne01.dsmovie.repositories.MovieRepository;
import com.jhonwayne01.dsmovie.repositories.ScoreRepository;
import com.jhonwayne01.dsmovie.repositories.UserRepository;

@Service
public class ScoreService {

	@Autowired
	private MovieRepository movierepository;
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private ScoreRepository scoreRepository;
	
	@Transactional
	public MovieDTO saveScore(ScoreDTO dto) {
		
		User user = userRepository.findByEmail(dto.getEmail());
		if (user == null) {
			user = new User();
			user.setEmail(dto.getEmail());
			user = userRepository.saveAndFlush(user);									
		}			
		
		Movie movie = movierepository.findById(dto.getMovieId()).get();
		
		Score score = new Score();		
		score.setMovie(movie);
		score.setUser(user);
		score.setValue(dto.getScore());
		score = scoreRepository.saveAndFlush(score);
		
		double soma = 0.0;
		for(Score s : movie.getScores()) {
			soma += s.getValue();
		}
		
		double avg = soma / movie.getScores().size();
		
		movie.setScore(avg);
		movie.setCount(movie.getScores().size());
		movie = movierepository.save(movie);
		
		return new MovieDTO(movie);
	}
}
