
CREATE TABLE cart
(
    cart_id bigint NOT NULL,
    user_id bigint NOT NULL,
    PRIMARY KEY (cart_id),
    FOREIGN KEY (user_id)
        REFERENCES user (user_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
);