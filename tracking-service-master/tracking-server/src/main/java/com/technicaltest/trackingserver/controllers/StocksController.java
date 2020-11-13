package com.technicaltest.trackingserver.controllers;

import com.technicaltest.trackingserver.clients.ProductsClient;
import com.technicaltest.trackingserver.clients.StocksClient;
import com.technicaltest.trackingserver.model.Product;
import com.technicaltest.trackingserver.model.Stock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/gui/stocks")
public class StocksController {

    @Autowired
    private StocksClient stocksClient;

    @GetMapping
    public ResponseEntity<List<Stock>> getStocks(@RequestParam String idProduct){
        return stocksClient.getStocks(idProduct);
    }

    @PostMapping
    public ResponseEntity<Stock> createStock(@RequestBody Stock stockRQ){
        return stocksClient.createStock(stockRQ);
    }
}
