-- CreateEnum
CREATE TYPE "LocationType" AS ENUM ('CAMPUS', 'HOSTEL', 'GROUND', 'GATE');

-- CreateEnum
CREATE TYPE "BatchType" AS ENUM ('MORNING', 'AFTERNOON', 'EVENING');

-- CreateTable
CREATE TABLE "location" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "LocationType" NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "lng" DOUBLE PRECISION NOT NULL,
    "info" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "location_pkey" PRIMARY KEY ("id")
);

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
