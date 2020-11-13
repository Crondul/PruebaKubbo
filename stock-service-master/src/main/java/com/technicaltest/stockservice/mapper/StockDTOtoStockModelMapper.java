package com.technicaltest.stockservice.mapper;

import com.technicaltest.stockservice.dto.StockDTO;
import com.technicaltest.stockservice.model.Stock;
import org.springframework.stereotype.Component;

import java.util.function.Function;

@Component
public class StockDTOtoStockModelMapper implements Function<StockDTO, Stock> {

    public Stock apply(StockDTO stockDTO) {
        Stock stock = null;

        if(stockDTO != null) {
            stock = new Stock(stockDTO.getQuantity(), stockDTO.getStatus(), stockDTO.getIdProduct(), stockDTO.getIdWarehouse());
        }

        return stock;
    }
}
