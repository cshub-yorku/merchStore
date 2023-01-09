
CREATE TABLE public.cart
(
    cart_id serial NOT NULL,
    user_id serial NOT NULL,
    PRIMARY KEY (cart_id),
    FOREIGN KEY (user_id)
        REFERENCES public."user" (user_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
);