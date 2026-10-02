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