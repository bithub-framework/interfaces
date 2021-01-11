import Big from 'big.js';

export type Side = number;
export const BID: Side = 1;
export const ASK: Side = -1;

export type Operation = number;
export const OPEN: Operation = 1;
export const CLOSE: Operation = -1;

export type Length = number;
export const LONG: Length = 1;
export const SHORT: Length = -1;

export type OrderId = number | string;
export type TradeId = number | string;

export interface LimitOrder {
    price: Big;
    quantity: Big;
    side: Side;
    length: Length;
    operation: Operation;
    id: OrderId;
}

export interface OpenOrder extends LimitOrder {
    filled: Big;
}

export interface Trade {
    side: Side;
    price: Big;
    quantity: Big;
    time: number;
    id: TradeId;
}

export interface BookOrder {
    price: Big;
    quantity: Big;
    side: Side,
}

export interface Orderbook {
    [side: number]: BookOrder[],
    time: number;
}

export interface Positions {
    position: {
        [length: number]: Big;
    };
    closable: {
        [length: number]: Big;
    };
    time: number;
}

export interface Balances {
    balance: Big;

    reserve: Big;

    time: number;
}

export interface Assets extends
    Positions,
    Balances { }
