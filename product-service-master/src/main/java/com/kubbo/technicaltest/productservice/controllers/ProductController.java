package com.kubbo.technicaltest.productservice.controllers;

import com.kubbo.technicaltest.productservice.dto.ProductDTO;
import com.kubbo.technicaltest.productservice.service.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.inject.Inject;

@RestController
public class ProductController {

    private static final Logger LOGGER = Logger.getLogger(ProductController.class.getName());

    @Inject
    private ProductService productService;

    @GetMapping
    public ResponseEntity<List<ProductDTO>> getProducts(){

        try {
            List<ProductDTO> products = productService.getProducts();
            return ResponseEntity.ok(products);
        } catch(Exception e) {
            LOGGER.log(Level.SEVERE, e.getMessage(), e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping
    public ResponseEntity<ProductDTO> createProduct(@RequestBody ProductDTO productRQ){

        try {
            ProductDTO productRS = productService.saveProduct(productRQ);
            return ResponseEntity.ok(productRS);
        } catch(Exception e) {
            LOGGER.log(Level.SEVERE, e.getMessage(), e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
