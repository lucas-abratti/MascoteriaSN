DROP DATABASE IF EXISTS abrojal_db;
CREATE DATABASE abrojal_db;
USE abrojal_db;

CREATE TABLE categories (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	alias VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;

CREATE TABLE brands (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	alias VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;

CREATE TABLE users (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	alias VARCHAR(30) NOT NULL,
    adress VARCHAR(200) NOT NULL,
    PRIMARY KEY (id)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;

CREATE TABLE products (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    alias VARCHAR(30) NOT NULL,
    price_kg INT NOT NULL,
    weight INT NOT NULL DEFAULT 0,
    price_bagCash INT NOT NULL,
    price_bagCard INT NOT NULL,
    category_id INT UNSIGNED NOT NULL,
    brand_id INT UNSIGNED,
    img VARCHAR(50) ,
    info VARCHAR(1000) DEFAULT 'El mejor alimento balanceado para tu mascota',
    deletedAt DATE ,
    createdAt DATE ,
    updatedAt DATE ,
    PRIMARY KEY (id),
    FOREIGN KEY (category_id) REFERENCES categories(id),
    FOREIGN KEY (brand_id) REFERENCES brands(id)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;

CREATE TABLE orders (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    user_id INT UNSIGNED NOT NULL DEFAULT 1,
    products VARCHAR(200) NOT NULL,
    deletedAt DATE ,
    createdAt DATE ,
    updatedAt DATE ,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;

INSERT INTO `abrojal_db`.`categories` (`id`, `alias`) VALUES ('1', 'Alimento para perros');
INSERT INTO `abrojal_db`.`categories` (`id`, `alias`) VALUES ('2', 'Alimento para perros cachorros');
INSERT INTO `abrojal_db`.`categories` (`id`, `alias`) VALUES ('3', 'Limpieza');
INSERT INTO `abrojal_db`.`categories` (`id`, `alias`) VALUES ('4', 'Ferreteria');
INSERT INTO `abrojal_db`.`categories` (`id`, `alias`) VALUES ('5', 'Bazar');
INSERT INTO `abrojal_db`.`categories` (`id`, `alias`) VALUES ('6', 'Semillas');
INSERT INTO `abrojal_db`.`categories` (`id`, `alias`) VALUES ('7', 'Jardineria');
INSERT INTO `abrojal_db`.`categories` (`id`, `alias`) VALUES ('8', 'Pileta');

INSERT INTO `abrojal_db`.`users` (`id`, `alias`, `adress`) VALUES ('1', 'Lucas Abratti', 'Micasa');
INSERT INTO `abrojal_db`.`users` (`id`, `alias`, `adress`) VALUES ('2', 'Natalia Marina Uran', 'Sucasa');
INSERT INTO `abrojal_db`.`users` (`id`, `alias`, `adress`) VALUES ('3', 'Gastón Martinez', 'Sucasa');

INSERT INTO `abrojal_db`.`brands` (`id`, `alias`) VALUES ('1', 'Sin Marca');
INSERT INTO `abrojal_db`.`brands` (`id`, `alias`) VALUES ('2', 'Sabrosito');
INSERT INTO `abrojal_db`.`brands` (`id`, `alias`) VALUES ('3', 'Raza');
INSERT INTO `abrojal_db`.`brands` (`id`, `alias`) VALUES ('4', 'Dogui');
INSERT INTO `abrojal_db`.`brands` (`id`, `alias`) VALUES ('5', 'Dog Chow');
INSERT INTO `abrojal_db`.`brands` (`id`, `alias`) VALUES ('6', 'Pedigree');
INSERT INTO `abrojal_db`.`brands` (`id`, `alias`) VALUES ('7', 'Mapu');
INSERT INTO `abrojal_db`.`brands` (`id`, `alias`) VALUES ('8', 'Nutribom');
INSERT INTO `abrojal_db`.`brands` (`id`, `alias`) VALUES ('9', 'Gandum');
INSERT INTO `abrojal_db`.`brands` (`id`, `alias`) VALUES ('10', 'Voraz');
INSERT INTO `abrojal_db`.`brands` (`id`, `alias`) VALUES ('11', 'Sieger');
INSERT INTO `abrojal_db`.`brands` (`id`, `alias`) VALUES ('12', 'Dog Selection');
INSERT INTO `abrojal_db`.`brands` (`id`, `alias`) VALUES ('13', 'Petting');
INSERT INTO `abrojal_db`.`brands` (`id`, `alias`) VALUES ('14', 'Biopet');
INSERT INTO `abrojal_db`.`brands` (`id`, `alias`) VALUES ('15', 'Perfoman');
INSERT INTO `abrojal_db`.`brands` (`id`, `alias`) VALUES ('16', 'Pampa');
INSERT INTO `abrojal_db`.`brands` (`id`, `alias`) VALUES ('17', 'Eukanuba');
INSERT INTO `abrojal_db`.`brands` (`id`, `alias`) VALUES ('18', 'Matute');
INSERT INTO `abrojal_db`.`brands` (`id`, `alias`) VALUES ('19', 'Maximum');
INSERT INTO `abrojal_db`.`brands` (`id`, `alias`) VALUES ('20', 'Gaucho');
INSERT INTO `abrojal_db`.`brands` (`id`, `alias`) VALUES ('21', 'Protemix');
INSERT INTO `abrojal_db`.`brands` (`id`, `alias`) VALUES ('22', 'Excelent');
INSERT INTO `abrojal_db`.`brands` (`id`, `alias`) VALUES ('23', 'Dog Menu');
INSERT INTO `abrojal_db`.`brands` (`id`, `alias`) VALUES ('24', 'Proplan');
INSERT INTO `abrojal_db`.`brands` (`id`, `alias`) VALUES ('25', 'Old Prince');
INSERT INTO `abrojal_db`.`brands` (`id`, `alias`) VALUES ('26', 'Dog Pro');
INSERT INTO `abrojal_db`.`brands` (`id`, `alias`) VALUES ('27', '4 Huellas');
INSERT INTO `abrojal_db`.`brands` (`id`, `alias`) VALUES ('28', 'Mantenance');

INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`, `img`, `updatedAt`) VALUES ('1', 'Sabrosito Mix de Carne', '90', '0', '0', '1', '2', 'sabrositos-mixdecarnes.png', '2021-08-10');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('2', 'Raza Adulto', '110', '0', '0', '1', '3');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('3', 'Raza Adulto Chico', '120', '0', '0', '1', '3');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('4', 'Dogui Carne, Arroz y Cereales', '115', '0', '0', '1', '4');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('5', 'Dog Chow Adulto', '180', '0', '0', '1', '5');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('6', 'Dog Chow Adulto Chico', '180', '0', '0', '1', '5');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('7', 'Dog Chow Light', '190', '0', '0', '1', '5');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('8', 'Dog Chow +7 años', '190', '0', '0', '1', '5');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`, `img`, `updatedAt`) VALUES ('9', 'Pedigree Adulto Carne', '155', '0', '0', '1', '6', 'PEDIGREE-ADULTO-CARNE.png', '2021-08-10');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`, `img`, `updatedAt`) VALUES ('10', 'Pedigree Adulto Chico', '175', '0', '0', '1', '6', 'PEDIGREE-ADULTO-PEQUE.png', '2021-08-10');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`, `img`, `updatedAt`) VALUES ('11', 'Pedigree +7 años', '185', '0', '0', '1', '6', 'PEDIGREE-SENIOR.png', '2021-08-10');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('12', 'Mapu', '170', '0', '0', '1', '7');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('13', 'Precios Cuidados', '95', '0', '0', '1', '28');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('14', 'Nutribom', '90', '0', '0', '1', '8');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('15', 'Gandum', '65', '0', '0', '1', '9');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('16', 'Voraz', '70', '0', '0', '1', '10');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('17', 'Sieger', '220', '0', '0', '1', '11');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('18', 'Dog Selection Adulto', '125', '0', '0', '1', '12');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('19', 'Dog Selection Adulto Chico', '130', '0', '0', '1', '12');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('20', 'Petting', '135', '0', '0', '1', '13');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('21', 'Biopet', '105', '0', '0', '1', '14');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('22', 'Performan', '300', '0', '0', '1', '15');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('23', 'Pampa', '125', '0', '0', '1', '16');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('24', 'Eukanuba', '340', '0', '0', '1', '17');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('25', 'Matute', '75', '0', '0', '1', '18');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('26', 'Maxium', '170', '0', '0', '1', '19');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('27', 'Gaucho', '80', '0', '0', '1', '20');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('28', 'Protemix', '130', '0', '0', '1', '21');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('29', 'Excelent Cordero', '265', '0', '0', '1', '22');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('30', 'Excelent Carne', '210', '0', '0', '1', '22');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('31', 'Excelent Pollo', '230', '0', '0', '1', '22');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('32', 'Excelent Light', '265', '0', '0', '1', '22');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('33', 'Excelent +7', '265', '0', '0', '1', '22');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('34', 'Excelent Adulto Chico', '240', '0', '0', '1', '22');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('35', 'Dog Menu', '85', '0', '0', '1', '23');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('36', 'Proplan Adulto', '365', '0', '0', '1', '24');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('37', 'Proplan Adulto Chico ', '445', '0', '0', '1', '24');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('38', 'Proplan +7', '405', '0', '0', '1', '24');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('39', 'Proplan +7 Chico', '485', '0', '0', '1', '24');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('40', 'Proplan Light', '420', '0', '0', '1', '24');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('41', 'Proplan Piel Sensible', '425', '0', '0', '1', '24');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('42', 'Old Prince ', '300', '0', '0', '1', '25');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('43', 'Dog Pro Adulto', '150', '0', '0', '1', '26');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('44', 'Dog Pro Adulto Chico', '170', '0', '0', '1', '26');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('45', '4 Huellas', '80', '0', '0', '1', '27');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`, `img`, `updatedAt`) VALUES ('46', 'Sabrosito Cachorros', '110', '0', '0', '2', '2', 'sabrositos-cachorros.png', '2021-08-10');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('47', 'Dogui Cachorros Carne, Leche y Cereales', '125', '0', '0', '2', '4');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`, `img`, `updatedAt`) VALUES ('48', 'Pedigree Cachorros', '175', '0', '0', '2', '6', 'PEDIGREE-CACHORRO.png', '2021-08-10');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('49', 'Dog Chow Cachorros', '190', '0', '0', '2', '5');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('50', 'Dog Selection Cachorros', '140', '0', '0', '2', '5');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('51', 'Performan Cachorro', '345', '0', '0', '2', '15');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('52', 'Euknuba Cachorro', '370', '0', '0', '2', '17');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('53', 'Gaucho Cachorro', '90', '0', '0', '2', '20');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('54', 'Dog Pro Cachorro', '180', '0', '0', '2', '26');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('55', 'Mapu Cachorro', '180', '0', '0', '2', '7');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('56', 'Excelent Carne Cachorro', '240', '0', '0', '2', '22');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('57', 'Excelent Pollo Cachorro', '270', '0', '0', '2', '22');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('58', 'Proplan Cachorro', '405', '0', '0', '2', '24');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('59', 'Proplan Cachorro Chico', '485', '0', '0', '2', '24');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('60', 'Nutribom Cachorro', '110', '0', '0', '2', '8');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`, `img`, `updatedAt`) VALUES ('61', 'Sabrosito Mix', '90', '0', '0', '1', '2', 'sabrositos-mix.png', '2021-08-10');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`, `img`, `updatedAt`) VALUES ('62', 'Pedigree Adulto Verdura', '155', '0', '0', '1', '6', 'PEDIGREE-ADULTO-VERDURA.png', '2021-08-10');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('63', 'Dogui Carne Asada y Vegetales', '115', '0', '0', '1', '4');
INSERT INTO `abrojal_db`.`products` (`id`, `alias`, `price_kg`, `price_bagCash`, `price_bagCard`, `category_id`, `brand_id`) VALUES ('64', 'Dogui Pollo y Vegetales', '115', '0', '0', '1', '4');