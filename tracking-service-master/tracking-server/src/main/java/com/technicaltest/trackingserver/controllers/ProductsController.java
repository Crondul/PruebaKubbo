package com.technicaltest.trackingserver.controllers;

import com.netflix.config.ConfigurationManager;
import com.technicaltest.trackingserver.clients.ProductsClient;
import com.technicaltest.trackingserver.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/gui/products")
public class ProductsController {

    @Autowired
    private ProductsClient productsClient;

    @PostConstruct
    public void init() throws IOException {
        ConfigurationManager.loadPropertiesFromResources("application.properties");
    }

    @GetMapping
    public ResponseEntity<List<Product>> getProducts(){
        return productsClient.getProducts();
    }

    @PostMapping
    public ResponseEntity<Product> createProduct(@RequestBody Product productRQ){
        return productsClient.createProduct(productRQ);
    }
}
