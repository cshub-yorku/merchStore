DELETE FROM merchstore.product;

INSERT INTO merchstore.product(
	product_id, description, name, price, stock, images) VALUES 
	(1, 'Example description', 'Some product', 59, 4, '{"./global/model.png", "./global/model2.jpg", "./global/model3.jpg", "./global/model4.jpg"}'),
	(2, 'Example description', 'Woman 2', 99, 3, '{"./global/model2.jpg", "./global/model.png", "./global/model3.jpg", "./global/model4.jpg"}');