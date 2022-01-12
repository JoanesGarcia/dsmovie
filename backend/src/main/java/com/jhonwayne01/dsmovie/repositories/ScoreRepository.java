package com.jhonwayne01.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jhonwayne01.dsmovie.entities.Score;
import com.jhonwayne01.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK>{

}
