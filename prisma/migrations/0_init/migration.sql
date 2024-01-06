-- CreateTable
CREATE TABLE "AboutProfile" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "AboutProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AboutMyHistory" (
    "id" SERIAL NOT NULL,
    "date" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "AboutMyHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SkillLanguageProficiency" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "proficiency" INTEGER NOT NULL,

    CONSTRAINT "SkillLanguageProficiency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SkillFrameworkProficiency" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "proficiency" INTEGER NOT NULL,

    CONSTRAINT "SkillFrameworkProficiency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SkillOtherProficiency" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "proficiency" INTEGER NOT NULL,

    CONSTRAINT "SkillOtherProficiency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Work" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "attribute" TEXT NOT NULL,
    "image_path" TEXT NOT NULL,
    "detail" TEXT NOT NULL,
    "point" TEXT NOT NULL,
    "tech" TEXT,
    "source_urls" TEXT[],
    "source_image_urls" TEXT[],

    CONSTRAINT "Work_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contest" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "attribute" TEXT NOT NULL,
    "image_path" TEXT NOT NULL,
    "detail" TEXT NOT NULL,
    "point" TEXT NOT NULL,
    "tech" TEXT,
    "source_urls" TEXT[],
    "source_image_urls" TEXT[],

    CONSTRAINT "Contest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContactEmailAndPhone" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "ContactEmailAndPhone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContactOthers" (
    "id" SERIAL NOT NULL,
    "contact_name" TEXT NOT NULL,
    "accout_name" TEXT NOT NULL,
    "account_url" TEXT NOT NULL,

    CONSTRAINT "ContactOthers_pkey" PRIMARY KEY ("id")
);

