CREATE TABLE `consultation_slots` (
	`id` text PRIMARY KEY NOT NULL,
	`starts_at` integer NOT NULL,
	`ends_at` integer NOT NULL,
	`status` text DEFAULT 'available' NOT NULL,
	`request_id` text,
	`version` integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `consultation_slots_request_id_unique` ON `consultation_slots` (`request_id`);--> statement-breakpoint
CREATE INDEX `idx_consultation_status_start` ON `consultation_slots` (`status`,`starts_at`);