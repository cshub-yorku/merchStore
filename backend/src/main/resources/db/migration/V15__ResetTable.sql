CREATE TABLE IF NOT EXISTS reset_password_tokens
(
    email varchar(150) NOT NULL,
    token varchar(255) NOT NULL,
    valid_token boolean default true,

    PRIMARY KEY (email,token),
    FOREIGN KEY (email)
        REFERENCES users (email)
);