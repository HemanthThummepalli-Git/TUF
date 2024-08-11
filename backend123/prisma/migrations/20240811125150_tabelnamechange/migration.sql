/*
  Warnings:

  - You are about to drop the `Flashcard` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Flashcard";

-- CreateTable
CREATE TABLE "flashcard" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "DOC" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "flashcard_pkey" PRIMARY KEY ("id")
);
