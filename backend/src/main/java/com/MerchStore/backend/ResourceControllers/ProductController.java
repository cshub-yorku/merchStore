package com.MerchStore.backend.ResourceControllers;
import com.MerchStore.backend.Dao.ProductDao;
import com.MerchStore.backend.Model.Product;
import com.MerchStore.backend.Service.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/v1/products")
public class ProductController {


    @GetMapping("/")
    public ResponseEntity<?> getAllProducts() {
        ProductService service = new ProductService();
        service.listAllProduct();
        return ResponseEntity.ok(service.listAllProduct());
    }

    @PostMapping("/add")
    public ResponseEntity<String> addProduct(@RequestBody Product product) {
        if (ProductService.addProduct(product)) {
            return new ResponseEntity<>("Product added successfully", HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>("Product not added", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/update")
    public ResponseEntity<String> updateProduct(@RequestBody Product product) {
        if(ProductService.updateProduct(product)){
            return new ResponseEntity<>("Product updated Successfully", HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>("Product not updated", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getAll")
    public ResponseEntity<?> getAllProduct() {
        ProductService.getAllProduct();
        if(ProductService.getAllProduct().isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        else {
            return new ResponseEntity<>(ProductService.getAllProduct(),HttpStatus.OK);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getById(@PathVariable long id) {
        Optional<Product> product = ProductService.getById(id);
        if(product.isPresent()){
            return new ResponseEntity<>(product.get(), HttpStatus.OK);
        }
        else
        {
            System.out.println("Product not found");
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/")
    public ResponseEntity<Product> deleteProduct(@RequestBody Product product) {
        if(ProductService.deleteProduct(product)){
            System.out.println("Product deleted successfully");
            return new ResponseEntity<>(HttpStatus.OK);
        }
        else
        {
            System.out.println("Product not deleted");
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
