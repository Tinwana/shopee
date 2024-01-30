-- CreateEnum
CREATE TYPE "Sex" AS ENUM ('MALE', 'FEMAIL', 'ORTHER');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'SELLER', 'USER');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('SUCCESS', 'PENDING', 'FAILURE');

-- CreateTable
CREATE TABLE "Promotion" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "discountPercentage" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Promotion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL,
    "country_id" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "addressLine1" TEXT NOT NULL,
    "addressLine2" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Country" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "sex" "Sex",
    "email" TEXT NOT NULL,
    "birth" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "providerId" TEXT NOT NULL,
    "authProviderId" TEXT NOT NULL,
    "accountTypeId" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "password" TEXT,
    "accessToken" TEXT,
    "refreshToken" TEXT,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "avatar" TEXT,
    "verify" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActivationToken" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "ActivationToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuthProvider" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'credential',

    CONSTRAINT "AuthProvider_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AccountType" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'email',

    CONSTRAINT "AccountType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AccountPhoneNumber" (
    "id" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,

    CONSTRAINT "AccountPhoneNumber_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Nofication" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "images" TEXT[],

    CONSTRAINT "Nofication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cart" (
    "id" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CartItem" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "cartId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "CartItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "promotionId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" DOUBLE PRECISION NOT NULL,
    "stock" INTEGER NOT NULL,
    "images" TEXT[],
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 5,
    "soldOut" INTEGER NOT NULL DEFAULT 0,
    "cartId" TEXT,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shop" (
    "id" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "addressId" TEXT NOT NULL,
    "description" TEXT,
    "avatar" TEXT,
    "availableBalance" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "Shop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transection" (
    "id" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Transection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShopPhoneNumber" (
    "id" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,

    CONSTRAINT "ShopPhoneNumber_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "parentCategoryId" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Variant" (
    "id" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "Variant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VariantOption" (
    "id" TEXT NOT NULL,
    "variantId" TEXT NOT NULL,
    "optionName" TEXT NOT NULL,

    CONSTRAINT "VariantOption_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "orderDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "shippingAddressId" TEXT,
    "status" "Status" NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderItem" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AddressToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AccountToNofication" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ProductToTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CategoryToPromotion" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ActivationToken_email_key" ON "ActivationToken"("email");

-- CreateIndex
CREATE UNIQUE INDEX "AuthProvider_name_key" ON "AuthProvider"("name");

-- CreateIndex
CREATE UNIQUE INDEX "AccountType_type_key" ON "AccountType"("type");

-- CreateIndex
CREATE UNIQUE INDEX "Cart_accountId_key" ON "Cart"("accountId");

-- CreateIndex
CREATE UNIQUE INDEX "Shop_accountId_key" ON "Shop"("accountId");

-- CreateIndex
CREATE UNIQUE INDEX "Shop_addressId_key" ON "Shop"("addressId");

-- CreateIndex
CREATE UNIQUE INDEX "_AddressToUser_AB_unique" ON "_AddressToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_AddressToUser_B_index" ON "_AddressToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AccountToNofication_AB_unique" ON "_AccountToNofication"("A", "B");

-- CreateIndex
CREATE INDEX "_AccountToNofication_B_index" ON "_AccountToNofication"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToTag_AB_unique" ON "_ProductToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToTag_B_index" ON "_ProductToTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToPromotion_AB_unique" ON "_CategoryToPromotion"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToPromotion_B_index" ON "_CategoryToPromotion"("B");

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "AuthProvider"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_accountTypeId_fkey" FOREIGN KEY ("accountTypeId") REFERENCES "AccountType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AccountPhoneNumber" ADD CONSTRAINT "AccountPhoneNumber_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_promotionId_fkey" FOREIGN KEY ("promotionId") REFERENCES "Promotion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shop" ADD CONSTRAINT "Shop_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shop" ADD CONSTRAINT "Shop_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transection" ADD CONSTRAINT "Transection_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopPhoneNumber" ADD CONSTRAINT "ShopPhoneNumber_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_parentCategoryId_fkey" FOREIGN KEY ("parentCategoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Variant" ADD CONSTRAINT "Variant_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VariantOption" ADD CONSTRAINT "VariantOption_variantId_fkey" FOREIGN KEY ("variantId") REFERENCES "Variant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_shippingAddressId_fkey" FOREIGN KEY ("shippingAddressId") REFERENCES "Address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AddressToUser" ADD CONSTRAINT "_AddressToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Address"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AddressToUser" ADD CONSTRAINT "_AddressToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AccountToNofication" ADD CONSTRAINT "_AccountToNofication_A_fkey" FOREIGN KEY ("A") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AccountToNofication" ADD CONSTRAINT "_AccountToNofication_B_fkey" FOREIGN KEY ("B") REFERENCES "Nofication"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToTag" ADD CONSTRAINT "_ProductToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToTag" ADD CONSTRAINT "_ProductToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToPromotion" ADD CONSTRAINT "_CategoryToPromotion_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToPromotion" ADD CONSTRAINT "_CategoryToPromotion_B_fkey" FOREIGN KEY ("B") REFERENCES "Promotion"("id") ON DELETE CASCADE ON UPDATE CASCADE;
