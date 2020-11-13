package com.technicaltest.warehouseservice.dao;

import com.technicaltest.warehouseservice.model.Warehouse;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface WarehouseAdapterService extends CrudRepository<Warehouse, Long> {

    List<Warehouse> findAll();

    Warehouse findById(long id);
}
