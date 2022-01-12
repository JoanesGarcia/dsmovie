package com.jhonwayne01.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jhonwayne01.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long>{

}
