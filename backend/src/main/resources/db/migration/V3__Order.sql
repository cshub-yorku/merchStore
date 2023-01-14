CREATE TABLE order
(
    order_id bigint NOT NULL,
    product_quantity integer NOT NULL,
    total_amount money NOT NULL,
    order_status character varying(30) NOT NULL,
    cart_id bigint NOT NULL,
    PRIMARY KEY (order_id),
    FOREIGN KEY (cart_id)
        REFERENCES cart (cart_id) MATCH SIMPLE
        ON UPDATE CASCADE
);