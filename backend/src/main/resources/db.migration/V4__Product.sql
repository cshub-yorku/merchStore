
CREATE TABLE public.product
(
    product_id serial NOT NULL,
    description text,
    name character varying(100) NOT NULL,
    price money NOT NULL,
    stock integer NOT NULL,
    PRIMARY KEY (product_id)
);