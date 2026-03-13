export interface AppDocument {
    name: string;
    type: string;
    size: string;
    uploadDate: string;
}

export interface ChecklistItem {
    id: string;
    label: string;
    subLabel: string;
    isVerified: boolean;
}

export interface CatererApplicationDetail {
    id: string;
    businessName: string;
    contactPerson: string;
    email: string;
    phone: string;
    address: string;
    capacity: string;
    cuisines: string[];
    documents: AppDocument[];
    checklist?: ChecklistItem[];
}
