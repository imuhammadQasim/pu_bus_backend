/*
  Warnings:

  - The primary key for the `location` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `location` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "BatchType" AS ENUM ('MORNING', 'AFTERNOON', 'EVENING');

-- AlterTable
ALTER TABLE "location" DROP CONSTRAINT "location_pkey",
DROP COLUMN "createdAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "location_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "location_id_seq";

-- CreateTable
CREATE TABLE "routes" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "routes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "waypoints" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "lng" DOUBLE PRECISION NOT NULL,
    "route_id" TEXT NOT NULL,

    CONSTRAINT "waypoints_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "route_batches" (
    "id" TEXT NOT NULL,
    "batch" "BatchType" NOT NULL,
    "route_id" TEXT NOT NULL,

    CONSTRAINT "route_batches_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "waypoints" ADD CONSTRAINT "waypoints_route_id_fkey" FOREIGN KEY ("route_id") REFERENCES "routes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "route_batches" ADD CONSTRAINT "route_batches_route_id_fkey" FOREIGN KEY ("route_id") REFERENCES "routes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
