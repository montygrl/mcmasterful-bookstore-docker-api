const stockCache = new Map<string, number>();

export function updateStockCache(bookId: string, stock: number): void {
    stockCache.set(bookId, stock);
}

export function getCachedStock(bookId: string): number {
    return stockCache.get(bookId) ?? 0;
}
