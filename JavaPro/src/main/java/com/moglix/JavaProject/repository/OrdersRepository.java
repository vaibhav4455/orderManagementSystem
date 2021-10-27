package com.moglix.JavaProject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.moglix.JavaProject.dto.Orders;

@Repository
public interface OrdersRepository extends JpaRepository<Orders, String>  {
	
	

}
