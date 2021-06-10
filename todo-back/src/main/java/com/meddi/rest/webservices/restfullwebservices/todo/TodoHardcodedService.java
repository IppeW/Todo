package com.meddi.rest.webservices.restfullwebservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardcodedService {
	
	private static List<Todo> todos = new ArrayList<>();
	private static long idCounter = 0;
	
	static {
		todos.add(new Todo(++idCounter, "Meddi", "J'ai du mal a comprendre", new Date(), false));
		todos.add(new Todo(++idCounter, "Hiro", "It's my BirthDay", new Date(), false));
		todos.add(new Todo(++idCounter, "Charlotte", "J'ai mal partout", new Date(), false));
	}
	
	public List<Todo> findAll(){
		return todos;
	}
	
	public Todo save(Todo todo){
		if (todo.getId()==-1 || todo.getId()==0) {
			todo.setId(++idCounter);
			todos.add(todo);
		} else {
			deleteById(todo.getId());
			todos.add(todo);
		}
		return todo;
	}
	
	public Todo deleteById(long id){
		Todo todo = findById(id);
		if(todo == null) return null;
		if(todos.remove(todo)){
			return todo;
		}
		return null;
	}
	
	Todo findById(long id) {
		for(Todo todo:todos){
			if(todo.getId()== id){
				return todo;
			}
		}
		return null;
	}
}
