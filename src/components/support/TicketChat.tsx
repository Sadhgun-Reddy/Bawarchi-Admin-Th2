import React from 'react';
import { Bot, Send, Bold, Italic, Link as LinkIcon, Paperclip, Image as ImageIcon } from 'lucide-react';

export const TicketChat: React.FC = () => {
    return (
        <div className="bg-surface rounded-xl shadow-card border border-border flex flex-col flex-1 overflow-hidden h-full min-h-[500px]">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-surface custom-scrollbar">
                {/* Date Divider */}
                <div className="flex items-center justify-center gap-4">
                    <div className="h-[1px] flex-1 bg-border"></div>
                    <span className="text-xs font-medium text-text-tertiary uppercase tracking-wider">Today</span>
                    <div className="h-[1px] flex-1 bg-border"></div>
                </div>

                {/* User Message */}
                <div className="flex gap-4 group">
                    <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-surface-secondary border border-border flex items-center justify-center font-bold text-sm text-text-secondary">
                            RS
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 max-w-[85%]">
                        <div className="flex items-baseline gap-2">
                            <span className="text-sm font-semibold text-text-primary">Rahul Sharma</span>
                            <span className="text-xs text-text-tertiary">10:23 AM</span>
                        </div>
                        <div className="bg-surface-secondary/50 p-4 rounded-2xl rounded-tl-none border border-border text-text-secondary leading-relaxed text-sm">
                            <p>Hi support team,</p>
                            <p className="mt-2">I can't log in to my chef dashboard. It says invalid credentials but I just reset my password about 10 minutes ago. I tried clearing my cache but it still doesn't work. Can you please check?</p>
                        </div>
                    </div>
                </div>

                {/* Bot Message */}
                <div className="flex flex-row-reverse gap-4 group">
                    <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                            <Bot className="w-5 h-5" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 items-end max-w-[85%]">
                        <div className="flex items-baseline gap-2 flex-row-reverse">
                            <span className="text-sm font-semibold text-text-primary">Support Bot</span>
                            <span className="text-xs text-text-tertiary">10:23 AM</span>
                        </div>
                        <div className="bg-accent/5 p-4 rounded-2xl rounded-tr-none border border-accent/10 text-text-secondary leading-relaxed text-sm text-left inline-block">
                            <p>Thank you for reaching out, Rahul. We have received your request (Ticket #39201) and a human agent will be with you shortly.</p>
                        </div>
                    </div>
                </div>

                {/* Admin Message */}
                <div className="flex flex-row-reverse gap-4 group">
                    <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground border border-accent/20 flex items-center justify-center font-bold text-sm">
                            A
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 items-end max-w-[85%]">
                        <div className="flex items-baseline gap-2 flex-row-reverse">
                            <span className="text-sm font-semibold text-text-primary">Admin User</span>
                            <span className="text-xs text-text-tertiary">10:45 AM</span>
                        </div>
                        <div className="bg-accent p-4 rounded-2xl rounded-tr-none text-accent-foreground leading-relaxed text-sm shadow-md shadow-accent/20 text-left inline-block">
                            <p>Hello Rahul, I'm looking into this right now. Could you please confirm if you are using the mobile app or the web browser?</p>
                        </div>
                    </div>
                </div>

                {/* User Reply */}
                <div className="flex gap-4 group">
                    <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-surface-secondary border border-border flex items-center justify-center font-bold text-sm text-text-secondary">
                            RS
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 max-w-[85%]">
                        <div className="flex items-baseline gap-2">
                            <span className="text-sm font-semibold text-text-primary">Rahul Sharma</span>
                            <span className="text-xs text-text-tertiary">10:48 AM</span>
                        </div>
                        <div className="bg-surface-secondary/50 p-4 rounded-2xl rounded-tl-none border border-border text-text-secondary leading-relaxed text-sm">
                            <p>I'm using Chrome on my laptop. Windows 11.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Input Area */}
            <div className="p-4 bg-surface-secondary/30 border-t border-border">
                <div className="relative bg-surface rounded-lg shadow-input border border-border focus-within:border-accent focus-within:ring-1 focus-within:ring-accent transition-all flex flex-col">
                    <div className="flex items-center gap-1 p-2 border-b border-border">
                        <button className="p-1.5 text-text-tertiary hover:text-text-secondary rounded hover:bg-surface-secondary"><Bold className="w-4 h-4" /></button>
                        <button className="p-1.5 text-text-tertiary hover:text-text-secondary rounded hover:bg-surface-secondary"><Italic className="w-4 h-4" /></button>
                        <button className="p-1.5 text-text-tertiary hover:text-text-secondary rounded hover:bg-surface-secondary"><LinkIcon className="w-4 h-4" /></button>
                        <div className="h-4 w-px bg-border mx-1"></div>
                        <button className="p-1.5 text-text-tertiary hover:text-text-secondary rounded hover:bg-surface-secondary"><Paperclip className="w-4 h-4" /></button>
                        <button className="p-1.5 text-text-tertiary hover:text-text-secondary rounded hover:bg-surface-secondary"><ImageIcon className="w-4 h-4" /></button>
                    </div>
                    <textarea
                        className="w-full border-0 focus:ring-0 p-3 text-sm text-text-primary bg-transparent placeholder-text-tertiary resize-none rounded-b-lg"
                        placeholder="Type your reply to Rahul..."
                        rows={3}
                    ></textarea>
                </div>
                <div className="flex justify-between items-center mt-3">
                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="internal_note" className="rounded border-border text-accent focus:ring-accent/50" />
                        <label htmlFor="internal_note" className="text-xs font-medium text-text-tertiary select-none cursor-pointer">Internal Note</label>
                    </div>
                    <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg text-accent-foreground bg-accent hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent shadow-sm transition-all gap-2">
                        <span>Reply</span>
                        <Send className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};
