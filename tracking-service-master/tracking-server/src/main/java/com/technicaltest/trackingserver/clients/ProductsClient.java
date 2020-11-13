package com.technicaltest.trackingserver.clients;

import com.technicaltest.trackingserver.model.Product;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;
import java.util.Map;

@FeignClient(name = "product-service")
public interface ProductsClient {

    @GetMapping
    ResponseEntity<List<Product>> getProducts();

    @PostMapping
    ResponseEntity<Product> createProduct(Product product);
}
