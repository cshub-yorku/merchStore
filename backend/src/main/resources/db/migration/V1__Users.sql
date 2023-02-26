Create SCHEMA IF NOT EXISTS merchstore;
CREATE TABLE IF NOT EXISTS users
(
    user_id bigint NOT NULL ,
    first_name character varying(50) NOT NULL,
    last_name character varying(50),
    email character varying(100) NOT NULL,
    phone_number character varying(15) NOT NULL,
    active boolean NOT NULL DEFAULT TRUE,
    PRIMARY KEY (user_id)
);