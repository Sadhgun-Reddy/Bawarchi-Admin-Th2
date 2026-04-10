import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Eye, Building2, User, Mail, Phone, MapPin, ChefHat, UtensilsCrossed } from 'lucide-react';
import { CatererApplicationDetail, AppDocument } from '../../../types/catererReview.types';

// Main wrapper for all sections
export const ApplicationInfoSections: React.FC<{ application: CatererApplicationDetail }> = ({ application }) => {
    const containerVariants: any = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants: any = {
        hidden: { opacity: 0, y: 15 },
        show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
    };

    return (
        <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="show"
        >
            <motion.div variants={itemVariants}>
                <SectionHeader title="Business Information" />
                <div className="card-surface p-6 rounded-3xl shadow-massive dark:border dark:border-slate-800 dark:bg-slate-900">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InfoItem icon={<Building2 />} label="Registered Entity Name" value={application.businessName} />
                        <InfoItem icon={<User />} label="Contact Person" value={application.contactPerson} />
                        <InfoItem icon={<Mail />} label="Email Address" value={application.email} />
                        <InfoItem icon={<Phone />} label="Phone Number" value={application.phone} />
                        <div className="md:col-span-2 p-4 bg-surface-secondary dark:bg-slate-950 rounded-xl border border-border">
                            <InfoItem icon={<MapPin />} label="Registered Address" value={application.address} />
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div variants={itemVariants}>
                <SectionHeader title="Kitchen & Capacity Details" />
                <div className="card-surface p-6 rounded-3xl shadow-massive dark:border dark:border-slate-800 dark:bg-slate-900">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <InfoItem icon={<ChefHat />} label="Daily Prep Capacity" value={application.capacity} />

                            <div>
                                <p className="text-sm font-medium text-text-secondary mb-3 flex items-center gap-2">
                                    <UtensilsCrossed className="w-4 h-4" /> Cuisine Specialties
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {application.cuisines.map(cuisine => (
                                        <span
                                            key={cuisine}
                                            className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-50 border border-slate-100 dark:bg-slate-800 dark:border-slate-700 text-text-primary"
                                        >
                                            {cuisine}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="p-4 bg-surface-secondary dark:bg-slate-950 rounded-xl border border-border">
                            <h4 className="text-sm font-medium text-text-primary mb-2">Equipment Overview</h4>
                            <p className="text-sm text-text-secondary leading-relaxed">
                                Applicant has indicated they possess commercial-grade tandoor ovens, high-capacity fryers, and a dedicated cold-storage walk-in unit.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div variants={itemVariants}>
                <SectionHeader title="Verification Documents" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {application.documents.map((doc, idx) => (
                        <DocumentCard key={idx} doc={doc} />
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};

// Reusable micro-components
const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
    <div className="flex items-center gap-3 mb-4">
        <div className="w-1 h-5 bg-blue-500 rounded-full" />
        <h2 className="text-lg font-bold text-text-primary tracking-tight">{title}</h2>
    </div>
);

const InfoItem: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
    <div className="flex items-start gap-3">
        <div className="text-text-tertiary mt-0.5 child-svg:w-4 child-svg:h-4">
            {icon}
        </div>
        <div className="flex flex-col">
            <span className="text-xs font-medium text-text-secondary mb-1 uppercase tracking-wider">{label}</span>
            <span className="text-sm font-medium text-text-primary">{value}</span>
        </div>
    </div>
);

const DocumentCard: React.FC<{ doc: AppDocument }> = ({ doc }) => {
    return (
        <div className="group flex items-center justify-between p-4 card-surface rounded-2xl border border-border hover:border-blue-200 dark:hover:border-slate-700 dark:bg-slate-950 transition-colors shadow-none cursor-pointer">
            <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2.5 bg-surface-secondary dark:bg-slate-900 rounded-xl text-accent">
                    <FileText className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col min-w-0">
                    <span className="text-sm font-semibold text-text-primary truncate">{doc.name}</span>
                    <span className="text-xs text-text-secondary">
                        {doc.type} • {doc.size} • Uploaded {doc.uploadDate}
                    </span>
                </div>
            </div>
            <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-accent opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                <Eye className="w-3.5 h-3.5" /> View
            </button>
        </div>
    );
};
