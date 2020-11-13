package com.technicaltest.stockservice.controllers;

import com.technicaltest.stockservice.dto.StockDTO;
import com.technicaltest.stockservice.service.StockService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;

@RestController
public class StockController {

    private static final Logger LOGGER = Logger.getLogger(StockController.class.getName());

    @Inject
    private StockService stockService;

    @GetMapping
    public ResponseEntity<List<StockDTO>> getStocks(@RequestParam String idProduct){

        try {
            List<StockDTO> stocks = stockService.getStocksByIdProduct(idProduct);
            return ResponseEntity.ok(stocks);
        } catch(Exception e) {
            LOGGER.log(Level.SEVERE, e.getMessage(), e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping
    public ResponseEntity<StockDTO> createStock(@RequestBody StockDTO stockRQ){

        try {
            StockDTO stockRS = stockService.saveStock(stockRQ);
            return ResponseEntity.ok(stockRS);
        } catch(Exception e) {
            LOGGER.log(Level.SEVERE, e.getMessage(), e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
