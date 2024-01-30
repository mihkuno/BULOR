USE DB_LORAD;

-- TABLE USER
CREATE TABLE USER (
    email_address varchar(255) PRIMARY KEY,
    email_name varchar(255) NOT NULL,
    user_name varchar(255),
    self_role varchar(255),
    self_info text,
    phone_number char(10),
    location varchar(255),
    picture_url varchar(255),
    assigned_role ENUM('Supplier', 'Admin') NOT NULL DEFAULT 'Supplier',
    `status` ENUM('Online', 'Offline') NOT NULL DEFAULT 'Offline',
    joined_on timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- TABLE PRODUCT
CREATE TABLE PRODUCT (
    id int PRIMARY KEY AUTO_INCREMENT,
    user_email varchar(255),
    `name` varchar(255),
    weight decimal(10,2),
    price decimal(15,2),
    added_on timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_email) REFERENCES USER(email_address)
);

-- TABLE ORDER
CREATE TABLE ORDER_TABLE (
    user_email varchar(255),
    product_id int,
    status ENUM('Order', 'Shipment', 'Payment') NOT NULL DEFAULT 'Order',
    ordered_on timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    shipped_on timestamp,
    paid_on timestamp,
    PRIMARY KEY (user_email, product_id),
    FOREIGN KEY (user_email) REFERENCES USER(email_address),
    FOREIGN KEY (product_id) REFERENCES PRODUCT(id)
);

-- TABLE BANK_ACCOUNT
CREATE TABLE BANK_ACCOUNT (
    user_email varchar(255),
    `name` varchar(255),
    `number` varchar(255),
    balance decimal(15,2),
    updated_on timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_email),
    FOREIGN KEY (user_email) REFERENCES USER(email_address)
);
