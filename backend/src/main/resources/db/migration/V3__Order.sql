CREATE TABLE IF NOT EXISTS orders
(
    order_id bigint NOT NULL,
    total_amount money NOT NULL,
    order_status character varying(30) NOT NULL,
    user_id bigint NOT NULL,
    payment_type character varying(50) NOT NULL,
    order_date Date NOT NULL default CURRENT_DATE,
    FOREIGN KEY (user_id)
    REFERENCES users (user_id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE CASCADE,
    PRIMARY KEY (order_id)
);