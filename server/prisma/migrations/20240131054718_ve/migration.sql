/*
  Warnings:

  - Added the required column `name` to the `Shop` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Shop" ADD COLUMN     "name" TEXT NOT NULL;