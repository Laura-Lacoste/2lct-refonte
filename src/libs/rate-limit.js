// lib/rate-limit.js

const rateLimitStore = new Map();

export function checkRateLimit(ip, limit = 5, windowMs = 60 * 1000) {
  const now = Date.now();
  const entry = rateLimitStore.get(ip) || { count: 0, firstRequest: now };

  if (now - entry.firstRequest > windowMs) {
    // Reset la fenêtre
    rateLimitStore.set(ip, { count: 1, firstRequest: now });
    return { allowed: true };
  }

  entry.count += 1;
  rateLimitStore.set(ip, entry);

  if (entry.count > limit) {
    return {
      allowed: false,
      retryAfter: Math.ceil((windowMs - (now - entry.firstRequest)) / 1000),
    };
  }

  return { allowed: true };
}
