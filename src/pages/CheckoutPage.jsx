import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { Button } from "../components/ui/button";
import { useCart } from "../contexts/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast } from "../hooks/use-tost";
import emailjs from "@emailjs/browser";

const CheckoutPage = () => {
  const { items, totalPrice, clearCart } = useCart();
  const [placed, setPlaced] = useState(false);

  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: ""
  });

  const [isProcessing, setIsProcessing] = useState(false);   

  const handlePlaceOrder = async () => {
   
    if (isProcessing) return; // ❌ ignore clicks while processing


    if (!form.email || !form.firstName || !form.address) {
      toast({ title: "Missing Fields", description: "Please fill all required fields." });
      return;
    }

    setIsProcessing(true); // ✅ start processing

    // Generate HTML for email
    let itemsHTML = items.map(item => `
      <table style="border-collapse: collapse; width: 100%; margin-bottom: 10px;">
        <tr>
          <td style="padding: 5px; width: 70px;">
            <img src="${item.product.image}" width="60" height="60" style="border: 1px solid #ddd;" />
          </td>
          <td style="padding: 5px;">
            <p style="margin:0;"><strong>${item.product.name}</strong></p>
            <p style="margin:0;">Qty: ${item.quantity}</p>
          </td>
          <td style="padding: 5px; text-align:right;">
            <p style="margin:0;">$${item.product.price * item.quantity}</p>
          </td>
        </tr>
      </table>
    `).join("");

    try {
      // ✅ 1. Send data to Google Sheets
      await fetch("https://script.google.com/macros/s/AKfycbwcpuuOobNHf1o2K0fJ-CMI0j3KC0Em1zS80o4eEqPwNpPNjORJ0FiGqTtu_DGSvdQuwQ/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: form.firstName + " " + form.lastName,
          email: form.email,
          phone: form.phone,
          address: `${form.address}, ${form.city}, ${form.state}, ${form.zip}`,
          items: items.map(i => ({
            name: i.product.name,
            qty: i.quantity,
            image: i.product.image
          })),
          total: totalPrice,
          payment: "Cash on Delivery"
        })
      });

      // ✅ 2. Send Email
      await emailjs.send(
        "service_ov93c9v",
        "template_0cpha0j",
        {
          name: form.firstName + " " + form.lastName,
          email: form.email,
          phone: form.phone,
          address: form.address,
          city: form.city,
          state: form.state,
          zip: form.zip,
          items_html: itemsHTML,
          total: totalPrice,
          payment: "Cash on Delivery"
        },
        "bCsdcjDFLaSlZooet"
      );

      // ✅ Success
      setPlaced(true);
      clearCart();
      toast({ title: "Order Placed!", description: "Order saved & email sent." });

    } catch (error) {
      console.error(error);
      toast({ title: "Error", description: "Order failed." });
    } finally {
    setIsProcessing(false); // ✅ reset processing state
  }
  };

  if (placed) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 text-center container mx-auto px-4">
          <div className="w-20 h-20 rounded-full gold-gradient-bg mx-auto flex items-center justify-center mb-6">
            <ShieldCheck className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="font-display text-3xl md:text-4xl mb-4">Order Confirmed</h1>
          <p className="font-body text-muted-foreground max-w-md mx-auto mb-8">
            Your order has been placed with Cash on Delivery. We'll contact you soon.
          </p>
          <Button variant="luxury-outline" asChild>
            <Link to="/">Continue Shopping</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 text-center container mx-auto px-4">
          <h1 className="font-display text-3xl mb-4">Your Cart is Empty</h1>
          <Button variant="luxury-outline" asChild>
            <Link to="/">Browse Collection</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-20 container mx-auto px-4 md:px-8">
        <Link to="/" className="inline-flex items-center gap-2 font-body text-xs tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors mb-10">
          <ArrowLeft className="w-4 h-4" /> Continue Shopping
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h1 className="font-display text-2xl md:text-3xl mb-8">Checkout</h1>

            <div className="space-y-6">
              <input placeholder="Email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className="w-full h-11 bg-secondary border border-border px-4" />
              <input placeholder="Phone" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} className="w-full h-11 bg-secondary border border-border px-4" />

              <div className="grid grid-cols-2 gap-4">
                <input placeholder="First Name" value={form.firstName} onChange={(e) => setForm({...form, firstName: e.target.value})} className="w-full h-11 bg-secondary border border-border px-4" />
                <input placeholder="Last Name" value={form.lastName} onChange={(e) => setForm({...form, lastName: e.target.value})} className="w-full h-11 bg-secondary border border-border px-4" />
              </div>

              <input placeholder="Address" value={form.address} onChange={(e) => setForm({...form, address: e.target.value})} className="w-full h-11 bg-secondary border border-border px-4" />

              <div className="grid grid-cols-3 gap-4">
                <input placeholder="City" value={form.city} onChange={(e) => setForm({...form, city: e.target.value})} className="w-full h-11 bg-secondary border border-border px-4" />
                <input placeholder="State" value={form.state} onChange={(e) => setForm({...form, state: e.target.value})} className="w-full h-11 bg-secondary border border-border px-4" />
                <input placeholder="ZIP" value={form.zip} onChange={(e) => setForm({...form, zip: e.target.value})} className="w-full h-11 bg-secondary border border-border px-4" />
              </div>

              <div className="gold-divider-wide !mx-0" />

              <p className="text-sm text-muted-foreground">Payment Method: <strong>Cash on Delivery</strong></p>
            </div>
          </div>

          <div>
            <div className="luxury-card p-8 sticky top-28">
              <h2 className="font-display text-xl mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.product.id} className="flex items-center gap-4">
                    <img src={item.product.image} alt={item.product.name} className="w-14 h-14 object-cover border border-border" />
                    <div className="flex-1 min-w-0">
                      <p className="font-body text-sm truncate">{item.product.name}</p>
                      <p className="font-body text-xs text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-elegant text-sm text-primary">Rs. {item.product.price * item.quantity}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4 space-y-2">
                <div className="flex justify-between font-body text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${totalPrice}</span>
                </div>
                <div className="flex justify-between font-body text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-primary">Complimentary</span>
                </div>
                <div className="flex justify-between font-display text-lg pt-2 border-t border-border">
                  <span>Total</span>
                  <span className="text-primary">Rs. {totalPrice}</span>
                </div>
              </div>

              <Button variant="luxury" size="lg" className="w-full mt-6" disabled={isProcessing} onClick={handlePlaceOrder}>
                {isProcessing ? "Placing Order..." : `Place Order — Rs. ${totalPrice}`}
              </Button>

              <div className="flex items-center justify-center gap-2 mt-4">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span className="font-body text-[10px] text-muted-foreground tracking-wider uppercase">Secure Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
