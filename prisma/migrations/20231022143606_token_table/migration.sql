/*
  Warnings:

  - Added the required column `expiration` to the `Token` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Token" ADD COLUMN     "expiration" TIMESTAMP(3) NOT NULL;
