package com.moglix.JavaProject.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.moglix.JavaProject.dto.Orders;
import com.moglix.JavaProject.repository.OrdersRepository;

@Component
public class OrdersServiceImpl implements OrdersServiceIn {
	
	@Autowired
	OrdersRepository ordDao;
//	OrdersRepository ordDao = OrdersRepositoryImpl.getInstance();
//	
//	private static  OrdersServiceIn ordersServices;
//	private OrdersServiceImpl() {
//		// TODO Auto-generated constructor stub
//	}
//	
//	public static OrdersServiceIn getInstace() {
//		if(ordersServices == null) {
//			ordersServices = new OrdersServiceImpl();
//			return ordersServices;
//		}
//		else {
//			return ordersServices;
//		}
//	}
	
	
	public Orders addOrder(Orders order) {
		   Orders  orders = ordDao.save(order);
		   if (orders!= null) {
			   return orders;
		   }
		   else
		   {
			   return null;	
		}
	}


	@Override
	public Orders getOrderById(String id) {
		// TODO Auto-generated method stub
	        Optional<Orders> optional = ordDao.findById(id);
	        if (optional.isPresent()) {
	        	return optional.get();
	        }
	        return null;
				
	}


	@Override
	public List<Orders> getOrders() {
		// TODO Auto-generated method stub
		return ordDao.findAll();
	}


	@Override
	public String deleteOrderById(String id) {
		// TODO Auto-generated method stub
		    try {
				ordDao.deleteById(id);
				return "sucesssss";
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		return null;
	}


	@Override
	public Orders updateOrder(String id, Orders order) {
		// TODO Auto-generated method stub
		if(getOrderById(id)!= null) {
			return addOrder(order);
		}
		else {
		return null;
	}
	}


	@Override
	public void deleteAllOrder() {
		// TODO Auto-generated method stub
		System.out.println("All deleted");
		ordDao.deleteAll();
		
	}


//public void deleteAllOrder() {
//	ordDao.deleteAllOrder();
//	
//}
//
//
//public String deleteOrderById(String id) {
//	return ordDao.deleteOrderById(id);
//
//}
//
//
//public Orders getOrderById(String id) {
//	return ordDao.getOrderById(id);
//
//}
//
//
//public List<Orders> getOrders() {
//	return ordDao.getOrders();
//
//}
//
//
//public String updateOrder(String id, Orders order) {
//	return ordDao.updateOrder(id, order);
//
//}

}
