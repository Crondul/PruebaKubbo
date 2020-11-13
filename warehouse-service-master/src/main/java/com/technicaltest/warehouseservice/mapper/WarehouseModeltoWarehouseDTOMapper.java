package com.technicaltest.warehouseservice.mapper;

import com.technicaltest.warehouseservice.dto.WarehouseDTO;
import com.technicaltest.warehouseservice.model.Warehouse;
import org.springframework.stereotype.Component;

import java.util.function.Function;

@Component
public class WarehouseModeltoWarehouseDTOMapper implements Function<Warehouse, WarehouseDTO> {

    public WarehouseDTO apply(Warehouse warehouse) {
        WarehouseDTO warehouseDTO = new WarehouseDTO();

        if(warehouse.getId() != null) {
            warehouseDTO.setId(warehouse.getId());
        }

        if(warehouse.getName() != null) {
            warehouseDTO.setName(warehouse.getName());
        }

        if(warehouse.getCity() != null) {
            warehouseDTO.setCity(warehouse.getCity());
        }

        return warehouseDTO;
    }
}
