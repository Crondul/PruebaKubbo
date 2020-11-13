package com.technicaltest.stockservice.client;

import com.technicaltest.stockservice.dto.WarehouseDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Map;

@FeignClient(name = "warehouse-service")
public interface WarehousesClient {

    @RequestMapping("/getWarehouseById")
    ResponseEntity<WarehouseDTO> getWarehouseById(@RequestParam("idWarehouse") String idWarehouse);
}
