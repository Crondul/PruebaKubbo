package com.technicaltest.warehouseservice.mapper;

import com.technicaltest.warehouseservice.dto.WarehouseDTO;
import com.technicaltest.warehouseservice.model.Warehouse;
import org.springframework.stereotype.Component;

import java.util.function.Function;

@Component
public class WarehouseDTOtoWarehouseModelMapper implements Function<WarehouseDTO, Warehouse> {

    public Warehouse apply(WarehouseDTO warehouseDTO) {
        Warehouse warehouse = null;

        if(warehouseDTO != null) {
            warehouse = new Warehouse(warehouseDTO.getName(), warehouseDTO.getCity());
        }

        return warehouse;
    }
}
