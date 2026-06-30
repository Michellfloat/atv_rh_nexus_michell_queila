package com.example.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.ClienteModel;



@Repository
public interface ClienteRepository extends JpaRepository<ClienteModel,Long>{
    Optional<ClienteModel>findByEmail(String email);
}
