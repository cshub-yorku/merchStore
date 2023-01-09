CREATE TABLE public.ordered_items
(
    order_id serial NOT NULL,
    price money NOT NULL,
    product_quantity integer NOT NULL,
    product_id serial NOT NULL,
    PRIMARY KEY (order_id, product_id),
    FOREIGN KEY (order_id)
        REFERENCES public."order" (order_id) MATCH SIMPLE

    FOREIGN KEY (product_id)
        REFERENCES public.product (product_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE NO ACTION
);
