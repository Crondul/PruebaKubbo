package com.kubbo.technicaltest.productservice.dao;

import com.kubbo.technicaltest.productservice.model.Product;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ProductAdapterService extends CrudRepository<Product, Long> {

    List<Product> findAll();

    Product findById(long id);
}
