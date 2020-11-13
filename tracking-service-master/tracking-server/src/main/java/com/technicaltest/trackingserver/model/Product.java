package com.technicaltest.trackingserver.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Product {

    @JsonProperty("_id")
    private Long id;
    @JsonProperty("_name")
    private String name;
    @JsonProperty("_sku")
    private String sku;
    @JsonProperty("_barcode")
    private String barcode;
    @JsonProperty("_image")
    private String image;
    @JsonProperty("_price")
    private String price;
    @JsonProperty("_enabled")
    private Boolean enabled;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSku() {
        return sku;
    }

    public void setSku(String sku) {
        this.sku = sku;
    }

    public String getBarcode() {
        return barcode;
    }

    public void setBarcode(String barcode) {
        this.barcode = barcode;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public Boolean getEnabled() {
        return enabled;
    }

    public void setEnabled(Boolean enabled) {
        this.enabled = enabled;
    }
}
