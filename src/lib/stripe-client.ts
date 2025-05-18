
// This file is no longer used by the application as authentication and subscription
// features (including Stripe integration) have been removed based on the latest request.
// It is safe to delete this file.

/*
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { httpsCallable } from 'firebase/functions';
// Ensure functions is initialized in firebase-config if this were active
// import { functions } from './firebase-config'; 

let stripePromise: Promise<Stripe | null>;

const getStripe = (): Promise<Stripe | null> => {
  if (!stripePromise) {
    const publicKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    if (!publicKey) {
        console.error("Stripe publishable key is not set in environment variables.");
        return Promise.resolve(null);
    }
    stripePromise = loadStripe(publicKey);
  }
  return stripePromise;
};

// This Cloud Function would need to be deployed and firebase-config.ts would need to export 'functions'
// const createCheckoutSession = httpsCallable(functions, 'createStripeCheckoutSession');

export const initiateCheckout = async (userId: string, priceId: string = 'price_YOUR_STRIPE_PRICE_ID'): Promise<void> => {
    if (!userId) {
        throw new Error("User is not authenticated.");
    }
    if (priceId === 'price_YOUR_STRIPE_PRICE_ID') {
        console.warn("Using default Stripe Price ID. Replace 'price_YOUR_STRIPE_PRICE_ID' with your actual Price ID.");
    }

    try {
        // const result: any = await createCheckoutSession({ priceId: priceId, userId: userId });
        // const sessionId = result.data.sessionId;
        const sessionId = "mockSessionId"; // Placeholder if functions not active

        if (!sessionId) {
            throw new Error("Failed to create Stripe checkout session.");
        }

        const stripe = await getStripe();
        if (!stripe) {
            throw new Error("Stripe.js failed to load.");
        }

        const { error } = await stripe.redirectToCheckout({ sessionId });

        if (error) {
            console.error("Stripe checkout redirection error:", error);
            throw error;
        }

    } catch (error) {
        console.error("Error initiating checkout:", error);
        throw error;
    }
};

export default getStripe;
*/
