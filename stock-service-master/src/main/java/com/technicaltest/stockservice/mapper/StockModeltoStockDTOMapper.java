package com.technicaltest.stockservice.mapper;

import com.technicaltest.stockservice.dto.StockDTO;
import com.technicaltest.stockservice.model.Stock;
import org.springframework.stereotype.Component;

import java.util.function.Function;

@Component
public class StockModeltoStockDTOMapper implements Function<Stock, StockDTO> {

    public StockDTO apply(Stock product) {
        StockDTO productDTO = new StockDTO();

        if(product.getId() != null) {
            productDTO.setId(product.getId());
        }

        if(product.getQuantity() != null) {
            productDTO.setQuantity(product.getQuantity());
        }

        if(product.getStatus() != null) {
            productDTO.setStatus(product.getStatus());
        }

        if(product.getIdProduct() != null) {
            productDTO.setIdProduct(product.getIdProduct());
        }

        if(product.getIdWarehouse() != null) {
            productDTO.setIdWarehouse(product.getIdWarehouse());
        }

        return productDTO;
    }
}
