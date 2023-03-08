package com.springcrud.crud.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springcrud.crud.model.User;

public interface UserDao extends JpaRepository<User, Long> {	

}
