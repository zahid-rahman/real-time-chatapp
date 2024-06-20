-- CreateTable
CREATE TABLE "user_chat_rooms" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "chat_room_id" TEXT NOT NULL,

    CONSTRAINT "user_chat_rooms_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user_chat_rooms" ADD CONSTRAINT "user_chat_rooms_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_chat_rooms" ADD CONSTRAINT "user_chat_rooms_chat_room_id_fkey" FOREIGN KEY ("chat_room_id") REFERENCES "chat_rooms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
