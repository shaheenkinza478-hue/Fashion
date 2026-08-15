// app/api/chat/route.ts
import { NextResponse } from 'next/server';

// Saare messages yahan hain
const generateRuleBasedReply = (message: string): string => {
  const lower = message.toLowerCase();

  if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey') || lower.includes('assalam') || lower.includes('greetings')) {
    return "Hello! 😊 Welcome to FashionStore! I'm FashionBot, your personal shopping assistant. How can I help you today?";
  }
  if (lower.includes('men') || lower.includes('male') || lower.includes('boys') || lower.includes('mens')) {
    return "Great choice! 🕺 We have a fantastic collection of men's wear including shirts, trousers, jackets, and accessories. Would you like to see our latest arrivals?";
  }
  if (lower.includes('women') || lower.includes('female') || lower.includes('girls') || lower.includes('ladies') || lower.includes('womens')) {
    return "Perfect! 💃 Our women's collection features trendy dresses, tops, skirts, and more. Anything specific you're looking for?";
  }
  if (lower.includes('sale') || lower.includes('discount') || lower.includes('offer') || lower.includes('deal') || lower.includes('promo')) {
    return "You're in luck! 🎉 We have an ongoing SALE with up to 50% off on selected items. Check out our sale section for amazing deals!";
  }
  if (lower.includes('shipping') || lower.includes('delivery') || lower.includes('courier')) {
    return "📦 We offer free shipping on orders over $50! Standard delivery takes 3-5 business days. Express shipping is also available.";
  }
  if (lower.includes('return') || lower.includes('refund') || lower.includes('exchange')) {
    return "🔄 Our return policy is simple: 30-day hassle-free returns. If you're not satisfied, we'll refund your money or exchange the item.";
  }
  if (lower.includes('contact') || lower.includes('support') || lower.includes('help') || lower.includes('customer care')) {
    return "📞 You can reach our customer support at +1 234 567 8900 or email info@fashionstore.com. We're available 24/7!";
  }
  if (lower.includes('track') || lower.includes('order status') || lower.includes('where is my order')) {
    return "📋 To track your order, please login to your account and go to 'My Orders'. Or provide your order number and I'll assist you.";
  }
  if (lower.includes('size') || lower.includes('fit') || lower.includes('sizing')) {
    return "📏 We have a detailed size guide on each product page. Generally, our sizes run true to standard US sizing. Need help with a specific item?";
  }
  if (lower.includes('payment') || lower.includes('pay') || lower.includes('checkout')) {
    return "💳 We accept all major credit cards, PayPal, Apple Pay, and Google Pay. Your payment information is always secure.";
  }
  if (lower.includes('thank') || lower.includes('thanks')) {
    return "You're most welcome! 😊 Is there anything else I can help you with? Happy shopping at FashionStore!";
  }
  if (lower.includes('bye') || lower.includes('goodbye') || lower.includes('see you')) {
    return "Goodbye! 👋 Feel free to come back anytime if you have more questions. Have a stylish day!";
  }

  return "Thank you for your message! 🤔 I'm still learning. For specific queries, please visit our FAQ page or contact our support team. Meanwhile, can I help you with anything else?";
};

export async function POST(request: Request) {
  try {
    const { message } = await request.json();
    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY;

    // Agar OpenAI API key set hai to use karo, warna rule-based
    if (apiKey) {
      try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
              {
                role: 'system',
                content: 'You are a helpful shopping assistant for FashionStore, a clothing store. Answer customer queries politely and concisely.',
              },
              { role: 'user', content: message },
            ],
            max_tokens: 150,
          }),
        });

        const data = await response.json();
        const botReply = data.choices?.[0]?.message?.content || 'Sorry, I could not get a response.';
        return NextResponse.json({ reply: botReply });
      } catch (error) {
        console.error('OpenAI API error:', error);
        const fallbackReply = generateRuleBasedReply(message);
        return NextResponse.json({ reply: fallbackReply });
      }
    }

    // No API key: rule-based reply
    const reply = generateRuleBasedReply(message);
    return NextResponse.json({ reply });
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}