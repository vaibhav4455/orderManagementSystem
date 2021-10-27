package com.moglix.JavaProject.service;

import java.util.List;

import com.moglix.JavaProject.dto.Orders;

public interface OrdersServiceIn {
	
	public Orders addOrder(Orders order);
	public Orders getOrderById(String id);
	public List<Orders> getOrders();
	public String deleteOrderById(String id);
	public Orders updateOrder(String id , Orders order);
	public void deleteAllOrder();

}
