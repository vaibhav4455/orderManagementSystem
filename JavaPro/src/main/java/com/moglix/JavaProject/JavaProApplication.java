package com.moglix.JavaProject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.moglix.JavaProject.dto.Orders;
import com.moglix.JavaProject.service.OrdersService;
import com.moglix.JavaProject.service.OrdersServiceIn;

@SpringBootApplication
public class JavaProApplication {

	public static void main(String[] args) {
//		          ApplicationContext applicationContext= 
		        SpringApplication.run(JavaProApplication.class, args);
		          
//		          OrdersServiceIn ordersService = applicationContext.getBean(OrdersServiceIn.class);		          
	           
//		          String result = ordersService.addOrder(new Orders("004", "001", "001", "001", "A", 2000, 5000));
//		           System.out.println(result);
//		          
//		       String re  = ordersService.deleteOrderById("004");
//		       System.out.println(re);
	}

}
