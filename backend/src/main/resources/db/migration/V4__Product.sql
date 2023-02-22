CREATE TABLE IF NOT EXISTS product
(
    product_id bigint NOT NULL,
    description text,
    name character varying(100) NOT NULL,
    price money NOT NULL,
    stock integer NOT NULL,
    PRIMARY KEY (product_id)
);