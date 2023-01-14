CREATE TABLE water_bottle
(
    product_id bigint NOT NULL,
    colour character varying(50) NOT NULL,
    PRIMARY KEY (product_id),
    FOREIGN KEY (product_id)
        REFERENCES product (product_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
);