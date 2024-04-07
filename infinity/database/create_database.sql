-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema infinity
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema infinity
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `infinity` DEFAULT CHARACTER SET utf8mb3 ;
USE `infinity` ;

-- -----------------------------------------------------
-- Table `infinity`.`ganhos_fixos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `infinity`.`ganhos_fixos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `periodicidade` VARCHAR(50) NOT NULL,
  `valor` DECIMAL(19,2) NOT NULL,
  `fonte` VARCHAR(50) NOT NULL,
  `descricao` LONGTEXT NULL DEFAULT NULL,
  `data` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;

-- -----------------------------------------------------
-- Table `infinity`.`ganhos_unicos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `infinity`.`ganhos_unicos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `valor` DECIMAL(19,2) NOT NULL,
  `fonte` VARCHAR(50) NOT NULL,
  `descricao` LONGTEXT NULL DEFAULT NULL,
  `data` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;

-- -----------------------------------------------------
-- Table `infinity`.`metas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `infinity`.`metas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(50) NOT NULL,
  `valor_alvo` DECIMAL(19,2) NOT NULL,
  `valor_arrecadado` DECIMAL(19,2) NOT NULL,
  `prazo` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;

-- -----------------------------------------------------
-- Table `infinity`.`gastos_fixos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `infinity`.`gastos_fixos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `periodicidade` VARCHAR(50) NOT NULL,
  `valor` DECIMAL(19,2) NOT NULL,
  `categoria` VARCHAR(50) NOT NULL,
  `descricao` LONGTEXT NULL DEFAULT NULL,
  `data` DATE NULL DEFAULT NULL,
  `metas_id` INT NULL DEFAULT NULL,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_fix_metas_id`
    FOREIGN KEY (`metas_id`)
    REFERENCES `infinity`.`metas` (`id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;

-- -----------------------------------------------------
-- Table `infinity`.`gastos_unicos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `infinity`.`gastos_unicos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `valor` DECIMAL(19,2) NOT NULL,
  `categoria` VARCHAR(50) NOT NULL,
  `descricao` LONGTEXT NULL DEFAULT NULL,
  `data` DATE NULL DEFAULT NULL,
  `metas_id` INT NULL DEFAULT NULL,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_var_metas_id`
    FOREIGN KEY (`metas_id`)
    REFERENCES `infinity`.`metas` (`id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;

-- -----------------------------------------------------
-- Table `infinity`.`fontes`
-- -----------------------------------------------------
CREATE TABLE `infinity`.`fontes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fonte` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `infinity`.`categorias`
-- -----------------------------------------------------
CREATE TABLE `infinity`.`categorias` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `categoria` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

INSERT INTO `infinity`.`metas` (`id`, `nome`, `valor_alvo`, `valor_arrecadado`, `prazo`)
VALUES (1, 'Nenhuma', 0, 0, NULL);

DELIMITER $$
CREATE TRIGGER prevent_delete_default_meta
BEFORE DELETE ON `infinity`.`metas`
FOR EACH ROW
BEGIN
    IF OLD.id = 1 THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Cannot delete the default meta record.';
    END IF;
END$$
DELIMITER ;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
