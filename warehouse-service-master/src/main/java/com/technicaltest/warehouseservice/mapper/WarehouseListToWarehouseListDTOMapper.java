package com.technicaltest.warehouseservice.mapper;

import com.technicaltest.warehouseservice.dto.WarehouseDTO;
import com.technicaltest.warehouseservice.model.Warehouse;
import org.springframework.stereotype.Component;

import javax.inject.Inject;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Function;

@Component
public class WarehouseListToWarehouseListDTOMapper implements Function<List<Warehouse>, List<WarehouseDTO>> {

    @Inject
    private WarehouseModeltoWarehouseDTOMapper toWarehouseDTO;

    @Override
    public List<WarehouseDTO> apply(List<Warehouse> warehouses) {
        List<WarehouseDTO> warehousesDTO = new ArrayList<>();

        for (Warehouse warehouse: warehouses) {
            WarehouseDTO warehouseDTO = toWarehouseDTO.apply(warehouse);

            warehousesDTO.add(warehouseDTO);
        }

        return warehousesDTO;

    }


}
