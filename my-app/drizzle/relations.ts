import { relations } from "drizzle-orm/relations";
import { users, orders, orderItems, products, cart, payments } from "./schema";

export const ordersRelations = relations(orders, ({one, many}) => ({
	user: one(users, {
		fields: [orders.userId],
		references: [users.id]
	}),
	orderItems: many(orderItems),
	payments: many(payments),
}));

export const usersRelations = relations(users, ({many}) => ({
	orders: many(orders),
	carts: many(cart),
	payments: many(payments),
}));

export const orderItemsRelations = relations(orderItems, ({one}) => ({
	order: one(orders, {
		fields: [orderItems.orderId],
		references: [orders.id]
	}),
	product: one(products, {
		fields: [orderItems.productId],
		references: [products.id]
	}),
}));

export const productsRelations = relations(products, ({many}) => ({
	orderItems: many(orderItems),
	carts: many(cart),
}));

export const cartRelations = relations(cart, ({one}) => ({
	user: one(users, {
		fields: [cart.userId],
		references: [users.id]
	}),
	product: one(products, {
		fields: [cart.productId],
		references: [products.id]
	}),
}));

export const paymentsRelations = relations(payments, ({one}) => ({
	order: one(orders, {
		fields: [payments.orderId],
		references: [orders.id]
	}),
	user: one(users, {
		fields: [payments.userId],
		references: [users.id]
	}),
}));