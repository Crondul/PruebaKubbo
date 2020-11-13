package com.technicaltest.stockservice.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class WarehouseDTO {

    @JsonProperty("_id")
    private Long id;

    @JsonProperty("_name")
    private String name;

    @JsonProperty("_city")
    private String city;

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

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }
}
