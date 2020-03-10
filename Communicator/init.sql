-- Drop all tables in the current database
-- DANGEROUS! Make sure this script is only run for citihack_communicator and not anyone else's database!
-- https://medium.com/@inanbunyamin90/how-to-drop-all-tables-in-mysql-f711774b6645
SET FOREIGN_KEY_CHECKS = 0;
SET GROUP_CONCAT_MAX_LEN=32768;
SET @tables = NULL;
SELECT GROUP_CONCAT('`', table_name, '`') INTO @tables
  FROM information_schema.tables
  WHERE table_schema = (SELECT DATABASE());
SELECT IFNULL(@tables,'dummy') INTO @tables;
SET @tables = CONCAT('DROP TABLE IF EXISTS ', @tables);
PREPARE stmt FROM @tables;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;
SET FOREIGN_KEY_CHECKS = 1;

CREATE TABLE full_subscription (
    eventid int,
    userid int
);

-- CREATE TABLE event_updates (
--     eventid int,
--     userid int
-- );

CREATE TABLE reminders (
    eventid int,
    userid int,
    send_date datetime
);
