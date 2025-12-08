SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS
  `variation_detail`,
  `detail_variation_service`,
  `service_question`,
  `service_advantage`,
  `project_image`,
  `technology_project`,
  `variation_service`,
  `question`,
  `advantage`,
  `project`,
  `technology`,
  `service`;

CREATE TABLE `service` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `icon` VARCHAR(255) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL UNIQUE,
  `card_description` TEXT NOT NULL,
  `image` VARCHAR(500) NOT NULL,
  `short_description` LONGTEXT NOT NULL,
  `long_description` LONGTEXT NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `service_slug_unique` (`slug`(255))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `variation_service` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `wordpress_price` VARCHAR(100) NULL,
  `development_price` VARCHAR(100) NULL,
  `service_id` INT NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`id`),
  KEY `variation_service_service_id_idx` (`service_id`),
  CONSTRAINT `variation_service_service_id_fkey`
    FOREIGN KEY (`service_id`) REFERENCES `service`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `detail_variation_service` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(500) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `variation_detail` (
  `variation_id` INT NOT NULL,
  `detail_id` INT NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`variation_id`, `detail_id`),
  KEY `variation_detail_detail_id_idx` (`detail_id`),
  CONSTRAINT `variation_detail_variation_id_fkey`
    FOREIGN KEY (`variation_id`) REFERENCES `variation_service`(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `variation_detail_detail_id_fkey`
    FOREIGN KEY (`detail_id`) REFERENCES `detail_variation_service`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `question` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `question` LONGTEXT NOT NULL,
  `answer` LONGTEXT NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `service_question` (
  `service_id` INT NOT NULL,
  `question_id` INT NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`service_id`, `question_id`),
  KEY `service_question_question_id_idx` (`question_id`),
  CONSTRAINT `service_question_service_id_fkey`
    FOREIGN KEY (`service_id`) REFERENCES `service`(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `service_question_question_id_fkey`
    FOREIGN KEY (`question_id`) REFERENCES `question`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `advantage` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `description` LONGTEXT NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `service_advantage` (
  `service_id` INT NOT NULL,
  `advantage_id` INT NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`service_id`, `advantage_id`),
  KEY `service_advantage_advantage_id_idx` (`advantage_id`),
  CONSTRAINT `service_advantage_service_id_fkey`
    FOREIGN KEY (`service_id`) REFERENCES `service`(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `service_advantage_advantage_id_fkey`
    FOREIGN KEY (`advantage_id`) REFERENCES `advantage`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `project` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `image` VARCHAR(500) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL UNIQUE,
  `card_description` TEXT NOT NULL,
  `short_description` LONGTEXT NOT NULL,
  `long_description` LONGTEXT NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `project_slug_unique` (`slug`(255))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `project_image` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `image` VARCHAR(500) NOT NULL,
  `project_id` INT NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`id`),
  KEY `project_image_project_id_idx` (`project_id`),
  CONSTRAINT `project_image_project_id_fkey`
    FOREIGN KEY (`project_id`) REFERENCES `project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `technology` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `icon` VARCHAR(255) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `technology_project` (
  `project_id` INT NOT NULL,
  `technology_id` INT NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`project_id`, `technology_id`),
  KEY `technology_project_technology_id_idx` (`technology_id`),
  CONSTRAINT `technology_project_project_id_fkey`
    FOREIGN KEY (`project_id`) REFERENCES `project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `technology_project_technology_id_fkey`
    FOREIGN KEY (`technology_id`) REFERENCES `technology`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

SET FOREIGN_KEY_CHECKS = 1;
