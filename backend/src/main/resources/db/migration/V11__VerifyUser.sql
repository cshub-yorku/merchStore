Create SCHEMA IF NOT EXISTS merchstore;
CREATE TABLE IF NOT EXISTS verify_user
(
    user_id bigint NOT NULL,
    verification_code character varying(64) NOT NULL,
    FOREIGN KEY (user_id)
        REFERENCES users (user_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
);