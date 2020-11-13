package com.technicaltest.warehouseservice.controllers;

import com.technicaltest.warehouseservice.dto.WarehouseDTO;
import com.technicaltest.warehouseservice.service.WarehouseService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

@RestController
public class WarehouseController {

    private static final Logger LOGGER = Logger.getLogger(WarehouseController.class.getName());

    @Inject
    WarehouseService warehouseService;

    @RequestMapping("/getWarehouseById")
    ResponseEntity<WarehouseDTO> getWarehouseById(@RequestParam String idWarehouse){
        try {
            WarehouseDTO warehouse = warehouseService.getWarehouseById(idWarehouse);
            return ResponseEntity.ok(warehouse);
        } catch(Exception e) {
            LOGGER.log(Level.SEVERE, e.getMessage(), e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping
    ResponseEntity<List<WarehouseDTO>> getWarehouses(){
        try {
            List<WarehouseDTO> warehouse = warehouseService.getWarehouses();
            return ResponseEntity.ok(warehouse);
        } catch(Exception e) {
            LOGGER.log(Level.SEVERE, e.getMessage(), e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping
    public ResponseEntity<WarehouseDTO> createWarehouse(@RequestBody WarehouseDTO warehouseRQ){

        try {
            WarehouseDTO warehouseRS = warehouseService.saveWarehouse(warehouseRQ);
            return ResponseEntity.ok(warehouseRS);
        } catch(Exception e) {
            LOGGER.log(Level.SEVERE, e.getMessage(), e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
