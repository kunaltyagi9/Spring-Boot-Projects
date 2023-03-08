package com.springcrud.crud.services;

import java.util.List;

import com.springcrud.crud.model.User;

public interface UserService {
	
	public List<User> getUsers();
	
	public User getUser(long userId);
	
	public User addUser(User user);
	
	public User updateUser(User user);
	
	public User deleteUser(long userId);
}