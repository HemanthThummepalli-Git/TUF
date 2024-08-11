/*
  Warnings:

  - Added the required column `DOC` to the `Flashcard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `author` to the `Flashcard` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Flashcard" ADD COLUMN     "DOC" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "author" TEXT NOT NULL;
