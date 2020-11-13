package com.technicaltest.warehouseservice.service;

import com.technicaltest.warehouseservice.dao.WarehouseAdapterService;
import com.technicaltest.warehouseservice.dto.WarehouseDTO;
import com.technicaltest.warehouseservice.mapper.WarehouseDTOtoWarehouseModelMapper;
import com.technicaltest.warehouseservice.mapper.WarehouseListToWarehouseListDTOMapper;
import com.technicaltest.warehouseservice.mapper.WarehouseModeltoWarehouseDTOMapper;
import com.technicaltest.warehouseservice.model.Warehouse;
import org.springframework.beans.factory.annotation.Autowired;

import javax.inject.Inject;
import javax.inject.Named;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Named("warehouseService")
public class WarehouseService {

    @Inject
    private WarehouseAdapterService warehouseAdapterService;

    @Inject
    private WarehouseModeltoWarehouseDTOMapper toWarehouseDTO;

    @Inject
    private WarehouseDTOtoWarehouseModelMapper toWarehouseModel;

    @Inject
    private WarehouseListToWarehouseListDTOMapper toWarehouseList;

    public WarehouseDTO getWarehouseById(String id) {
        Optional<Warehouse> warehouse = warehouseAdapterService.findById(Long.valueOf(id));
        WarehouseDTO warehouseDTO = toWarehouseDTO.apply(warehouse.get());

        return warehouseDTO;
    }

    public WarehouseDTO saveWarehouse(WarehouseDTO warehouseRQ) {
        Warehouse warehouse = toWarehouseModel.apply(warehouseRQ);
        warehouse = warehouseAdapterService.save(warehouse);

        WarehouseDTO warehouseRS = toWarehouseDTO.apply(warehouse);

        return warehouseRS;
    }

    public List<WarehouseDTO> getWarehouses() {

        List<Warehouse> warehouses = warehouseAdapterService.findAll();
        List<WarehouseDTO> warehousesDTO = toWarehouseList.apply(warehouses);

        return warehousesDTO;
    }
}
