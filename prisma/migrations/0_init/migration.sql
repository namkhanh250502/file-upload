-- CreateTable
CREATE TABLE `class` (
    `class_id` INTEGER NOT NULL AUTO_INCREMENT,
    `class_name` VARCHAR(10) NULL,
    `class_code` INTEGER NULL,
    `URL` VARCHAR(100) NULL,

    PRIMARY KEY (`class_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `class_teacher` (
    `ct_id` INTEGER NOT NULL AUTO_INCREMENT,
    `class_id` INTEGER NULL,
    `teacher_id` INTEGER NULL,

    INDEX `class_teacher_ibfk_2`(`teacher_id`),
    UNIQUE INDEX `UC_ct`(`class_id`, `teacher_id`),
    PRIMARY KEY (`ct_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `teacher` (
    `teacher_id` INTEGER NOT NULL AUTO_INCREMENT,
    `teacher_code` INTEGER NULL,
    `teacher_phone` INTEGER NULL,
    `teacher_name` VARCHAR(50) NOT NULL,
    `teacher_subject` VARCHAR(50) NULL,

    PRIMARY KEY (`teacher_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `class_teacher` ADD CONSTRAINT `class_teacher_ibfk_1` FOREIGN KEY (`class_id`) REFERENCES `class`(`class_id`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `class_teacher` ADD CONSTRAINT `class_teacher_ibfk_2` FOREIGN KEY (`teacher_id`) REFERENCES `teacher`(`teacher_id`) ON DELETE CASCADE ON UPDATE RESTRICT;

