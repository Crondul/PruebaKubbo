package com.kubbo.technicaltest.productservice.service;

import com.kubbo.technicaltest.productservice.dao.ProductAdapterService;
import com.kubbo.technicaltest.productservice.dto.ProductDTO;
import com.kubbo.technicaltest.productservice.mapper.ProductDTOtoProductModelMapper;
import com.kubbo.technicaltest.productservice.mapper.ProductListToProductListDTOMapper;
import com.kubbo.technicaltest.productservice.mapper.ProductModeltoProductDTOMapper;
import com.kubbo.technicaltest.productservice.model.Product;

import javax.inject.Inject;
import javax.inject.Named;
import java.util.List;

@Named("productService")
public class ProductService {

    @Inject
    private ProductAdapterService productAdapterService;

    @Inject
    private ProductListToProductListDTOMapper toProductListDTO;

    @Inject
    private ProductModeltoProductDTOMapper toProductDTO;

    @Inject
    private ProductDTOtoProductModelMapper toProductModel;

    public List<ProductDTO> getProducts() {

        List<Product> products = productAdapterService.findAll();
        List<ProductDTO> productsDTO = toProductListDTO.apply(products);

        return productsDTO;
    }

    public ProductDTO saveProduct(ProductDTO productRQ) {
        Product product = toProductModel.apply(productRQ);
        product = productAdapterService.save(product);

        ProductDTO productRS = toProductDTO.apply(product);

        return productRS;
    }

}
