import { pgTable, unique, serial, varchar, text, timestamp, foreignKey, integer, numeric, boolean } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const users = pgTable("Users", {
	id: serial().primaryKey().notNull(),
	name: varchar({ length: 100 }),
	email: varchar({ length: 255 }),
	password: varchar({ length: 255 }),
	phone: varchar({ length: 20 }),
	address: text(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
}, (table) => [
	unique("Users_email_key").on(table.email),
]);

export const orders = pgTable("Orders", {
	id: serial().primaryKey().notNull(),
	userId: integer("user_id").notNull(),
	totalPrice: numeric("total_price", { precision: 10, scale:  2 }),
	status: varchar({ length: 50 }).default('pending'),
	isPaid: boolean("is_paid").default(false),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
}, (table) => [
	foreignKey({
			columns: [table.userId],
			foreignColumns: [users.id],
			name: "Orders_user_id_fkey"
		}),
]);

export const orderItems = pgTable("OrderItems", {
	id: serial().primaryKey().notNull(),
	orderId: integer("order_id").notNull(),
	productId: integer("product_id").notNull(),
	quantity: integer(),
	price: numeric({ precision: 10, scale:  2 }),
}, (table) => [
	foreignKey({
			columns: [table.orderId],
			foreignColumns: [orders.id],
			name: "OrderItems_order_id_fkey"
		}),
	foreignKey({
			columns: [table.productId],
			foreignColumns: [products.id],
			name: "OrderItems_product_id_fkey"
		}),
]);

export const cart = pgTable("Cart", {
	id: serial().primaryKey().notNull(),
	userId: integer("user_id").notNull(),
	productId: integer("product_id").notNull(),
	quantity: integer().default(1),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
}, (table) => [
	foreignKey({
			columns: [table.userId],
			foreignColumns: [users.id],
			name: "Cart_user_id_fkey"
		}),
	foreignKey({
			columns: [table.productId],
			foreignColumns: [products.id],
			name: "Cart_product_id_fkey"
		}),
]);

export const payments = pgTable("Payments", {
	id: serial().primaryKey().notNull(),
	orderId: integer("order_id").notNull(),
	userId: integer("user_id").notNull(),
	amount: numeric({ precision: 10, scale:  2 }),
	status: varchar({ length: 50 }).default('pending'),
	paymentMethod: varchar("payment_method", { length: 50 }),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
}, (table) => [
	foreignKey({
			columns: [table.orderId],
			foreignColumns: [orders.id],
			name: "Payments_order_id_fkey"
		}),
	foreignKey({
			columns: [table.userId],
			foreignColumns: [users.id],
			name: "Payments_user_id_fkey"
		}),
]);

export const products = pgTable("Products", {
	id: serial().primaryKey().notNull(),
	name: varchar({ length: 255 }),
	description: text(),
	price: numeric({ precision: 10, scale:  2 }),
	category: varchar({ length: 100 }),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
	image: varchar({ length: 255 }),
});
