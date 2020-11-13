package com.kubbo.technicaltest.productservice.mapper;

import com.kubbo.technicaltest.productservice.dto.ProductDTO;
import com.kubbo.technicaltest.productservice.model.Product;
import org.springframework.stereotype.Component;

import java.util.function.Function;

@Component
public class ProductModeltoProductDTOMapper implements Function<Product, ProductDTO> {

    public ProductDTO apply(Product product) {
        ProductDTO productDTO = new ProductDTO();

        if(product.getId() != null) {
            productDTO.setId(product.getId());
        }

        if(product.getName() != null) {
            productDTO.setName(product.getName());
        }

        if(product.getSku() != null) {
            productDTO.setSku(product.getSku());
        }

        if(product.getPrice() != null) {
            productDTO.setPrice(product.getPrice());
        }

        if(product.getBarcode() != null) {
            productDTO.setBarcode(product.getBarcode());
        }

        if(product.getImage() != null) {
            productDTO.setImage(product.getImage());
        }

        if(product.getEnabled() != null) {
            productDTO.setEnabled(product.getEnabled());
        }

        return productDTO;
    }
}
