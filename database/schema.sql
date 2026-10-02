CREATE TABLE `order_drafts` (
	`id` text PRIMARY KEY NOT NULL,
	`session_id` text NOT NULL,
	`data` text NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `shop_sessions` (
	`id` text PRIMARY KEY NOT NULL,
	`data` text NOT NULL,
	`updated_at` integer NOT NULL
);

CREATE TABLE `demo_auth` (
	`token` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`role` text NOT NULL,
	`expires` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `demo_users` (
	`id` text PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
	`name` text NOT NULL,
	`phone` text NOT NULL,
	`hash` text NOT NULL,
	`salt` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `demo_users_email_unique` ON `demo_users` (`email`);--> statement-breakpoint
CREATE TABLE `site_content` (
	`id` text PRIMARY KEY NOT NULL,
	`data` text NOT NULL,
	`updated_at` integer NOT NULL
);

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
CREATE TABLE `analytics_events` (
	`id` text PRIMARY KEY NOT NULL,
	`visitor_id` text NOT NULL,
	`view_id` text NOT NULL,
	`type` text NOT NULL,
	`page` text NOT NULL,
	`product_id` text,
	`quantity` integer DEFAULT 0 NOT NULL,
	`depth` integer DEFAULT 0 NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_analytics_created` ON `analytics_events` (`created_at`);--> statement-breakpoint
CREATE INDEX `idx_analytics_visitor_created` ON `analytics_events` (`visitor_id`,`created_at`);--> statement-breakpoint
CREATE TABLE `analytics_visitors` (
	`id` text PRIMARY KEY NOT NULL,
	`last_seen` integer NOT NULL,
	`page` text NOT NULL,
	`scrolling` integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_analytics_last_seen` ON `analytics_visitors` (`last_seen`);
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
CREATE TABLE `ai_limit_settings` (
	`id` text PRIMARY KEY NOT NULL,
	`secret` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `ai_preview_attempts` (
	`id` text PRIMARY KEY NOT NULL,
	`subject` text NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_ai_subject_created` ON `ai_preview_attempts` (`subject`,`created_at`);--> statement-breakpoint
CREATE INDEX `idx_ai_created` ON `ai_preview_attempts` (`created_at`);