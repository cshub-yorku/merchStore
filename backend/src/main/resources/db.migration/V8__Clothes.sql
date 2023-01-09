CREATE TABLE public.clothes
(
    product_id serial NOT NULL,
    colour character varying(50) NOT NULL,
    size character varying(10) NOT NULL,
    sex character varying(10) NOT NULL,
    PRIMARY KEY (product_id),
    FOREIGN KEY (product_id)
        REFERENCES public.product (product_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
);