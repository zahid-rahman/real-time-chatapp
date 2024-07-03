import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function loginUser(payload: any) {
  return {
    email: payload.email,
    passwor: payload.password,
  };
}

async function storeUser(payload: any) {
  const modifiedPayloadData = {
    password: '123456',
    ...payload
  }
  const response = await prisma.users.create({ data: modifiedPayloadData });
  return response;
}

async function getUserByEmail(email: string) {
  return await prisma.users.findUnique({
    where: {
      email,
    },
  });
}

export const AuthService = {
  loginUser,
  storeUser,
  getUserByEmail,
};
