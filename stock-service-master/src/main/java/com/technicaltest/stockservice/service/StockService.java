package com.technicaltest.stockservice.service;

import com.technicaltest.stockservice.client.WarehousesClient;
import com.technicaltest.stockservice.dao.StockAdapterService;
import com.technicaltest.stockservice.dto.StockDTO;
import com.technicaltest.stockservice.dto.WarehouseDTO;
import com.technicaltest.stockservice.mapper.StockDTOtoStockModelMapper;
import com.technicaltest.stockservice.mapper.StockListToStockListDTOMapper;
import com.technicaltest.stockservice.mapper.StockModeltoStockDTOMapper;
import com.technicaltest.stockservice.model.Stock;
import org.springframework.beans.factory.annotation.Autowired;

import javax.inject.Inject;
import javax.inject.Named;
import java.util.ArrayList;
import java.util.List;

@Named("stockService")
public class StockService {

    @Inject
    private StockAdapterService stockAdapterService;

    @Inject
    private StockListToStockListDTOMapper toStockListDTO;

    @Inject
    private StockDTOtoStockModelMapper toStockModel;

    @Inject
    private StockModeltoStockDTOMapper toStockDTO;

    @Autowired
    private WarehousesClient warehousesClient;

    public List<StockDTO> getStocksByIdProduct(String idProduct) {
        List<Stock> stocks = stockAdapterService.findByIdProduct(Long.valueOf(idProduct));
        List<StockDTO> stocksDTO = toStockListDTO.apply(stocks);

        stocksDTO = addWarehouses(stocksDTO);

        return stocksDTO;
    }

    private List<StockDTO> addWarehouses(List<StockDTO> stocksWithoutWarehouse) {
        List<StockDTO> stocksWithWarehouse = new ArrayList<>();

        for (StockDTO stock: stocksWithoutWarehouse) {
            WarehouseDTO warehouse = new WarehouseDTO();
            if(stock.getIdWarehouse() != null) {
                warehouse = warehousesClient.getWarehouseById(String.valueOf(stock.getIdWarehouse())).getBody();
            }

            if(warehouse != null) {
                stock.setNameWarehouse(warehouse.getName());
                stock.setCityWarehouse(warehouse.getCity());
            }

            stocksWithWarehouse.add(stock);
        }

        return stocksWithWarehouse;
    }

    public StockDTO saveStock(StockDTO stockRQ) {
        Stock stock = toStockModel.apply(stockRQ);
        stock = stockAdapterService.save(stock);

        StockDTO stockRS = toStockDTO.apply(stock);

        return stockRS;
    }
}
