package com.MerchStore.backend.Dao;

import java.util.List;
import java.util.Optional;

public interface Dao<T> {
    // All classes in Dao package that correspond to a Model class must implement this interface.
    Optional<T> get(long id);
    List<T> getAll();
    boolean save(T t);
    boolean update(T t);
    boolean delete(T t);
}
