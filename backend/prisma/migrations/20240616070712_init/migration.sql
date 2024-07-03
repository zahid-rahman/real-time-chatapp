/*
  Warnings:

  - You are about to drop the column `chat_room_id` on the `user_chat_rooms` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `user_chat_rooms` table. All the data in the column will be lost.
  - Added the required column `chatroomId` to the `user_chat_rooms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `user_chat_rooms` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "user_chat_rooms" DROP CONSTRAINT "user_chat_rooms_chat_room_id_fkey";

-- DropForeignKey
ALTER TABLE "user_chat_rooms" DROP CONSTRAINT "user_chat_rooms_user_id_fkey";

-- AlterTable
ALTER TABLE "user_chat_rooms" DROP COLUMN "chat_room_id",
DROP COLUMN "user_id",
ADD COLUMN     "chatroomId" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "messages" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "sent_at" TIMESTAMP(3) NOT NULL,
    "usersId" TEXT,
    "chatroomId" TEXT,

    CONSTRAINT "messages_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user_chat_rooms" ADD CONSTRAINT "user_chat_rooms_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_chat_rooms" ADD CONSTRAINT "user_chat_rooms_chatroomId_fkey" FOREIGN KEY ("chatroomId") REFERENCES "chat_rooms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_chatroomId_fkey" FOREIGN KEY ("chatroomId") REFERENCES "chat_rooms"("id") ON DELETE SET NULL ON UPDATE CASCADE;
