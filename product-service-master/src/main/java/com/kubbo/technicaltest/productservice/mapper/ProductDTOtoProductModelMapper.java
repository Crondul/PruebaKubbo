package com.kubbo.technicaltest.productservice.mapper;

import com.kubbo.technicaltest.productservice.dto.ProductDTO;
import com.kubbo.technicaltest.productservice.model.Product;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.function.Function;

@Component
public class ProductDTOtoProductModelMapper implements Function<ProductDTO, Product> {

    public Product apply(ProductDTO productDTO) {
        Product product = null;

        if(productDTO != null) {
            product = new Product(productDTO.getName(), productDTO.getSku(), productDTO.getBarcode(), productDTO.getImage(), productDTO.getPrice(), true);
        }

        return product;
    }
}
