//express-rate-limiter

import { rateLimit } from 'express-rate-limit'

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	
	// store: ... , // Use an external store for consistency across multiple server instances.
    message: 'too many api request hit'
})

// Apply the rate limiting middleware to all requests.
app.use(limiter)