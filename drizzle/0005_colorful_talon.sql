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