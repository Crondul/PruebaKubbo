package com.technicaltest.trackingserver.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Stock {

    @JsonProperty("_id")
    private Long id;

    @JsonProperty("_quantity")
    private Integer quantity;

    @JsonProperty("_status")
    private String status;

    @JsonProperty("_idProduct")
    private Long idProduct;

    @JsonProperty("_idWarehouse")
    private Long idWarehouse;

    @JsonProperty("_nameWarehouse")
    private String nameWarehouse;

    @JsonProperty("_cityWarehouse")
    private String cityWarehouse;

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

    public String getNameWarehouse() {
        return nameWarehouse;
    }

    public void setNameWarehouse(String nameWarehouse) {
        this.nameWarehouse = nameWarehouse;
    }

    public String getCityWarehouse() {
        return cityWarehouse;
    }

    public void setCityWarehouse(String cityWarehouse) {
        this.cityWarehouse = cityWarehouse;
    }
}
