package com.technicaltest.trackingserver.clients;

import com.technicaltest.trackingserver.model.Product;
import com.technicaltest.trackingserver.model.Stock;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Map;

@FeignClient(name = "stock-service")
public interface StocksClient {

    @GetMapping
    ResponseEntity<List<Stock>> getStocks(@RequestParam("idProduct") String idProduct);

    @PostMapping
    ResponseEntity<Stock> createStock(Stock stock);
}
