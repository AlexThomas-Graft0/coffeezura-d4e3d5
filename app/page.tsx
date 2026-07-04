'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Coffee, Mountain } from 'lucide-react';

export default function CoffeezuraLanding() {
  return (
    <div className="min-h-screen bg-[#FFF5E6] text-[#111827] font-sans selection:bg-[#FAD4C0]">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1506377330803-01825c09e3bc?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover opacity-20"
            alt="Volcanic landscape"
          />
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="z-10 max-w-3xl">
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">Brew the Bold.<br/>Unearth the Extraordinary.</h1>
          <p className="text-xl md:text-2xl mb-8 font-light">Sourced from high-altitude volcanic slopes. Roasted for the modern explorer. Experience coffee that stands the test of time.</p>
          <button className="bg-[#111827] text-[#FFF5E6] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#374151] transition-all flex items-center gap-2 mx-auto">
            Start Your Expedition <ArrowRight size={20} />
          </button>
        </motion.div>
      </section>

      {/* Origin Story */}
      <section className="py-24 px-4 bg-[#FFF5E6]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Born in Fire, Refined by Altitude.</h2>
            <p className="text-lg leading-relaxed mb-8">Most coffee is grown in dirt. Ours is grown in the remnants of ancient eruptions. Coffeezura beans thrive in nutrient-dense, mineral-rich volcanic soil that produces a complexity you won’t find in mass-market roasts.</p>
            <div className="grid grid-cols-3 gap-4">
              {[ {label: '1,800+m', sub: 'Elevation'}, {label: 'Basalt', sub: 'Soil Profile'}, {label: 'Rare', sub: 'Yield'} ].map(stat => (
                <div key={stat.label} className="border-l-2 border-[#FAD4C0] pl-4">
                  <div className="font-mono font-bold">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#FAD4C0] h-96 rounded-3xl flex items-center justify-center">
            <Mountain size={120} className="text-[#FFF5E6]" />
          </div>
        </div>
      </section>

      {/* Collection */}
      <section className="py-24 bg-[#111827] text-[#FFF5E6]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">The Jurassic-Grade Collection</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Obsidian Dark', notes: 'Smoky, Fossilized Cocoa, Charred Oak' },
              { name: 'Volcanic Berry', notes: 'Bright Cherry, Molten Caramel, Ash-Dried Currant' },
              { name: 'Apex Medium', notes: 'Toasted Walnut, Earthy Spice, Raw Honey' }
            ].map((roast) => (
              <div key={roast.name} className="border border-[#374151] p-8 rounded-2xl hover:border-[#FAD4C0] transition-colors">
                <Coffee className="mb-6 text-[#FAD4C0]" />
                <h3 className="text-2xl font-bold mb-2">{roast.name}</h3>
                <p className="text-[#9CA3AF] mb-6 font-mono text-sm">{roast.notes}</p>
                <button className="w-full py-3 border border-[#FAD4C0] rounded-lg hover:bg-[#FAD4C0] hover:text-[#111827] transition-all">Claim Your Bag</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription */}
      <section className="py-24 px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">Join the Herd</h2>
        <p className="text-center mb-12 text-lg">Never run out of fuel. Members get priority access to micro-lot roasts.</p>
        <div className="space-y-4">
          {[
            { title: 'The Scout', desc: '1 Bag/Month - 10% off' },
            { title: 'The Explorer', desc: '2 Bags/Month - 15% off + Free Shipping' },
            { title: 'The Paleontologist', desc: '4 Bags/Month - 20% off + Exclusive Roasts' }
          ].map((tier) => (
            <div key={tier.title} className="flex justify-between items-center p-6 bg-white border border-[#E5E7EB] rounded-xl">
              <span className="font-bold text-lg">{tier.title}</span>
              <span className="text-[#6B7280]">{tier.desc}</span>
            </div>
          ))}
          <button className="w-full bg-[#D97706] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#B45309] transition-all">Join the Herd & Save</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111827] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Don’t Let Your Morning Go Extinct.</h3>
          <p className="mb-8 text-[#9CA3AF]">Join our expedition. Sign up for early access.</p>
          <div className="flex max-w-md mx-auto gap-2 mb-12">
            <input type="email" placeholder="Enter your email" className="flex-1 p-3 rounded-lg text-[#111827]" />
            <button className="bg-[#FAD4C0] text-[#111827] px-6 py-3 rounded-lg font-bold">Join</button>
          </div>
          <div className="flex justify-center gap-8 text-sm text-[#6B7280]">
            {['Shop', 'Roasts', 'Our Story', 'Wholesale', 'Login'].map(link => <a key={link} href="#" className="hover:text-[#FAD4C0]">{link}</a>)}
          </div>
          <p className="mt-8 text-xs text-[#374151]">© 2024 Coffeezura Roastery. Brewed for the Bold.</p>
        </div>
      </footer>
    </div>
  );
}