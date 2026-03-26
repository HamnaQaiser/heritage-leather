import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, updateQuantity, removeFromCart, totalPrice, totalItems, clearCart } = useCart();
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleCheckout = () => {
    setIsOpen(false);
    navigate("/checkout");
  };

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-background/70 backdrop-blur-sm z-50" onClick={() => setIsOpen(false)} />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-card border-l border-border z-50 flex flex-col animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-primary" />
            <h2 className="font-display text-xl">Your Cart</h2>
            <span className="font-body text-xs text-muted-foreground">({totalItems} items)</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-muted-foreground/30 mb-4" />
              <p className="font-display text-lg mb-2">Your cart is empty</p>
              <p className="font-body text-sm text-muted-foreground">Add some luxury pieces to get started.</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.product.id} className="flex gap-4">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-20 h-20 object-cover rounded-sm border border-border"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-sm truncate">{item.product.name}</h3>
                  <p className="font-elegant text-primary text-sm">Rs. {item.product.price}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="w-7 h-7 flex items-center justify-center border border-border text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="font-body text-xs w-6 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="w-7 h-7 flex items-center justify-center border border-border text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="ml-auto text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <p className="font-elegant text-sm text-primary whitespace-nowrap">
                  Rs. {item.product.price * item.quantity}
                </p>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-border space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-body text-xs tracking-wider uppercase text-muted-foreground">Subtotal</span>
              <span className="font-elegant text-xl text-primary">Rs. {totalPrice}</span>
            </div>
            <p className="font-body text-[10px] text-muted-foreground">Shipping & taxes calculated at checkout</p>
            <Button variant="luxury" size="lg" className="w-full" onClick={handleCheckout}>
              Proceed to Checkout
            </Button>
            <button
              onClick={clearCart}
              className="w-full text-center font-body text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wider uppercase"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;