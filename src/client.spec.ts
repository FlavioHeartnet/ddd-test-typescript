import { describe, expect, test } from "vitest";
import { Client } from "./client";

describe('client test set', () => {
    test('create client', () => {
        expect(new Client).toBeInstanceOf(Client)
    });
});