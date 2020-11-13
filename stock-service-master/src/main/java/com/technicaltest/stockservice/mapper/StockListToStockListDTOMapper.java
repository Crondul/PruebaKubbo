package com.technicaltest.stockservice.mapper;

import com.technicaltest.stockservice.dto.StockDTO;
import com.technicaltest.stockservice.model.Stock;
import org.springframework.stereotype.Component;

import javax.inject.Inject;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Function;

@Component
public class StockListToStockListDTOMapper implements Function<List<Stock>, List<StockDTO>> {

    @Inject
    private StockModeltoStockDTOMapper toStockDTO;

    @Override
    public List<StockDTO> apply(List<Stock> stocks) {
        List<StockDTO> productsDTO = new ArrayList<>();

        for (Stock stock: stocks) {
            StockDTO productDTO = toStockDTO.apply(stock);

            productsDTO.add(productDTO);
        }

        return productsDTO;

    }


}
