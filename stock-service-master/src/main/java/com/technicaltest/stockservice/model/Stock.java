package com.technicaltest.stockservice.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Stock {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private Integer quantity;
    private String status;
    private Long idProduct;
    private Long idWarehouse;

    protected Stock() {}

    public Stock(Integer quantity, String status, Long idProduct, Long idWarehouse) {
        this.quantity = quantity;
        this.status = status;
        this.idProduct = idProduct;
        this.idWarehouse = idWarehouse;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Long getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(Long idProduct) {
        this.idProduct = idProduct;
    }

    public Long getIdWarehouse() {
        return idWarehouse;
    }

    public void setIdWarehouse(Long idWarehouse) {
        this.idWarehouse = idWarehouse;
    }
}
