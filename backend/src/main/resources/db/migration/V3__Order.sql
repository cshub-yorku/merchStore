CREATE TABLE public."order"
(
    order_id serial NOT NULL,
    quantity integer NOT NULL,
    total_amount money NOT NULL,
    order_status character varying(30) NOT NULL,
    cart_id serial NOT NULL,
    PRIMARY KEY (order_id),
    FOREIGN KEY (cart_id)
        REFERENCES public.cart (cart_id) MATCH SIMPLE
        ON UPDATE CASCADE
);