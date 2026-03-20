// Local cache of valid book IDs - populated via RabbitMQ events
const validBookIds = new Set<string>();

export function addBookToCache(bookId: string): void {
    validBookIds.add(bookId);
    console.log(`Orders cache: added book ${bookId}, total: ${validBookIds.size}`);
}

export function removeBookFromCache(bookId: string): void {
    validBookIds.delete(bookId);
}

export function isValidBookId(bookId: string): boolean {
    return validBookIds.has(bookId);
}

export function getCachedBookIds(): string[] {
    return Array.from(validBookIds);
}
