CREATE TABLE IF NOT EXISTS orders
(
    order_id bigint NOT NULL,
    total_amount money NOT NULL,
    order_status character varying(30) NOT NULL,
    PRIMARY KEY (order_id)
);