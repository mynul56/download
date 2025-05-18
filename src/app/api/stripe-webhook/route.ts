
// This file is no longer used by the application as authentication and subscription
// features (including Stripe integration) have been removed based on the latest request.
// It is safe to delete this file or ensure it's not deployed/called.

/*
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { headers } from 'next/headers';
import { initializeApp, getApps, App, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

let adminApp: App;
if (!getApps().length) {
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string);
     adminApp = initializeApp({
        credential: cert(serviceAccount)
    });
} else {
    adminApp = getApps()[0];
}
const adminDb = getFirestore(adminApp);


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
});

const relevantEvents = new Set([
  'checkout.session.completed',
  'customer.subscription.updated',
  'customer.subscription.deleted',
  'customer.subscription.created',
]);

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = headers().get('Stripe-Signature') as string;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!sig || !webhookSecret) {
    console.error('Webhook secret or signature missing.');
    return NextResponse.json({ error: 'Webhook secret or signature not configured.' }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err: any) {
    console.error(`❌ Error message: ${err.message}`);
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  console.log(`🔔 Received Stripe event: ${event.type}`);

  if (relevantEvents.has(event.type)) {
    try {
      switch (event.type) {
        case 'checkout.session.completed': {
          const checkoutSession = event.data.object as Stripe.Checkout.Session;
          if (checkoutSession.mode === 'subscription') {
            const subscriptionId = checkoutSession.subscription;
            const customerId = checkoutSession.customer;
            const userId = checkoutSession.client_reference_id; 

            if (!userId) {
              console.error('User ID missing from checkout session metadata.');
              break; 
            }

            await updateSubscriptionStatus(userId, customerId as string, subscriptionId as string, true);
            console.log(`Subscription created for user ${userId}, customer ${customerId}, subscription ${subscriptionId}`);
          }
          break;
        }
        case 'customer.subscription.updated':
        case 'customer.subscription.created': 
        {
          const subscription = event.data.object as Stripe.Subscription;
          const customerId = subscription.customer as string;
          const userId = await findUserIdByStripeCustomerId(customerId); 

          if (!userId) {
             console.error(`Could not find user ID for Stripe customer ${customerId}`);
             break;
          }

          const isActive = subscription.status === 'active' || subscription.status === 'trialing';
          await updateSubscriptionStatus(userId, customerId, subscription.id, isActive);
          console.log(`Subscription updated for user ${userId}, status: ${subscription.status}`);
          break;
        }
        case 'customer.subscription.deleted': {
          const subscription = event.data.object as Stripe.Subscription;
           const customerId = subscription.customer as string;
           const userId = await findUserIdByStripeCustomerId(customerId);

           if (!userId) {
             console.error(`Could not find user ID for Stripe customer ${customerId} during deletion`);
             break;
           }
          await updateSubscriptionStatus(userId, customerId, subscription.id, false);
          console.log(`Subscription deleted for user ${userId}, customer ${customerId}`);
          break;
        }
        default:
          console.log(`Unhandled relevant event type: ${event.type}`);
      }
    } catch (error) {
      console.error('Error handling Stripe event:', error);
      return NextResponse.json({ error: 'Webhook handler failed. View logs.' }, { status: 500 });
    }
  } else {
     console.log(`Ignoring irrelevant event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}

async function updateSubscriptionStatus(userId: string, stripeCustomerId: string, stripeSubscriptionId: string, isSubscribed: boolean) {
  const userRef = adminDb.collection('users').doc(userId);

  try {
    await userRef.set({
      stripeCustomerId: stripeCustomerId,
      stripeSubscriptionId: stripeSubscriptionId,
      isSubscribed: isSubscribed,
    }, { merge: true }); 
    console.log(`Firestore updated for user ${userId}: isSubscribed = ${isSubscribed}`);
  } catch (error) {
      console.error(`Failed to update Firestore for user ${userId}:`, error);
  }
}

async function findUserIdByStripeCustomerId(customerId: string): Promise<string | null> {
    const usersRef = adminDb.collection('users');
    const querySnapshot = await usersRef.where('stripeCustomerId', '==', customerId).limit(1).get();

    if (querySnapshot.empty) {
        console.log(`No user found with Stripe customer ID: ${customerId}`);
        return null;
    }
    return querySnapshot.docs[0].id;
}

export async function GET() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
}
export async function PUT() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
}
export async function DELETE() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
}
*/
