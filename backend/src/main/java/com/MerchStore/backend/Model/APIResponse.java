package com.MerchStore.backend.Model;

import java.util.List;

public class APIResponse<T> {
    private List<String> errors;
    private List<T> responseData;

    public APIResponse(List<String> errors, List<T> responseData) {
        this.errors = errors;
        this.responseData = responseData;
    }
    public List<String> getErrors() {
        return errors;
    }

    public List<T> getResponseData() {
        return responseData;
    }
}
