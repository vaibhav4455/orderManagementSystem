package com.moglix.JavaProject.Controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.moglix.JavaProject.dto.Orders;
import com.moglix.JavaProject.service.OrdersServiceIn;


@RestController
@RequestMapping("/api")
public class OrderController {
	
	@Autowired
	OrdersServiceIn ordersServiceIn;
	
	@GetMapping("/hello")
	private String sayHello() {
		// TODO Auto-generated method stub
		return "hello from vaibhav";
	}
	
	@PostMapping("/add")
	public Orders addOrder(@RequestBody Orders orders) {
		return ordersServiceIn.addOrder(orders);
	}
	
	
	@GetMapping("/order/{id}")
	public Orders getOrderById(@PathVariable("id") String id) {
		return ordersServiceIn.getOrderById(id);
	}
	
	@GetMapping("/all")
	public List<Orders> getAll(){
		return ordersServiceIn.getOrders();
	}
	
	@DeleteMapping("/deleteById/{id}")
	public String deleteById(@PathVariable("id") String id)
	{
		return ordersServiceIn.deleteOrderById(id);
	}
	
	@DeleteMapping("/deleteAll")
	public void deleteAll() {
		this.ordersServiceIn.deleteAllOrder();
	}
	
	@PostMapping("/update/{id}")
	public Orders updateEmployee(@RequestBody Orders orders,@PathVariable("id") String id ) {
		return ordersServiceIn.updateOrder(id,orders);
		
	}
	
	

	}
	


