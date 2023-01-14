CREATE TABLE ordered_items
(
    order_id bigint NOT NULL,
    price money NOT NULL,
    product_quantity integer NOT NULL,
    product_id bigint NOT NULL,
    PRIMARY KEY (order_id, product_id),
    FOREIGN KEY (order_id)
        REFERENCES order (order_id),
    FOREIGN KEY (product_id)
        REFERENCES product (product_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE NO ACTION
);
