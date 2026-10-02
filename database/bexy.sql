CREATE TABLE `ai_limit_settings` (
	`id` text PRIMARY KEY NOT NULL,
	`secret` text NOT NULL
);
CREATE TABLE `ai_preview_attempts` (
	`id` text PRIMARY KEY NOT NULL,
	`subject` text NOT NULL,
	`created_at` integer NOT NULL
);
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
INSERT INTO "analytics_events" VALUES('00625334-035a-40e1-b7ea-6e50d7d2ee76','20852e91-ba29-462b-b727-85143dc58065','2f7d3547-86bd-4232-80d3-334fe3ec0840','visit','/',NULL,0,0,1789385624973);
INSERT INTO "analytics_events" VALUES('02690d32-ca19-42e3-a500-57694a51dc99','20852e91-ba29-462b-b727-85143dc58065','2f7d3547-86bd-4232-80d3-334fe3ec0840','page_view','/',NULL,0,0,1789385624973);
INSERT INTO "analytics_events" VALUES('05095fe2-2e9c-411f-a298-9d28206605f3','2ab944ec-4a45-4f8e-9576-2c23073b02bd','6cfb494e-31cb-46fd-81d4-08eef5c411bd','page_view','/customize',NULL,0,0,1789457846165);
INSERT INTO "analytics_events" VALUES('0cd21d5e-6844-4f11-8c23-0987120f998c','bbdbf48a-e757-4a48-9559-bbccc41a9fac','264ef623-847d-48e9-a5d0-eddabf41e1c0','page_view','/',NULL,0,0,1789457555147);
INSERT INTO "analytics_events" VALUES('0e94b3b4-9a57-4987-a0ca-5a80a9a2bbd0','56404de6-a418-45cd-9713-e1c68bc79ee9','893927a2-b8a5-4864-aafc-83720842b494','visit','/',NULL,0,0,1789457856817);
INSERT INTO "analytics_events" VALUES('10d09813-151e-4003-8a94-030923919e19','66cf1f04-1c50-4363-a696-3ab10b0d2a9d','272bc7ae-7ca2-40e4-8a16-988cce05f050','visit','/',NULL,0,0,1789215298467);
INSERT INTO "analytics_events" VALUES('12332063-90e5-405c-95e3-f25db1c4b867','888192f6-1cfe-49bb-a186-326e7f6a0826','0ac4e2ba-8e09-4c78-8e1b-7eeb0886e0cd','scroll','/about',NULL,0,75,1789381617790);
INSERT INTO "analytics_events" VALUES('1576e2f8-c262-4d88-8ecc-5f658faa35e6','66cf1f04-1c50-4363-a696-3ab10b0d2a9d','272bc7ae-7ca2-40e4-8a16-988cce05f050','page_view','/',NULL,0,0,1789215298467);
INSERT INTO "analytics_events" VALUES('16e173aa-a9d3-422d-8589-d75a746d8aa9','f3250bf0-4e9a-45fc-9d6c-2376fa9bf0ab','15a6e1b5-3952-4c2c-881f-7a7615576081','scroll','/wedding-and-events',NULL,0,50,1789394749551);
INSERT INTO "analytics_events" VALUES('1ac58c35-966c-49a5-a72e-abfd69fbfb33','e64d7a57-fb68-4253-a964-4488974bbb85','aedaa033-3611-4ee7-8520-1516e47bb65f','visit','/',NULL,0,0,1789247393123);
INSERT INTO "analytics_events" VALUES('1be4bdf0-33c6-44ab-9af8-ec08d2d94652','bbdbf48a-e757-4a48-9559-bbccc41a9fac','264ef623-847d-48e9-a5d0-eddabf41e1c0','visit','/',NULL,0,0,1789457555147);
INSERT INTO "analytics_events" VALUES('1cc58982-cd66-42f2-ba5d-67390ec1198d','f3250bf0-4e9a-45fc-9d6c-2376fa9bf0ab','15a6e1b5-3952-4c2c-881f-7a7615576081','scroll','/wedding-and-events',NULL,0,25,1789394738150);
INSERT INTO "analytics_events" VALUES('263de6f3-d35e-4886-ae26-6e13084e8106','e64d7a57-fb68-4253-a964-4488974bbb85','aedaa033-3611-4ee7-8520-1516e47bb65f','page_view','/',NULL,0,0,1789247393123);
INSERT INTO "analytics_events" VALUES('27930f46-c0fc-432d-abe7-74fdfb77a471','9810fc9b-8fd9-4662-8ae3-8de2c6516c09','e3fb57c4-2002-4fa2-863e-7953f72450e3','visit','/',NULL,0,0,1789456317585);
INSERT INTO "analytics_events" VALUES('2a333982-dfcb-451a-91db-127aea197e91','2ab944ec-4a45-4f8e-9576-2c23073b02bd','07f77794-6c96-4983-b440-489e368bf86c','scroll','/about',NULL,0,50,1789457859353);
INSERT INTO "analytics_events" VALUES('2a865cef-aeee-46b0-9463-eb75bc6ba7e9','af4954ff-6414-448b-8829-34879b09f38b','d43da307-46aa-4e5a-88d2-28ff9fa116b0','page_view','/',NULL,0,0,1789247407760);
INSERT INTO "analytics_events" VALUES('2cb4a943-5d1b-4845-ac38-70fc2b73bd01','c9d20e59-ba86-4435-96f9-02282815dda9','7feade55-d4f0-4e31-bf0d-5ab4b0d052c3','page_view','/',NULL,0,0,1789385626750);
INSERT INTO "analytics_events" VALUES('3213e589-d8ab-400a-ae50-f5867cab0824','888192f6-1cfe-49bb-a186-326e7f6a0826','0d752015-40d9-41fb-b0d7-cde086d32c95','scroll','/',NULL,0,50,1789381712536);
INSERT INTO "analytics_events" VALUES('36dca902-5055-4a1a-ab73-31ae510328df','888192f6-1cfe-49bb-a186-326e7f6a0826','0ac4e2ba-8e09-4c78-8e1b-7eeb0886e0cd','page_view','/about',NULL,0,0,1789381607365);
INSERT INTO "analytics_events" VALUES('380b01dd-2038-43d3-ab05-cb6ee2a4830d','888192f6-1cfe-49bb-a186-326e7f6a0826','0ac4e2ba-8e09-4c78-8e1b-7eeb0886e0cd','scroll','/about',NULL,0,50,1789381616044);
INSERT INTO "analytics_events" VALUES('38121592-7db2-40b1-9e69-4bf7058c7b08','f3250bf0-4e9a-45fc-9d6c-2376fa9bf0ab','2e042de8-3158-4017-b483-ad411374ade0','scroll','/about',NULL,0,50,1789394690932);
INSERT INTO "analytics_events" VALUES('399215cb-7d03-429d-98d4-b9e401ec455a','09e04d09-c576-4458-b9f7-f3c0e7b23ce4','28dac960-faf8-4255-a278-0a58550a70cb','visit','/',NULL,0,0,1789247410765);
INSERT INTO "analytics_events" VALUES('3a841c01-5f44-426c-a211-74183063c125','2ab944ec-4a45-4f8e-9576-2c23073b02bd','07f77794-6c96-4983-b440-489e368bf86c','page_view','/about',NULL,0,0,1789457855056);
INSERT INTO "analytics_events" VALUES('3b0fe573-9c56-4fb5-99b5-da24e6dfc05b','888192f6-1cfe-49bb-a186-326e7f6a0826','0d752015-40d9-41fb-b0d7-cde086d32c95','scroll','/',NULL,0,25,1789381700148);
INSERT INTO "analytics_events" VALUES('3ee13e3a-9e2b-4bc9-8f73-f0f4184e02a3','9810fc9b-8fd9-4662-8ae3-8de2c6516c09','4f3cf6cf-8212-4b92-9fe1-831174129bed','scroll','/customize',NULL,0,75,1789456355142);
INSERT INTO "analytics_events" VALUES('40d0b914-4587-44c8-8441-4b3e00cf68cc','2ab944ec-4a45-4f8e-9576-2c23073b02bd','07f77794-6c96-4983-b440-489e368bf86c','scroll','/about',NULL,0,25,1789457857669);
INSERT INTO "analytics_events" VALUES('45fe8ccd-ea78-4675-95a0-01d7d91676ea','2ab944ec-4a45-4f8e-9576-2c23073b02bd','07f77794-6c96-4983-b440-489e368bf86c','scroll','/about',NULL,0,75,1789457859946);
INSERT INTO "analytics_events" VALUES('471c3a15-5d2c-476c-bf2e-448f21718355','eefdd17e-68d1-47d3-adae-bd8ad7a7325f','fac7ba86-8140-41e2-9e77-c028f9e6c8d0','visit','/',NULL,0,0,1789457902335);
INSERT INTO "analytics_events" VALUES('4a2cbc48-cb26-4d9f-bf9d-ef1a0e73b93a','e64d7a57-fb68-4253-a964-4488974bbb85','aedaa033-3611-4ee7-8520-1516e47bb65f','scroll','/',NULL,0,25,1789247394950);
INSERT INTO "analytics_events" VALUES('4a3e6649-66c1-4b95-a7fb-f09c91d5b4a0','af4954ff-6414-448b-8829-34879b09f38b','d43da307-46aa-4e5a-88d2-28ff9fa116b0','visit','/',NULL,0,0,1789247407760);
INSERT INTO "analytics_events" VALUES('4a992aa6-76a1-4cae-a3a4-9defa141e600','888192f6-1cfe-49bb-a186-326e7f6a0826','0d752015-40d9-41fb-b0d7-cde086d32c95','page_view','/',NULL,0,0,1789381673484);
INSERT INTO "analytics_events" VALUES('4b9ec46b-4383-4ed0-8df3-5dd2feac8f2e','2ab944ec-4a45-4f8e-9576-2c23073b02bd','fdd8688a-84e1-4c96-9811-8ef96d9221c8','page_view','/customize',NULL,0,0,1789457880613);
INSERT INTO "analytics_events" VALUES('59a4c86c-5067-4d24-b0ac-cda6cc928fab','fc776343-fb6f-4077-a448-bbaa36b781a6','51f9dac1-c745-47c7-85c5-93fc6efd92ae','page_view','/',NULL,0,0,1789457216992);
INSERT INTO "analytics_events" VALUES('5bc03fda-c67a-46bb-9f74-c2f153a2cb91','888192f6-1cfe-49bb-a186-326e7f6a0826','d44a281b-3c9c-4f88-a12d-e03c552503b3','page_view','/collection',NULL,0,0,1789381635795);
INSERT INTO "analytics_events" VALUES('5ce4197c-75e9-4de3-a0f8-e1fba6d3f319','9810fc9b-8fd9-4662-8ae3-8de2c6516c09','4f3cf6cf-8212-4b92-9fe1-831174129bed','scroll','/customize',NULL,0,25,1789456338220);
INSERT INTO "analytics_events" VALUES('5e6a368f-8880-43da-8f0f-6b88e9550800','e64d7a57-fb68-4253-a964-4488974bbb85','81aa60bb-7fe8-46fd-b4a9-17975288f5e2','page_view','/collection',NULL,0,0,1789247417357);
INSERT INTO "analytics_events" VALUES('5f2f5708-a029-4e02-9bc8-73a55f171c46','888192f6-1cfe-49bb-a186-326e7f6a0826','0d752015-40d9-41fb-b0d7-cde086d32c95','scroll','/',NULL,0,75,1789381718501);
INSERT INTO "analytics_events" VALUES('645f5006-d9dd-4d63-b338-71f3f73d2a5c','96c516ef-6a1e-42fc-93a9-b49bedef35c5','9b0e19ef-1ad4-47a3-b364-cb050a6619e6','visit','/',NULL,0,0,1789454605758);
INSERT INTO "analytics_events" VALUES('649779d0-0352-40fe-9b7b-682f0ef14eb7','e64d7a57-fb68-4253-a964-4488974bbb85','81aa60bb-7fe8-46fd-b4a9-17975288f5e2','scroll','/collection',NULL,0,75,1789247422452);
INSERT INTO "analytics_events" VALUES('65a3d8c3-38f9-4d8d-b5f0-275d72172eb3','888192f6-1cfe-49bb-a186-326e7f6a0826','0ac4e2ba-8e09-4c78-8e1b-7eeb0886e0cd','scroll','/about',NULL,0,100,1789381619521);
INSERT INTO "analytics_events" VALUES('69707721-98f7-4801-a1fb-c1dec2d58f73','9810fc9b-8fd9-4662-8ae3-8de2c6516c09','4f3cf6cf-8212-4b92-9fe1-831174129bed','scroll','/customize',NULL,0,50,1789456353936);
INSERT INTO "analytics_events" VALUES('6be92668-0320-42e8-b9c1-52d40d9d541b','e64d7a57-fb68-4253-a964-4488974bbb85','aedaa033-3611-4ee7-8520-1516e47bb65f','scroll','/',NULL,0,50,1789247404543);
INSERT INTO "analytics_events" VALUES('6e06753a-d8dd-415a-95be-f6ee222dc3c6','56404de6-a418-45cd-9713-e1c68bc79ee9','893927a2-b8a5-4864-aafc-83720842b494','page_view','/',NULL,0,0,1789457856817);
INSERT INTO "analytics_events" VALUES('754ff7c8-f003-4e55-b5cd-722a57cfc96b','888192f6-1cfe-49bb-a186-326e7f6a0826','c263e094-dd63-4137-b9dd-de36bf3a3203','page_view','/',NULL,0,0,1789381606628);
INSERT INTO "analytics_events" VALUES('7741be61-bd73-41cc-bb41-8bc3fe53195c','888192f6-1cfe-49bb-a186-326e7f6a0826','d44a281b-3c9c-4f88-a12d-e03c552503b3','scroll','/collection',NULL,0,50,1789381669429);
INSERT INTO "analytics_events" VALUES('79c73821-3cd1-4601-8440-2ec1844b44bb','26041d58-dc45-4f10-a755-42931686485a','c3aa941e-c478-42c6-a21b-2cfe4101a4e5','visit','/',NULL,0,0,1789457857817);
INSERT INTO "analytics_events" VALUES('7be67b15-8109-4e4a-8704-c526b7326f6e','956cee40-24e7-4cdf-86ec-879a3bef8693','8b09002c-33b9-4674-994c-04e145485551','page_view','/',NULL,0,0,1789382266601);
INSERT INTO "analytics_events" VALUES('82cc8f63-0c5c-4841-a23b-8699cda9a6f5','956cee40-24e7-4cdf-86ec-879a3bef8693','8b09002c-33b9-4674-994c-04e145485551','visit','/',NULL,0,0,1789382266601);
INSERT INTO "analytics_events" VALUES('82f1e409-b954-46c7-aa62-1feea71e7ffd','ad4f8838-c331-4297-8ad6-d970828ae4c3','45450195-cd35-475a-9bec-eacfccdcf505','visit','/',NULL,0,0,1789222337104);
INSERT INTO "analytics_events" VALUES('85c66cd1-8ea6-4658-99d3-bd349b7f9f47','ad4f8838-c331-4297-8ad6-d970828ae4c3','45450195-cd35-475a-9bec-eacfccdcf505','page_view','/',NULL,0,0,1789222337104);
INSERT INTO "analytics_events" VALUES('85e2c5e3-1104-4650-b40f-c990579b0bbf','26041d58-dc45-4f10-a755-42931686485a','c3aa941e-c478-42c6-a21b-2cfe4101a4e5','page_view','/',NULL,0,0,1789457857817);
INSERT INTO "analytics_events" VALUES('86060625-aea8-4ee9-ad57-5cbe4ad4de2e','fc776343-fb6f-4077-a448-bbaa36b781a6','51f9dac1-c745-47c7-85c5-93fc6efd92ae','scroll','/',NULL,0,50,1789457244700);
INSERT INTO "analytics_events" VALUES('8fbc4169-1b1f-49e8-b947-c6835f88543c','888192f6-1cfe-49bb-a186-326e7f6a0826','d44a281b-3c9c-4f88-a12d-e03c552503b3','scroll','/collection',NULL,0,25,1789381651752);
INSERT INTO "analytics_events" VALUES('957852b7-512e-4f54-831f-284f50880197','209c05b9-1ea7-4a4c-8e6c-1081172e32d1','55100e76-f7b8-4ace-987d-cf6af4855491','page_view','/',NULL,0,0,1789382265817);
INSERT INTO "analytics_events" VALUES('97523b82-fda7-4adb-b9fb-8dec1f4b0996','f3250bf0-4e9a-45fc-9d6c-2376fa9bf0ab','15a6e1b5-3952-4c2c-881f-7a7615576081','scroll','/wedding-and-events',NULL,0,75,1789394751651);
INSERT INTO "analytics_events" VALUES('98cf61e5-c40d-4326-8a51-781b09bea5d6','9c7c2f54-c850-40ec-9169-6f27ead3a4d4','50e2899b-fd6e-42ef-8267-8676fac49e17','page_view','/',NULL,0,0,1789457554911);
INSERT INTO "analytics_events" VALUES('9995cacb-7e29-4bab-a2a8-2ea4face1ab3','9c7c2f54-c850-40ec-9169-6f27ead3a4d4','50e2899b-fd6e-42ef-8267-8676fac49e17','visit','/',NULL,0,0,1789457554911);
INSERT INTO "analytics_events" VALUES('9bd43271-74c1-4a90-8576-2911b4ab0ea7','9810fc9b-8fd9-4662-8ae3-8de2c6516c09','920aa047-9cef-4485-845a-ef5144381018','page_view','/collection',NULL,0,0,1789456332982);
INSERT INTO "analytics_events" VALUES('9c8ea84a-df45-43b9-b178-a58e51489bdb','7cc4e7f8-9193-43bb-bd29-186f5486c1a0','3171ed2c-7674-431e-9ac7-cc50b0cd1624','visit','/',NULL,0,0,1789454605211);
INSERT INTO "analytics_events" VALUES('9d352c39-c6e2-4524-b85d-b50cc7495c1e','f3250bf0-4e9a-45fc-9d6c-2376fa9bf0ab','0631162f-9bbf-44ca-8b7b-040401738bf8','visit','/',NULL,0,0,1789394669534);
INSERT INTO "analytics_events" VALUES('9d735cf3-2805-4b41-917d-eeacea74e2b8','d4fcde2f-1cc6-4db7-8c7b-0f9dcccd0e6e','4eb79b06-30c4-4d04-a8e6-23033021a282','visit','/',NULL,0,0,1789457903718);
INSERT INTO "analytics_events" VALUES('9f5a08e8-9569-4afe-b277-56cbafb3c839','d4fcde2f-1cc6-4db7-8c7b-0f9dcccd0e6e','4eb79b06-30c4-4d04-a8e6-23033021a282','page_view','/',NULL,0,0,1789457903718);
INSERT INTO "analytics_events" VALUES('a0f12242-77be-4bee-bf84-3870099aaaf1','2ab944ec-4a45-4f8e-9576-2c23073b02bd','67cbf2a8-3316-4bc6-9fba-f30d3cbb0b04','page_view','/',NULL,0,0,1789457837125);
INSERT INTO "analytics_events" VALUES('a6f4fc05-fcf9-4291-9005-b3925cf6a8a9','fc776343-fb6f-4077-a448-bbaa36b781a6','51f9dac1-c745-47c7-85c5-93fc6efd92ae','visit','/',NULL,0,0,1789457216992);
INSERT INTO "analytics_events" VALUES('b0b4be8b-e1f6-404c-a6fa-e2b46975e6ac','888192f6-1cfe-49bb-a186-326e7f6a0826','0ac4e2ba-8e09-4c78-8e1b-7eeb0886e0cd','scroll','/about',NULL,0,25,1789381610438);
INSERT INTO "analytics_events" VALUES('b49eb3d8-cecd-48ce-a172-f2547ffc9112','c9d20e59-ba86-4435-96f9-02282815dda9','7feade55-d4f0-4e31-bf0d-5ab4b0d052c3','visit','/',NULL,0,0,1789385626750);
INSERT INTO "analytics_events" VALUES('b920f423-9708-424f-866b-f6bea13704d9','96c516ef-6a1e-42fc-93a9-b49bedef35c5','9b0e19ef-1ad4-47a3-b364-cb050a6619e6','page_view','/',NULL,0,0,1789454605758);
INSERT INTO "analytics_events" VALUES('c5eff28e-d03a-45d8-adb9-3690f36bc85c','f3250bf0-4e9a-45fc-9d6c-2376fa9bf0ab','0631162f-9bbf-44ca-8b7b-040401738bf8','page_view','/',NULL,0,0,1789394669534);
INSERT INTO "analytics_events" VALUES('c61fa798-3775-49e6-bf63-e6832b8c2908','e7e61e9c-a71d-4faf-9a46-649dadda25b8','b38c2c70-4d60-4dea-bbb1-b55aa46c4aaa','visit','/',NULL,0,0,1789215298421);
INSERT INTO "analytics_events" VALUES('c74d6ab4-81a9-46fb-b90c-42384549240a','8bd753db-2edf-4004-b2d5-ae8896470e4b','c39b783e-a3ab-4b4a-ab69-c39e31f937ee','visit','/',NULL,0,0,1789457578357);
INSERT INTO "analytics_events" VALUES('c8bbb6a0-0c9d-439a-a5ef-c8c557160bf9','9810fc9b-8fd9-4662-8ae3-8de2c6516c09','4f3cf6cf-8212-4b92-9fe1-831174129bed','scroll','/customize',NULL,0,100,1789456357415);
INSERT INTO "analytics_events" VALUES('cc47179b-e490-4279-b612-4e5d8e726e79','8bd753db-2edf-4004-b2d5-ae8896470e4b','c39b783e-a3ab-4b4a-ab69-c39e31f937ee','page_view','/',NULL,0,0,1789457578357);
INSERT INTO "analytics_events" VALUES('ccdb3f39-c177-4b4f-a0ab-e4b1f2c9d122','e64d7a57-fb68-4253-a964-4488974bbb85','81aa60bb-7fe8-46fd-b4a9-17975288f5e2','scroll','/collection',NULL,0,25,1789247420137);
INSERT INTO "analytics_events" VALUES('cd08c454-4247-4068-879b-c715b4641399','e7e61e9c-a71d-4faf-9a46-649dadda25b8','b38c2c70-4d60-4dea-bbb1-b55aa46c4aaa','page_view','/',NULL,0,0,1789215298421);
INSERT INTO "analytics_events" VALUES('cd1f5ffd-cac5-4839-b8f1-3269943d26d5','2ab944ec-4a45-4f8e-9576-2c23073b02bd','67cbf2a8-3316-4bc6-9fba-f30d3cbb0b04','visit','/',NULL,0,0,1789457837125);
INSERT INTO "analytics_events" VALUES('cd205690-3204-4551-9b80-925a3b084067','f3250bf0-4e9a-45fc-9d6c-2376fa9bf0ab','15a6e1b5-3952-4c2c-881f-7a7615576081','page_view','/wedding-and-events',NULL,0,0,1789394712644);
INSERT INTO "analytics_events" VALUES('ce42c4ce-cc8c-496b-b210-c45386df2221','e64d7a57-fb68-4253-a964-4488974bbb85','aedaa033-3611-4ee7-8520-1516e47bb65f','scroll','/',NULL,0,75,1789247410704);
INSERT INTO "analytics_events" VALUES('cefa92c6-4d82-4f41-9bd3-ca17b27ece4e','209c05b9-1ea7-4a4c-8e6c-1081172e32d1','55100e76-f7b8-4ace-987d-cf6af4855491','visit','/',NULL,0,0,1789382265817);
INSERT INTO "analytics_events" VALUES('d0ca252a-1945-49db-9a0e-01fd8cdf3747','e64d7a57-fb68-4253-a964-4488974bbb85','81aa60bb-7fe8-46fd-b4a9-17975288f5e2','scroll','/collection',NULL,0,50,1789247421398);
INSERT INTO "analytics_events" VALUES('d6d98203-40a4-4437-a400-16fff66c1b3f','f3250bf0-4e9a-45fc-9d6c-2376fa9bf0ab','2e042de8-3158-4017-b483-ad411374ade0','scroll','/about',NULL,0,100,1789394705148);
INSERT INTO "analytics_events" VALUES('dbce204b-6c0f-4bd0-a134-36294dd4ed60','e64d7a57-fb68-4253-a964-4488974bbb85','81aa60bb-7fe8-46fd-b4a9-17975288f5e2','scroll','/collection',NULL,0,100,1789247423490);
INSERT INTO "analytics_events" VALUES('e1fca66f-17d8-4e58-b657-bf16d2757dc5','9810fc9b-8fd9-4662-8ae3-8de2c6516c09','e3fb57c4-2002-4fa2-863e-7953f72450e3','page_view','/',NULL,0,0,1789456317585);
INSERT INTO "analytics_events" VALUES('e4e1bc6e-c1e0-4314-819e-7ef2558ece88','ad4f8838-c331-4297-8ad6-d970828ae4c3','45450195-cd35-475a-9bec-eacfccdcf505','scroll','/',NULL,0,50,1789222346124);
INSERT INTO "analytics_events" VALUES('e4f3b29c-5994-4ae7-bdab-e821c2185e0d','ad4f8838-c331-4297-8ad6-d970828ae4c3','45450195-cd35-475a-9bec-eacfccdcf505','scroll','/',NULL,0,25,1789222339556);
INSERT INTO "analytics_events" VALUES('e73134ce-6db6-4cf6-a264-2f788ca5e161','888192f6-1cfe-49bb-a186-326e7f6a0826','d44a281b-3c9c-4f88-a12d-e03c552503b3','scroll','/collection',NULL,0,75,1789381670074);
INSERT INTO "analytics_events" VALUES('e91e56b4-f2e5-4c54-aa84-22edec9a4987','eefdd17e-68d1-47d3-adae-bd8ad7a7325f','fac7ba86-8140-41e2-9e77-c028f9e6c8d0','page_view','/',NULL,0,0,1789457902335);
INSERT INTO "analytics_events" VALUES('e99148ac-8526-4588-b69c-11aed0b103a4','fc776343-fb6f-4077-a448-bbaa36b781a6','51f9dac1-c745-47c7-85c5-93fc6efd92ae','scroll','/',NULL,0,25,1789457238883);
INSERT INTO "analytics_events" VALUES('eca6fe83-6be1-4c1d-a169-5578ecd1b6da','09e04d09-c576-4458-b9f7-f3c0e7b23ce4','28dac960-faf8-4255-a278-0a58550a70cb','page_view','/',NULL,0,0,1789247410765);
INSERT INTO "analytics_events" VALUES('ef072e10-2415-4914-a7fa-6da52a532618','f3250bf0-4e9a-45fc-9d6c-2376fa9bf0ab','2e042de8-3158-4017-b483-ad411374ade0','scroll','/about',NULL,0,75,1789394692145);
INSERT INTO "analytics_events" VALUES('efd08475-c927-444e-874e-41e9500b4099','f3250bf0-4e9a-45fc-9d6c-2376fa9bf0ab','2e042de8-3158-4017-b483-ad411374ade0','page_view','/about',NULL,0,0,1789394670504);
INSERT INTO "analytics_events" VALUES('f00fb5fb-e035-4073-bb06-123390c9b126','9810fc9b-8fd9-4662-8ae3-8de2c6516c09','4f3cf6cf-8212-4b92-9fe1-831174129bed','page_view','/customize',NULL,0,0,1789456336002);
INSERT INTO "analytics_events" VALUES('f9cc90c3-9350-4c47-a63e-b456d825b18b','7cc4e7f8-9193-43bb-bd29-186f5486c1a0','3171ed2c-7674-431e-9ac7-cc50b0cd1624','page_view','/',NULL,0,0,1789454605211);
INSERT INTO "analytics_events" VALUES('fa0c4650-33b9-45b9-bcb6-a536d4ebb624','f3250bf0-4e9a-45fc-9d6c-2376fa9bf0ab','2e042de8-3158-4017-b483-ad411374ade0','scroll','/about',NULL,0,25,1789394688443);
INSERT INTO "analytics_events" VALUES('fd8a291c-611b-4ffa-893e-8667644fb420','888192f6-1cfe-49bb-a186-326e7f6a0826','c263e094-dd63-4137-b9dd-de36bf3a3203','visit','/',NULL,0,0,1789381606628);
CREATE TABLE `analytics_visitors` (
	`id` text PRIMARY KEY NOT NULL,
	`last_seen` integer NOT NULL,
	`page` text NOT NULL,
	`scrolling` integer DEFAULT 0 NOT NULL
);
INSERT INTO "analytics_visitors" VALUES('09e04d09-c576-4458-b9f7-f3c0e7b23ce4',1789247410765,'/',0);
INSERT INTO "analytics_visitors" VALUES('20852e91-ba29-462b-b727-85143dc58065',1789385624973,'/',0);
INSERT INTO "analytics_visitors" VALUES('209c05b9-1ea7-4a4c-8e6c-1081172e32d1',1789382265817,'/',0);
INSERT INTO "analytics_visitors" VALUES('26041d58-dc45-4f10-a755-42931686485a',1789457857817,'/',0);
INSERT INTO "analytics_visitors" VALUES('2ab944ec-4a45-4f8e-9576-2c23073b02bd',1789457880613,'/customize',0);
INSERT INTO "analytics_visitors" VALUES('56404de6-a418-45cd-9713-e1c68bc79ee9',1789457871820,'/',0);
INSERT INTO "analytics_visitors" VALUES('66cf1f04-1c50-4363-a696-3ab10b0d2a9d',1789215298467,'/',0);
INSERT INTO "analytics_visitors" VALUES('7cc4e7f8-9193-43bb-bd29-186f5486c1a0',1789454605211,'/',0);
INSERT INTO "analytics_visitors" VALUES('888192f6-1cfe-49bb-a186-326e7f6a0826',1789381729446,'/',1);
INSERT INTO "analytics_visitors" VALUES('8bd753db-2edf-4004-b2d5-ae8896470e4b',1789457593366,'/',0);
INSERT INTO "analytics_visitors" VALUES('956cee40-24e7-4cdf-86ec-879a3bef8693',1789382266601,'/',0);
INSERT INTO "analytics_visitors" VALUES('96c516ef-6a1e-42fc-93a9-b49bedef35c5',1789454605758,'/',0);
INSERT INTO "analytics_visitors" VALUES('9810fc9b-8fd9-4662-8ae3-8de2c6516c09',1789456357415,'/customize',1);
INSERT INTO "analytics_visitors" VALUES('9c7c2f54-c850-40ec-9169-6f27ead3a4d4',1789457554911,'/',0);
INSERT INTO "analytics_visitors" VALUES('ad4f8838-c331-4297-8ad6-d970828ae4c3',1789222346124,'/',1);
INSERT INTO "analytics_visitors" VALUES('af4954ff-6414-448b-8829-34879b09f38b',1789247407760,'/',0);
INSERT INTO "analytics_visitors" VALUES('bbdbf48a-e757-4a48-9559-bbccc41a9fac',1789457555147,'/',0);
INSERT INTO "analytics_visitors" VALUES('c9d20e59-ba86-4435-96f9-02282815dda9',1789385626750,'/',0);
INSERT INTO "analytics_visitors" VALUES('d4fcde2f-1cc6-4db7-8c7b-0f9dcccd0e6e',1789457903718,'/',0);
INSERT INTO "analytics_visitors" VALUES('e64d7a57-fb68-4253-a964-4488974bbb85',1789247433213,'/collection',1);
INSERT INTO "analytics_visitors" VALUES('e7e61e9c-a71d-4faf-9a46-649dadda25b8',1789215298421,'/',0);
INSERT INTO "analytics_visitors" VALUES('eefdd17e-68d1-47d3-adae-bd8ad7a7325f',1789457902335,'/',0);
INSERT INTO "analytics_visitors" VALUES('f3250bf0-4e9a-45fc-9d6c-2376fa9bf0ab',1789394756434,'/wedding-and-events',1);
INSERT INTO "analytics_visitors" VALUES('fc776343-fb6f-4077-a448-bbaa36b781a6',1789457261950,'/',1);
CREATE TABLE `commerce_expenses` (
	`id` text PRIMARY KEY NOT NULL,
	`date` text NOT NULL,
	`name` text NOT NULL,
	`amount` integer NOT NULL
);
CREATE TABLE `commerce_requests` (
	`id` text PRIMARY KEY NOT NULL,
	`session_id` text NOT NULL,
	`user_id` text,
	`kind` text NOT NULL,
	`data` text NOT NULL,
	`version` integer DEFAULT 0 NOT NULL,
	`created_at` integer NOT NULL
);
CREATE TABLE `consultation_slots` (
	`id` text PRIMARY KEY NOT NULL,
	`starts_at` integer NOT NULL,
	`ends_at` integer NOT NULL,
	`status` text DEFAULT 'available' NOT NULL,
	`request_id` text,
	`version` integer DEFAULT 0 NOT NULL
);
CREATE TABLE `demo_auth` (
	`token` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`role` text NOT NULL,
	`expires` integer NOT NULL
);
CREATE TABLE `demo_users` (
	`id` text PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
	`name` text NOT NULL,
	`phone` text NOT NULL,
	`hash` text NOT NULL,
	`salt` text NOT NULL
);
CREATE TABLE `order_drafts` (
	`id` text PRIMARY KEY NOT NULL,
	`session_id` text NOT NULL,
	`data` text NOT NULL,
	`created_at` integer NOT NULL
);
INSERT INTO "order_drafts" VALUES('ae0687b2-1c53-4860-884c-5490642a1be1','630bd7dd-7018-4a2e-9ba3-5d4e88040ac6','{"details":{"name":"Mohamad Abbas","phone":"+96176764263","recipient":"iuviwdv","city":"asyuc","address":"khalda","date":"2026-10-05","message":""},"cart":[{"key":"birthday-Signature-","productId":"birthday","quantity":1,"size":"Signature","note":""}],"status":"draft","country":"Lebanon"}',1789000901096);
CREATE TABLE `shop_sessions` (
	`id` text PRIMARY KEY NOT NULL,
	`data` text NOT NULL,
	`updated_at` integer NOT NULL
);
INSERT INTO "shop_sessions" VALUES('630bd7dd-7018-4a2e-9ba3-5d4e88040ac6','{"cart":[{"key":"birthday-Signature-","productId":"birthday","quantity":1,"size":"Signature","note":""}],"favorites":[],"design":null}',1789000845859);
INSERT INTO "shop_sessions" VALUES('de051556-37a5-452c-a3fd-5c77de200547','{"cart":[{"key":"custom-52fb34ab-f185-4293-8d5e-77d73c60f50e","productId":"custom","quantity":1,"size":"Custom","note":"","config":{"roses":9,"tulips":5,"peonies":3,"roseColor":"#ed8bab","tulipColor":"#f4ce56","leaves":true,"glitter":false,"stemLength":65,"wrap":"#eeded7","note":""}}],"favorites":[],"design":null}',1788825288810);
CREATE TABLE `site_content` (
	`id` text PRIMARY KEY NOT NULL,
	`data` text NOT NULL,
	`updated_at` integer NOT NULL
);
CREATE UNIQUE INDEX `demo_users_email_unique` ON `demo_users` (`email`);
CREATE INDEX `idx_commerce_session_created` ON `commerce_requests` (`session_id`,`created_at`);
CREATE INDEX `idx_commerce_user` ON `commerce_requests` (`user_id`);
CREATE INDEX `idx_commerce_created` ON `commerce_requests` (`created_at`);
CREATE INDEX `idx_analytics_created` ON `analytics_events` (`created_at`);
CREATE INDEX `idx_analytics_visitor_created` ON `analytics_events` (`visitor_id`,`created_at`);
CREATE INDEX `idx_analytics_last_seen` ON `analytics_visitors` (`last_seen`);
CREATE UNIQUE INDEX `consultation_slots_request_id_unique` ON `consultation_slots` (`request_id`);
CREATE INDEX `idx_consultation_status_start` ON `consultation_slots` (`status`,`starts_at`);
CREATE INDEX `idx_ai_subject_created` ON `ai_preview_attempts` (`subject`,`created_at`);
CREATE INDEX `idx_ai_created` ON `ai_preview_attempts` (`created_at`);
