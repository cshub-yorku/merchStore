package com.MerchStore.backend.Service;

import com.MerchStore.backend.Dao.Dao;
import com.MerchStore.backend.Dao.ProductDao;
import com.MerchStore.backend.Model.Product;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class ProductService {

    public List<Product> listAllProduct() {
        ProductDao dao = new ProductDao();
        return dao.getAll();

    }

    public static boolean addProduct(Product product){
        ProductDao dao = new ProductDao();
        return dao.save(product);
    }

    public static boolean updateProduct(Product product) {

        ProductDao productDao = new ProductDao();
        return productDao.update(product);
    }

    public static List<Product> getAllProduct() {
        ProductDao productDao = new ProductDao();
        return productDao.getAll();
    }

    public static Optional<Product> getById(long id) {
        ProductDao productDao = new ProductDao();
        return productDao.get(id);
    }

    public static boolean deleteProduct(Product product) {
        ProductDao productDao = new ProductDao();
        return productDao.delete(product);
    }
}
