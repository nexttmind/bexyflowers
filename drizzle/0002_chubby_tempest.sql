CREATE TABLE `commerce_expenses` (
	`id` text PRIMARY KEY NOT NULL,
	`date` text NOT NULL,
	`name` text NOT NULL,
	`amount` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `commerce_requests` (
	`id` text PRIMARY KEY NOT NULL,
	`session_id` text NOT NULL,
	`user_id` text,
	`kind` text NOT NULL,
	`data` text NOT NULL,
	`version` integer DEFAULT 0 NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_commerce_session_created` ON `commerce_requests` (`session_id`,`created_at`);--> statement-breakpoint
CREATE INDEX `idx_commerce_user` ON `commerce_requests` (`user_id`);--> statement-breakpoint
CREATE INDEX `idx_commerce_created` ON `commerce_requests` (`created_at`);