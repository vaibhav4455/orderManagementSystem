package com.moglix.JavaProject.service;

import com.moglix.JavaProject.dto.Orders;
import com.moglix.JavaProject.repository.OrdersDao;

public class OrdersService {
	
	OrdersDao orderdao =new OrdersDao();
	
public String addOrder(Orders order) {
		
		return orderdao.addOrder(order);
		
	}
	
	public Orders getOrderById(String empId) {
		return orderdao.getOrderById(empId);
		
	}
	
	public Orders[] getOrders() {
		return orderdao.getOrders();
		
	}
	public void deleteAllOrder() {
		 orderdao.deleteAllOrder();
	}
	
	
	public String deleteOrderById(String id) {
		return orderdao.deleteOrderById(id);
	}
	
	public String updateOrder(String empId, Orders order) {
		return orderdao.updateOrder(empId, order);
		
	}

}
