CREATE TABLE public.cart_list
(
    cart_id serial NOT NULL,
    product_id serial NOT NULL,
    product_quantity integer NOT NULL,
    PRIMARY KEY (cart_id, product_id),
    FOREIGN KEY (cart_id)
        REFERENCES public.cart (cart_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    FOREIGN KEY (product_id)
        REFERENCES public.product (product_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
);