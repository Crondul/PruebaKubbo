package com.kubbo.technicaltest.productservice.mapper;

import com.kubbo.technicaltest.productservice.dto.ProductDTO;
import com.kubbo.technicaltest.productservice.model.Product;
import org.springframework.stereotype.Component;

import javax.inject.Inject;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Function;

@Component
public class ProductListToProductListDTOMapper implements Function<List<Product>, List<ProductDTO>> {

    @Inject
    private ProductModeltoProductDTOMapper toProductDTO;

    @Override
    public List<ProductDTO> apply(List<Product> products) {
        List<ProductDTO> productsDTO = new ArrayList<>();

        for (Product product: products) {
            ProductDTO productDTO = toProductDTO.apply(product);

            productsDTO.add(productDTO);
        }

        return productsDTO;

    }


}
