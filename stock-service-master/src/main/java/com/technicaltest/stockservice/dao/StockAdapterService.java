package com.technicaltest.stockservice.dao;

import com.technicaltest.stockservice.model.Stock;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface StockAdapterService extends CrudRepository<Stock, Long> {

    List<Stock> findAll();

    Stock findById(long id);

    List<Stock> findByIdProduct(long idProduct);
}
