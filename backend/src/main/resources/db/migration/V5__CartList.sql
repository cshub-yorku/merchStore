
CREATE TABLE IF NOT EXISTS cart_list
(
    cart_id bigint NOT NULL,
    product_id bigint NOT NULL,
    product_quantity integer NOT NULL,
    PRIMARY KEY (cart_id, product_id),
    FOREIGN KEY (cart_id)
        REFERENCES cart (cart_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    FOREIGN KEY (product_id)
        REFERENCES product (product_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
);