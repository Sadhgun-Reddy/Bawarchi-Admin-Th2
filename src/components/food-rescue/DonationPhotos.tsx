import React from 'react';
import { Camera, ZoomIn } from 'lucide-react';

export const DonationPhotos: React.FC = () => {
    return (
        <div className="bg-surface border border-border rounded-xl p-6 shadow-card">
            <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-text-tertiary">photo_library</span>
                Donation Photos
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="aspect-square rounded-lg overflow-hidden border border-border group relative cursor-pointer shadow-sm">
                    <img alt="Food Tray 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEyVCHgffDWonmf8YQOqAR5DJraUFqnBiowVm0n1wYwnW-fCDFaoO7ePMfsB0gMOLluV-tQTYC4rCu30GDCsC5rU-d1X0M_OjDJ95ThqguiyHExMr5OkaFn0-QFG9vVtGmJYwzD4rYE-XomEcHDo4zVFx8UzQDFo9ZNIaYCMP0loslkmHw0TKRC1OYG6b2kr-Qi3stw6klLIxQ6KJZLK6Ipeml0Xa6SUmCCvQDwYUEHywrW53GEwcaYDtvJHlQo0dSwkI0dOLkqg" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <ZoomIn className="w-6 h-6 text-white" />
                    </div>
                </div>
                <div className="aspect-square rounded-lg overflow-hidden border border-border group relative cursor-pointer shadow-sm">
                    <img alt="Rice container" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBntJI-YOzm5Xe5gnfMsNGkb9eaKB5Xzv995aB3H_F8IoD6S7rjtfC0wXHcKXmny6_gVWeuTI_ul4S20JucJB5zlPrOOcHUQwM9HJvv4aOrtA4exb1Hx2GJ9oeRv975VibOLUyV7TTDdkm5blyGShqPxpixSxq5qU3IfcWY43dy1OAGwxEveuBiF0pDJMcAejdf9Ce9aGifE7OhHG7TXiZyS8eXhIiFYhqI6w79Jflyj5aLHnzRk6CBoeWeNVhEudwrLw6NKftiYg" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <ZoomIn className="w-6 h-6 text-white" />
                    </div>
                </div>
                <div className="aspect-square rounded-lg overflow-hidden border border-border group relative cursor-pointer shadow-sm">
                    <img alt="Bread Basket" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDk3UrYKR3ojtXwcZGmZM5U2l320khQLtSVBOjloZUrt4W44GPElmbarSwDdV__TMn2VN35xWqj2uxkqcxBTaNTxQzxEkD9TP-ujC9H2rJL82RtaxVCo2IRf1R5AOTOLP5gxe7wR5NPWZycBtzuYrbkCCCOZHEWnSF3CX1vVfaBoWHV4raZvlunoZa3CxDeEoNOGFqQb-ILTvYj9C6JwdvyqOYm0kKEm58sYI-wE7RjIx713iTVXK4UfXA9racH1GUCVlpFAxGCRQ" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <ZoomIn className="w-6 h-6 text-white" />
                    </div>
                </div>
                <div className="aspect-square rounded-lg border-2 border-dashed border-border flex flex-col items-center justify-center text-text-tertiary hover:text-text-secondary hover:border-border-secondary hover:bg-surface-secondary/50 transition-all cursor-pointer">
                    <Camera className="w-8 h-8 mb-2 text-text-tertiary" />
                    <span className="text-xs font-medium">Request More</span>
                </div>
            </div>
        </div>
    );
};
